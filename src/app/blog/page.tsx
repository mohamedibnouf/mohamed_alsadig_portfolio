import type { Metadata } from "next";
import Link from "next/link";
import { Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on engineering, architecture, SaaS, Supabase, AI, and product thinking by Mohamed Al-Sadig Ibnouf.",
};

export default function BlogPage() {
  return (
    <section className="section-padding relative min-h-screen pt-24 sm:pt-28 md:pt-32">
      <div className="page-container">
        <SectionHeader
          label="Blog"
          title="Insights"
          subtitle="Thoughts on engineering, architecture, and product"
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="glass-card h-full p-5 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 sm:p-8">
                <Badge variant="accent" className="mb-3 sm:mb-4">
                  {post.category}
                </Badge>
                <h2 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-accent sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-text-muted">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
