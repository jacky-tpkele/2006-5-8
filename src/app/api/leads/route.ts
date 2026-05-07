import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type LeadRequest = {
  name?: string;
  email?: string;
  product?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LeadRequest;
  const missing = ["name", "email", "subject", "message"].filter((key) => !body[key as keyof LeadRequest]);

  if (missing.length > 0 || !body.email?.includes("@")) {
    return NextResponse.json({ ok: false, error: "Invalid lead payload" }, { status: 400 });
  }

  const leadId = `lead_${Date.now()}`;
  console.info("TPKELE lead received", {
    leadId,
    product: body.product,
    subject: body.subject,
    email: body.email,
  });

  return NextResponse.json({ ok: true, leadId });
}
