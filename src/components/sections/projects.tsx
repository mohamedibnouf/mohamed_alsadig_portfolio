"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { PageContainer } from "@/components/ui/page-container";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";
import { cn } from "@/lib/utils";

const categories = ["All", "Enterprise SaaS", "Medical Marketplace", "Corporate Website", "Food Delivery", "Luxury Brand", "Luxury Coffee"];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      <PageContainer>
        <SectionHeader
          label="02"
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="scrollbar-hide -mx-1 mb-8 flex gap-2 overflow-x-auto px-1 pb-2 sm:mb-12 sm:flex-wrap sm:overflow-visible">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "shrink-0 rounded-full px-3 py-2 text-xs transition-all duration-300 sm:px-4 sm:text-sm",
                filter === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-text-muted hover:bg-white/5 hover:text-white"
              )}
            >
              {cat === "All" ? t.projects.filterAll : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div
                    className={cn(
                      "glass-card relative overflow-hidden p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 sm:p-6 md:p-8",
                      project.featured && "md:col-span-2"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-80",
                        project.gradient
                      )}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <Badge variant="accent" className="mb-3 sm:mb-4">
                            {locale === "ar" ? project.categoryAr : project.category}
                          </Badge>
                          <h3 className="font-display text-xl font-bold text-white sm:text-2xl md:text-3xl">
                            {locale === "ar" ? project.titleAr : project.title}
                          </h3>
                          <p className="mt-2 text-sm text-text-muted sm:mt-3 sm:text-base">
                            {locale === "ar" ? project.taglineAr : project.tagline}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10 sm:h-12 sm:w-12">
                          <ArrowUpRight className="h-5 w-5 text-text-muted transition-colors group-hover:text-accent" />
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-text-muted">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <p className="group-hover-show mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-100 transition-opacity duration-300 sm:mt-6 sm:opacity-0 sm:group-hover:opacity-100">
                        {t.projects.viewCase}
                        <ArrowUpRight className="h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </PageContainer>
    </section>
  );
}
