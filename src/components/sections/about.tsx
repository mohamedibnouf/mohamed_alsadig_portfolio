"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutTimeline } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="01"
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mb-16 flex flex-wrap gap-3">
          {t.about.highlights.map((highlight, i) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-medium text-accent"
            >
              {highlight}
            </motion.span>
          ))}
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {aboutTimeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-bg-primary md:absolute md:left-1/2 md:-translate-x-1/2">
                  <span className="text-xs font-bold text-accent">{item.year}</span>
                </div>

                <div className={`flex-1 pl-16 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="glass-card p-6 transition-all duration-500 hover:border-accent/20">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {locale === "ar" ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-text-muted">
                      {locale === "ar" ? item.descriptionAr : item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
