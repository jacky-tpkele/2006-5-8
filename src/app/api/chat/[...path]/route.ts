import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CRM_BASE = process.env.CRM_API_BASE || "https://crm.tpkele.com";

// 把 /api/chat/<path> 透传到 CRM /api/chat/<path>，把 visitor_id 头一并转发
async function forward(request: Request, method: string, segments: string[]) {
  const target = `${CRM_BASE}/api/chat/${segments.join("/")}`;
  const url = new URL(request.url);
  const targetUrl = url.search ? `${target}${url.search}` : target;

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const visitorId = request.headers.get("x-visitor-id");
  if (visitorId) headers["X-Visitor-Id"] = visitorId;

  const init: RequestInit = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = await request.text();
  }

  try {
    const r = await fetch(targetUrl, init);
    const text = await r.text();
    return new NextResponse(text, {
      status: r.status,
      headers: { "Content-Type": r.headers.get("content-type") || "application/json" },
    });
  } catch (err) {
    return NextResponse.json({ message: "Upstream chat service unavailable" }, { status: 502 });
  }
}

export async function GET(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return forward(request, "GET", path || []);
}

export async function POST(request: Request, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return forward(request, "POST", path || []);
}
