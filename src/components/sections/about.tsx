"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { PageContainer } from "@/components/ui/page-container";
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
      <PageContainer>
        <SectionHeader
          label="01"
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="mb-10 flex flex-wrap gap-2 sm:mb-12 sm:gap-3 lg:mb-16">
          {t.about.highlights.map((highlight, i) => (
            <motion.span
              key={highlight}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent sm:px-5 sm:py-2 sm:text-sm"
            >
              {highlight}
            </motion.span>
          ))}
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 start-4 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent sm:start-6 md:start-1/2 md:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
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

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-bg-primary sm:h-12 sm:w-12 md:absolute md:start-1/2 md:-translate-x-1/2">
                  <span className="text-[10px] font-bold text-accent sm:text-xs">{item.year}</span>
                </div>

                <div
                  className={`min-w-0 flex-1 ps-12 sm:ps-16 md:ps-0 ${
                    i % 2 === 0 ? "md:pe-16 md:text-end" : "md:ps-16 md:text-start"
                  }`}
                >
                  <div className="glass-card p-4 transition-all duration-500 hover:border-accent/20 sm:p-6">
                    <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                      {locale === "ar" ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted sm:mt-3 sm:text-base">
                      {locale === "ar" ? item.descriptionAr : item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
