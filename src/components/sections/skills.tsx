"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { skillCategories } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white">{name}</span>
        <span className="text-text-muted">{level}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section id="skills" className="section-padding relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="04"
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              className="glass-card p-6 transition-all duration-500 hover:border-accent/20"
            >
              <h3 className="mb-6 font-display text-lg font-semibold text-white">
                {locale === "ar" ? category.nameAr : category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
