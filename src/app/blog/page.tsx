import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "@/components/PageTitle";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Solar DC & Low Voltage Protection Knowledge Base | TPKELE",
  description:
    "Practical guides on choosing MCBs, SPDs, ATS, PV combiner boxes and energy meters for solar and low voltage projects. Selection rules, application tips and project recaps.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main>
      <PageTitle title="Blog" crumb="Blog" />
      <section className="section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                <Image src={post.image} alt={post.title} width={470} height={210} />
              </Link>
              <div>
                <time dateTime={post.date}>
                  {new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(post.date))}
                </time>
                <h2>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  Read article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
