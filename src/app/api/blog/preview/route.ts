// 文件位置：D:/TPKELE/5月5日网站/src/app/api/blog/preview/route.ts
// 用途：预览页 API —— 校验 blog_preview_tokens 后用 service key 拉未发布文章

import { NextRequest, NextResponse } from "next/server";

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const SB_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function sbService(path: string, opts: RequestInit = {}) {
  const key = SB_SERVICE_KEY || SB_ANON_KEY;
  const url = `${SB_URL}/rest/v1/${path}`;
  const res = await fetch(url, {
    ...opts,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      apikey: key!,
      Authorization: `Bearer ${key}`,
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  if (!res.ok) {
    const err = (data && typeof data === "object" && "message" in data
      ? (data as { message?: string }).message
      : null) || JSON.stringify(data);
    throw new Error(err);
  }
  return data;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const token = searchParams.get("token");

  if (!postId || !token) {
    return NextResponse.json({ error: "Missing postId or token" }, { status: 400 });
  }

  if (!SB_SERVICE_KEY) {
    return NextResponse.json(
      { error: "Server not configured: SUPABASE_SERVICE_ROLE_KEY missing" },
      { status: 500 }
    );
  }

  try {
    // 1. 查 token
    const rows = (await sbService(
      `blog_preview_tokens?token=eq.${encodeURIComponent(token)}&post_id=eq.${encodeURIComponent(postId)}&select=token,post_id,expires_at`
    )) as Array<{ token: string; post_id: string; expires_at: string }>;

    if (!rows || rows.length === 0) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const row = rows[0];
    if (new Date(row.expires_at) < new Date()) {
      return NextResponse.json({ error: "Token expired" }, { status: 401 });
    }

    // 2. 拉文章（不限 status）
    const posts = (await sbService(
      `blog_posts?id=eq.${encodeURIComponent(postId)}&select=*`
    )) as Array<Record<string, unknown>>;

    if (!posts || posts.length === 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, post: posts[0] });
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
