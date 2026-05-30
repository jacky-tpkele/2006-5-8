// 文件位置：D:/TPKELE/5月5日网站/src/app/api/blog/route.ts

import { NextRequest, NextResponse } from 'next/server';

const SB_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SB_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function fetchFromSupabase(path: string) {
  const url = `${SB_URL}/rest/v1/${path}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'apikey': SB_KEY!,
      'Authorization': `Bearer ${SB_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Supabase error: ${response.statusText}`);
  }

  return response.json();
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (slug) {
      // 获取单篇文章
      const posts = await fetchFromSupabase(
        `blog_posts?slug=eq.${slug}&status=eq.published&select=*`
      );

      if (!posts || posts.length === 0) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }

      const post = posts[0];

      // 转换为网站格式（包含 Phase 3 新字段）
      const blogPost = {
        slug: post.slug,
        title: post.title,
        seoTitle: post.meta_title || post.title,
        seoDescription: post.meta_description || post.title,
        mainKeyword: post.main_keyword,
        subKeywords: post.sub_keywords || [],
        date: post.published_at?.split('T')[0] || new Date().toISOString().split('T')[0],
        image: post.image_url || '/assets/blog/default.webp',
        excerpt: post.content.split('\n')[0].substring(0, 150),
        wordCount: post.word_count || 0,
        readingTime: post.reading_time || 0,
        intent: 'General information',
        body: parseMarkdownToSections(post.content),
        relatedProducts: [],
        // Phase 3 新字段
        faq: post.faq || [],
        internalLinks: post.internal_links || [],
        externalLinks: post.external_links || [],
      };

      return NextResponse.json(blogPost);
    } else {
      // 获取所有已发布的文章
      const posts = await fetchFromSupabase(
        `blog_posts?status=eq.published&order=published_at.desc&select=*`
      );

      const blogPosts = posts.map((post: any) => ({
        slug: post.slug,
        title: post.title,
        seoTitle: post.meta_title || post.title,
        seoDescription: post.meta_description || post.title,
        mainKeyword: post.main_keyword,
        subKeywords: post.sub_keywords || [],
        date: post.published_at?.split('T')[0] || new Date().toISOString().split('T')[0],
        image: post.image_url || '/assets/blog/default.webp',
        excerpt: post.content.split('\n')[0].substring(0, 150),
        wordCount: post.word_count || 0,
        readingTime: post.reading_time || 0,
        intent: 'General information',
        body: parseMarkdownToSections(post.content),
        relatedProducts: [],
        // Phase 3 新字段
        faq: post.faq || [],
        internalLinks: post.internal_links || [],
        externalLinks: post.external_links || [],
      }));

      return NextResponse.json(blogPosts);
    }
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// 将 Markdown 转换为章节格式
function parseMarkdownToSections(markdown: string) {
  const sections = [];
  const lines = markdown.split('\n');
  let currentSection: any = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: line.replace('## ', '').trim(),
        paragraphs: [],
        bullets: [],
      };
    } else if (line.startsWith('- ')) {
      if (currentSection) {
        currentSection.bullets.push(line.replace('- ', '').trim());
      }
    } else if (line.trim() && currentSection) {
      if (!line.startsWith('#')) {
        currentSection.paragraphs.push(line.trim());
      }
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
}
