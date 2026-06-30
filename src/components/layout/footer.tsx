"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { socialLinks } from "@/data/site";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

export function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer className="relative border-t border-white/5 bg-bg-secondary/50">
      <div className="page-container py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-secondary text-sm font-bold text-white">
              MA
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-white sm:text-base">
                Mohamed Al-Sadig Ibnouf
              </p>
              <p className="text-sm text-text-muted">{t.footer.built}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            <Link
              href={socialLinks.email}
              className="text-text-muted transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Mohamed Al-Sadig Ibnouf. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
