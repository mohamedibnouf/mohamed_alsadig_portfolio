"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const Hero3DGradient = dynamic(
  () => import("@/components/effects/hero-3d").then((m) => m.Hero3DGradient),
  { ssr: false }
);
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 3.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function HeroSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <Hero3DGradient />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            {t.hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {i === 0 ? (
                  <span className="text-gradient">{line}</span>
                ) : (
                  <span className="text-gradient-accent">{line}</span>
                )}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="#projects">
              <Button magnetic>
                {t.hero.ctaProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="/cv.pdf" download>
              <Button variant="secondary" magnetic>
                <Download className="h-4 w-4" />
                {t.hero.ctaCV}
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="ghost" magnetic>
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="mt-24 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card group p-6 text-center transition-all duration-500 hover:border-accent/20"
            >
              <motion.p
                className="font-display text-3xl font-bold text-white md:text-4xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.8 + i * 0.1, duration: 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-sm text-text-muted">
                {locale === "ar" ? stat.labelAr : stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
