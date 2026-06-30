"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { PageContainer } from "@/components/ui/page-container";
import { Button } from "@/components/ui/button";
import { stats } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";
import { useLiteMode } from "@/hooks/use-lite-mode";

const Hero3DGradient = dynamic(
  () => import("@/components/effects/hero-3d").then((m) => m.Hero3DGradient),
  { ssr: false }
);

function Hero3D() {
  const lite = useLiteMode();
  if (lite) return null;
  return <Hero3DGradient />;
}

export function HeroSection() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const lite = useLiteMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: lite ? 0.2 : 3.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: lite ? 0.5 : 0.8, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <Hero3D />
      <PageContainer className="relative z-10">
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
            className="font-display text-[1.75rem] leading-[1.15] font-bold tracking-tight text-white min-[400px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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
            className="mt-5 max-w-2xl text-base leading-relaxed text-text-muted sm:mt-8 sm:text-lg md:text-xl"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link href="#projects" className="w-full sm:w-auto">
              <Button magnetic className="w-full sm:w-auto">
                {t.hero.ctaProjects}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="/cv.pdf" download className="w-full sm:w-auto">
              <Button variant="secondary" magnetic className="w-full sm:w-auto">
                <Download className="h-4 w-4" />
                {t.hero.ctaCV}
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="ghost" magnetic className="w-full sm:w-auto">
                <Mail className="h-4 w-4" />
                {t.hero.ctaContact}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: lite ? 0.5 : 4.5, duration: lite ? 0.5 : 0.8 }}
          className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-4 md:mt-24 md:grid-cols-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card group p-4 text-center transition-all duration-500 hover:border-accent/20 sm:p-6"
            >
              <motion.p
                className="font-display text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (lite ? 0.6 : 4.8) + i * 0.1, duration: 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-1.5 text-xs text-text-muted sm:mt-2 sm:text-sm">
                {locale === "ar" ? stat.labelAr : stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </PageContainer>
    </section>
  );
}
