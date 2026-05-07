import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides for choosing low voltage protection products for electrical projects.",
};

export default function BlogPage() {
  return (
    <main>
      <PageTitle title="Blog" crumb="Blog" />
      <section className="section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Image src={post.image} alt={post.title} width={470} height={210} />
              <div>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.date))}
                </time>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/contact?intent=${encodeURIComponent(post.intent)}`}>
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
