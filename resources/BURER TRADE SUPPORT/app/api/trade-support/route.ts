import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const ALLOWED_EXTENSIONS = /\.(pdf|xlsx|xls|csv|png|jpe?g|webp)$/i;
const MAX_FILE_SIZE = 1024 * 1024;
const MAX_TOTAL_SIZE = 3 * 1024 * 1024;
const MAX_FILES = 3;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[c] || c));
}

function safeJson<T>(value: string, fallback: T): T {
  try { return JSON.parse(value) as T; } catch { return fallback; }
}

function referenceId() {
  const d = new Date();
  const date = `${d.getUTCFullYear()}${String(d.getUTCMonth()+1).padStart(2,"0")}${String(d.getUTCDate()).padStart(2,"0")}`;
  return `TPK-${date}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot: bots get a normal-looking success response without sending mail.
    if (clean(form.get("website"))) {
      return NextResponse.json({ ok: true, reference: referenceId() });
    }

    const company = clean(form.get("company"));
    const country = clean(form.get("country"));
    const contactName = clean(form.get("contactName"));
    const contact = clean(form.get("contact"));
    const product = clean(form.get("product"));
    const qty = clean(form.get("qty"));
    const destination = clean(form.get("destination"));
    const targetDate = clean(form.get("targetDate"));
    const notes = clean(form.get("notes"));
    const requirementsRaw = clean(form.get("requirements"));

    if (!company || !country || !contactName || !contact || !product || !qty) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const requirements: any = safeJson(requirementsRaw, {
      customization: [], documents: [], tradeTerm: "", paymentPreference: "", shippingMethod: ""
    });

    const fileEntries = form.getAll("files").filter((v): v is File => v instanceof File && v.size > 0);
    if (fileEntries.length > MAX_FILES) {
      return NextResponse.json({ error: `Maximum ${MAX_FILES} files are allowed.` }, { status: 400 });
    }

    let totalSize = 0;
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const file of fileEntries) {
      if (!ALLOWED_EXTENSIONS.test(file.name)) {
        return NextResponse.json({ error: `Unsupported file type: ${file.name}` }, { status: 400 });
      }
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: `${file.name} is larger than 1 MB.` }, { status: 400 });
      }
      totalSize += file.size;
      if (totalSize > MAX_TOTAL_SIZE) {
        return NextResponse.json({ error: "Total upload size must stay below 3 MB." }, { status: 400 });
      }
      attachments.push({
        filename: file.name.replace(/[^\w.\-() ]/g, "_"),
        content: Buffer.from(await file.arrayBuffer())
      });
    }

    const reference = referenceId();
    const to = process.env.TRADE_SUPPORT_TO_EMAIL || "jacky@tpkele.com";
    const from = process.env.TRADE_SUPPORT_FROM_EMAIL || "TPKELE Website <website@tpkele.com>";
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Email service is not configured. Add RESEND_API_KEY in Vercel Environment Variables." }, { status: 500 });
    }

    const list = (arr: unknown) => Array.isArray(arr) && arr.length ? arr.join(", ") : "None selected";
    const row = (label: string, value: unknown) => `
      <tr>
        <td style="padding:9px 12px;border:1px solid #e5e7eb;background:#f7f9f8;font-weight:700;width:210px">${escapeHtml(label)}</td>
        <td style="padding:9px 12px;border:1px solid #e5e7eb">${escapeHtml(String(value || "-"))}</td>
      </tr>`;

    const html = `
      <div style="font-family:Arial,sans-serif;color:#1f2933;max-width:850px;margin:auto">
        <div style="border-bottom:4px solid #16965a;padding:0 0 14px;margin-bottom:20px">
          <h2 style="margin:0">New Buyer Trade Support Request</h2>
          <p style="margin:6px 0 0;color:#667085">Reference: ${reference}</p>
        </div>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          ${row("Company", company)}
          ${row("Country / Market", country)}
          ${row("Contact Name", contactName)}
          ${row("Email / WhatsApp", contact)}
          ${row("Product / Model", product)}
          ${row("Estimated Quantity", qty)}
          ${row("Destination Port / City", destination)}
          ${row("Target Delivery Date", targetDate)}
          ${row("Customization & Packaging", list(requirements.customization))}
          ${row("Documents", list(requirements.documents))}
          ${row("Trade Term", requirements.tradeTerm)}
          ${row("Payment Preference", requirements.paymentPreference)}
          ${row("Shipping Method", requirements.shippingMethod)}
          ${row("Paper Box Details", JSON.stringify(requirements.paperBox || {}))}
          ${row("Plastic Pack Details", JSON.stringify(requirements.plasticPack || {}))}
          ${row("Marking Details", JSON.stringify(requirements.marking || {}))}
          ${row("Origin Purpose", requirements.origin?.purpose || "")}
          ${row("Uploaded Files", fileEntries.map(f => f.name).join(", "))}
          ${row("Additional Notes", notes)}
        </table>
      </div>`;

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: contact.includes("@") ? contact : undefined,
      subject: `New Trade Support Request - ${country} - ${product} - ${reference}`,
      html,
      attachments
    });

    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ error: "Email delivery failed. Please try again." }, { status: 502 });
    }

    const crmWebhook = process.env.CRM_WEBHOOK_URL;
    if (crmWebhook) {
      try {
        await fetch(crmWebhook, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            reference,
            source: "buyer-trade-support-v9",
            company, country, contactName, contact, product, qty, destination, targetDate, notes,
            requirements,
            files: fileEntries.map(f => ({ name: f.name, size: f.size, type: f.type }))
          })
        });
      } catch (crmError) {
        console.error("CRM webhook failed:", crmError);
      }
    }

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
