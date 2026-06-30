"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { PageContainer } from "@/components/ui/page-container";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

export function BlogPreviewSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section className="section-padding relative bg-bg-secondary/30">
      <PageContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            label="06"
            title={t.blog.title}
            subtitle={t.blog.subtitle}
            className="mb-0 sm:mb-0"
          />
          <Link
            href="/blog"
            className="mb-0 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-white sm:mb-16"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-0 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="glass-card h-full p-4 transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 sm:p-6">
                  <Badge variant="accent" className="mb-4">
                    {locale === "ar" ? post.categoryAr : post.category}
                  </Badge>
                  <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-accent">
                    {locale === "ar" ? post.titleAr : post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-muted">
                    {locale === "ar" ? post.excerptAr : post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-xs text-text-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {locale === "ar" ? post.readTimeAr : post.readTime}
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
