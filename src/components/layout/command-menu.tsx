"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  FolderOpen,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  Download,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/site";
import { projects as allProjects } from "@/data/projects";
import { useLocale } from "@/providers/locale-provider";
import { getTranslations } from "@/data/translations";

const iconMap: Record<string, LucideIcon> = {
  Home,
  About: User,
  Projects: FolderOpen,
  Experience: Briefcase,
  Skills: Code,
  Blog: BookOpen,
  Contact: Mail,
};

interface CommandItem {
  id: string;
  label: string;
  icon: LucideIcon;
  action: () => void;
  group: string;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { locale } = useLocale();
  const t = getTranslations(locale);

  const navigate = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    },
    [router]
  );

  const items: CommandItem[] = [
    ...navLinks.map((link) => ({
      id: link.href,
      label: locale === "ar" ? link.labelAr : link.label,
      icon: iconMap[link.label] || ArrowRight,
      action: () => navigate(link.href),
      group: "Navigation",
    })),
    ...allProjects.map((project) => ({
      id: project.slug,
      label: locale === "ar" ? project.titleAr : project.title,
      icon: FolderOpen,
      action: () => navigate(`/projects/${project.slug}`),
      group: "Projects",
    })),
    {
      id: "cv",
      label: "Download CV",
      icon: Download,
      action: () => {
        setOpen(false);
        window.open("/cv.pdf", "_blank");
      },
      group: "Actions",
    },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === "Enter" && filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    };
    window.addEventListener("keydown", handleNav);
    return () => window.removeEventListener("keydown", handleNav);
  }, [open, filtered, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/60 pt-[20vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="glass-card mx-4 w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/5 px-4 py-3">
              <Search className="h-4 w-4 text-text-muted" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.command.placeholder}
                className="flex-1 bg-transparent text-white placeholder:text-text-muted focus:outline-none"
              />
              <kbd className="hidden rounded border border-white/10 px-2 py-0.5 text-xs text-text-muted sm:inline">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="px-4 py-8 text-center text-sm text-text-muted">
                  {t.command.noResults}
                </p>
              ) : (
                filtered.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition-colors",
                      index === selectedIndex
                        ? "bg-accent/10 text-white"
                        : "text-text-muted hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    <span className="ml-auto text-xs text-text-muted">
                      {item.group}
                    </span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
