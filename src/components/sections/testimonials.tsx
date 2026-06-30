"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { locale } = useLocale();

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="relative">
          <Quote className="absolute -top-4 -left-2 h-12 w-12 text-accent/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-10 text-center md:p-14"
            >
              <p className="text-lg leading-relaxed text-white md:text-xl">
                &ldquo;{locale === "ar" ? testimonial.quoteAr : testimonial.quote}&rdquo;
              </p>
              <div className="mt-8">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm text-text-muted">
                  {locale === "ar" ? testimonial.roleAr : testimonial.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-accent/30 hover:text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-accent" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-accent/30 hover:text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
