import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const ALLOWED_EXTENSIONS = /\.(pdf|xlsx|xls|csv|png|jpe?g|webp)$/i;
const MAX_FILE_SIZE = 1024 * 1024; // 1 MB
const MAX_TOTAL_SIZE = 3 * 1024 * 1024; // 3 MB
const MAX_FILES = 3;

const CRM_URL = "https://crm.tpkele.com/api/trade-support-inquiry";

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

function safeJson<T>(value: string, fallback: T): T {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function referenceId(): string {
  const d = new Date();
  const date = `${d.getUTCFullYear()}${String(d.getUTCMonth() + 1).padStart(2, "0")}${String(d.getUTCDate()).padStart(2, "0")}`;
  return `TPK-${date}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    // Honeypot: bots get a normal-looking success response without sending to CRM
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
      customization: [],
      documents: [],
      tradeTerm: "",
      paymentPreference: "",
      shippingMethod: "",
    });

    const fileEntries = form.getAll("files").filter((v): v is File => v instanceof File && v.size > 0);
    if (fileEntries.length > MAX_FILES) {
      return NextResponse.json({ error: `Maximum ${MAX_FILES} files are allowed.` }, { status: 400 });
    }

    let totalSize = 0;
    const fileMetadata: Array<{ name: string; size: number; type: string; base64?: string }> = [];

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

      // Convert file to base64 for CRM transmission
      const buffer = Buffer.from(await file.arrayBuffer());
      fileMetadata.push({
        name: file.name.replace(/[^\w.\-() ]/g, "_"),
        size: file.size,
        type: file.type || "application/octet-stream",
        base64: buffer.toString("base64"),
      });
    }

    const reference = referenceId();

    // Send structured data to CRM
    try {
      const crmResponse = await fetch(CRM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reference,
          source: "buyer-trade-support-v9",
          timestamp: new Date().toISOString(),
          buyer: {
            company,
            country,
            contactName,
            contact,
          },
          order: {
            product,
            quantity: qty,
            destination,
            targetDate,
            notes,
          },
          requirements: {
            customization: requirements.customization || [],
            documents: requirements.documents || [],
            tradeTerm: requirements.tradeTerm || "",
            paymentPreference: requirements.paymentPreference || "",
            shippingMethod: requirements.shippingMethod || "",
            paperBox: requirements.paperBox || {},
            plasticPack: requirements.plasticPack || {},
            marking: requirements.marking || {},
            origin: requirements.origin || {},
          },
          files: fileMetadata,
        }),
      });

      if (!crmResponse.ok) {
        console.error("CRM forward failed:", crmResponse.status, await crmResponse.text());
        return NextResponse.json(
          { error: "Failed to submit inquiry. Please contact jacky@tpkele.com directly." },
          { status: 502 }
        );
      }
    } catch (crmError) {
      console.error("CRM webhook error:", crmError);
      return NextResponse.json(
        { error: "Failed to submit inquiry. Please contact jacky@tpkele.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("Trade support API error:", error);
    return NextResponse.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
