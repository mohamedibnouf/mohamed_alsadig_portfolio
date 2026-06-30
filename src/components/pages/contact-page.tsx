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
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "mohamed@example.com",
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
    value: "mohamed-alsadig",
    href: socialLinks.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "mohamed-alsadig",
    href: socialLinks.github,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+966 50 000 0000",
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
    <section className="section-padding relative min-h-screen pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </span>
          <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-lg text-text-muted">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            {contactMethods.map((method) => (
              <div key={method.label} className="glass-card flex items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <method.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-text-muted">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-medium text-white transition-colors hover:text-accent"
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
              <div className="glass-card flex h-full items-center justify-center p-12 text-center">
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
              <form onSubmit={handleSubmit} className="glass-card space-y-6 p-8">
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
      </div>
    </section>
  );
}
