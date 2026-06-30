import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-padding relative min-h-screen pt-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <Badge variant="accent" className="mb-6">
          {post.category}
        </Badge>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <div className="prose prose-invert mt-12 max-w-none">
          <p className="text-lg leading-relaxed text-text-muted">{post.excerpt}</p>

          <div className="mt-8 space-y-6 text-text-muted">
            <p>
              This article explores key concepts and practical approaches based on
              real-world experience building enterprise SaaS platforms and modern web
              applications. The insights shared here come from hands-on development
              of production systems serving businesses across the Gulf region.
            </p>
            <h2 className="font-display text-2xl font-semibold text-white">
              Key Takeaways
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Architecture decisions should align with business goals</li>
              <li>Security and scalability are non-negotiable in enterprise SaaS</li>
              <li>Performance optimization is a continuous process, not a one-time task</li>
              <li>Product thinking separates good engineers from great ones</li>
            </ul>
            <p>
              Full article content coming soon. Subscribe to stay updated on new
              insights about engineering, architecture, and product development.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
