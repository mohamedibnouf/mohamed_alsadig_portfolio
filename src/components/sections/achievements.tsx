"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { PageContainer } from "@/components/ui/page-container";
import { achievements } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AchievementsSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section className="section-padding relative bg-bg-secondary/30">
      <PageContainer>
        <SectionHeader
          label="05"
          title={t.achievements.title}
          subtitle={t.achievements.subtitle}
          align="center"
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-4 text-center sm:p-8"
            >
              <p className="font-display text-2xl font-bold text-gradient-accent sm:text-4xl md:text-5xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-xs text-text-muted sm:mt-3 sm:text-sm">
                {locale === "ar" ? item.labelAr : item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
