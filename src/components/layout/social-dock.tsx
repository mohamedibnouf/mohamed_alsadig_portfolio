"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/social-icons";
import { socialLinks } from "@/data/site";

const links = [
  { href: socialLinks.github, icon: GitHubIcon, label: "GitHub" },
  { href: socialLinks.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
  { href: socialLinks.email, icon: Mail, label: "Email" },
  { href: socialLinks.whatsapp, icon: MessageCircle, label: "WhatsApp" },
];

export function SocialDock() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 4, duration: 0.8 }}
      className="fixed right-6 bottom-8 z-40 hidden flex-col gap-3 md:flex"
    >
      {links.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 4 + i * 0.1 }}
        >
          <Link
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex h-11 w-11 items-center justify-center rounded-full glass-card text-text-muted transition-all duration-300 hover:scale-110 hover:border-accent/30 hover:text-accent"
            aria-label={link.label}
          >
            <link.icon className="h-4 w-4" />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
