import { NextRequest, NextResponse } from "next/server";
import { fetchPublishedBlogPost, fetchPublishedBlogPosts } from "@/lib/blog";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      const post = await fetchPublishedBlogPost(slug);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      return NextResponse.json(post);
    }

    return NextResponse.json(await fetchPublishedBlogPosts());
  } catch (error) {
    console.error("Blog API error:", error);
    return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
  }
}
