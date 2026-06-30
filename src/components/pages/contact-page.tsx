"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { PageContainer } from "@/components/ui/page-container";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamedibnouf.en@gmail.com",
    href: socialLinks.email,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Riyadh, Saudi Arabia",
    href: null,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "mohamed-al-sadig",
    href: socialLinks.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "Commergio",
    href: socialLinks.github,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: socialLinks.phone,
    href: socialLinks.whatsapp,
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-padding relative min-h-[100dvh] pt-24 sm:pt-28 md:pt-32">
      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 max-w-2xl sm:mb-12 lg:mb-16"
        >
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-accent sm:mb-4 sm:text-sm">
            Contact
          </span>
          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {t.contact.title}
          </h1>
          <p className="mt-3 text-base text-text-muted sm:mt-4 sm:text-lg">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-3 sm:space-y-4"
          >
            {contactMethods.map((method) => (
              <div key={method.label} className="glass-card flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-12 sm:w-12">
                  <method.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted sm:text-sm">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="break-all text-sm font-medium text-white transition-colors hover:text-accent sm:break-normal sm:text-base"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="font-medium text-white">{method.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {submitted ? (
              <div className="glass-card flex h-full items-center justify-center p-8 text-center sm:p-12">
                <div>
                  <p className="text-4xl">✓</p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-text-muted">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card space-y-4 p-5 sm:space-y-6 sm:p-8">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-text-muted">
                    {t.contact.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-text-muted">
                    {t.contact.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-text-muted">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-muted focus:border-accent/50 focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" magnetic className="w-full">
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}
