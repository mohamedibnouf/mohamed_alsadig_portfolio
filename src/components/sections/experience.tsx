"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { experience } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section id="experience" className="section-padding relative bg-bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="03"
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div ref={ref} className="space-y-12">
          {experience.map((company, ci) => (
            <motion.div
              key={company.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.2, duration: 0.7 }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-secondary/20 text-lg font-bold text-accent">
                  {company.company.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {locale === "ar" ? company.companyAr : company.company}
                  </h3>
                </div>
              </div>

              <div className="ml-7 space-y-6 border-l border-white/10 pl-8">
                {company.roles.map((role, ri) => (
                  <motion.div
                    key={role.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: ci * 0.2 + ri * 0.15, duration: 0.6 }}
                    className="glass-card p-6"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold text-white">
                        {locale === "ar" ? role.titleAr : role.title}
                      </h4>
                      <span className="text-sm text-accent">
                        {locale === "ar" ? role.periodAr : role.period}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-text-muted">
                      {locale === "ar" ? role.descriptionAr : role.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
