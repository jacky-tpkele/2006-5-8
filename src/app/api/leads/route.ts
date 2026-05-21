import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type LeadRequest = {
  name?: string;
  email?: string;
  product?: string;
  subject?: string;
  message?: string;
};

const CRM_URL = "https://crm.tpkele.com/api/website-inquiry";

export async function POST(request: Request) {
  const body = (await request.json()) as LeadRequest;
  const missing = ["name", "email", "subject", "message"].filter((key) => !body[key as keyof LeadRequest]);

  if (missing.length > 0 || !body.email?.includes("@")) {
    return NextResponse.json({ ok: false, error: "Invalid lead payload" }, { status: 400 });
  }

  try {
    const crmResponse = await fetch(CRM_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        product: body.product || "",
        subject: body.subject,
        message: body.message,
      }),
    });

    if (!crmResponse.ok) {
      console.error("CRM forward failed:", crmResponse.status);
    }
  } catch (err) {
    console.error("CRM forward error:", err);
  }

  return NextResponse.json({ ok: true });
}
