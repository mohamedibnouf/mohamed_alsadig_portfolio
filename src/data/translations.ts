import type { Locale } from "@/types";

type TranslationKeys = {
  hero: {
    headline: string;
    subheadline: string;
    ctaProjects: string;
    ctaCV: string;
    ctaContact: string;
  };
  about: {
    title: string;
    subtitle: string;
    highlights: string[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewCase: string;
    filterAll: string;
  };
  experience: {
    title: string;
    subtitle: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  achievements: {
    title: string;
    subtitle: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    location: string;
    send: string;
    name: string;
    message: string;
  };
  footer: {
    rights: string;
    built: string;
  };
  command: {
    placeholder: string;
    noResults: string;
  };
};

const translations: Record<Locale, TranslationKeys> = {
  en: {
    hero: {
      headline: "Building Digital Products\nThat Businesses Trust.",
      subheadline:
        "Software Engineer specialized in SaaS Platforms, Enterprise Systems, Modern Web Applications, and AI-assisted Development.",
      ctaProjects: "View Projects",
      ctaCV: "Download CV",
      ctaContact: "Contact Me",
    },
    about: {
      title: "About Me",
      subtitle: "Engineer. Builder. Problem Solver.",
      highlights: [
        "Product Thinking",
        "System Architecture",
        "Scalable Applications",
        "Leadership",
      ],
    },
    projects: {
      title: "Selected Work",
      subtitle: "Products that solve real business problems",
      viewCase: "View Case Study",
      filterAll: "All",
    },
    experience: {
      title: "Experience",
      subtitle: "Building products across roles and industries",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies I use to build premium products",
    },
    achievements: {
      title: "Achievements",
      subtitle: "Recognition and milestones",
    },
    blog: {
      title: "Insights",
      subtitle: "Thoughts on engineering, architecture, and product",
      readMore: "Read Article",
    },
    contact: {
      title: "Let's Build Something",
      subtitle: "Have a project in mind? Let's talk.",
      email: "Email",
      location: "Location",
      send: "Send Message",
      name: "Your Name",
      message: "Your Message",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with precision in Riyadh",
    },
    command: {
      placeholder: "Search pages, projects, actions...",
      noResults: "No results found.",
    },
  },
  ar: {
    hero: {
      headline: "أبني منتجات رقمية\nتثق بها الشركات.",
      subheadline:
        "مهندس برمجيات متخصص في منصات SaaS والأنظمة المؤسسية وتطبيقات الويب الحديثة والتطوير بمساعدة الذكاء الاصطناعي.",
      ctaProjects: "عرض المشاريع",
      ctaCV: "تحميل السيرة",
      ctaContact: "تواصل معي",
    },
    about: {
      title: "عني",
      subtitle: "مهندس. باني. حلال مشاكل.",
      highlights: [
        "التفكير المنتجي",
        "هندسة الأنظمة",
        "تطبيقات قابلة للتوسع",
        "القيادة",
      ],
    },
    projects: {
      title: "أعمال مختارة",
      subtitle: "منتجات تحل مشاكل أعمال حقيقية",
      viewCase: "عرض دراسة الحالة",
      filterAll: "الكل",
    },
    experience: {
      title: "الخبرة",
      subtitle: "بناء منتجات عبر أدوار وصناعات مختلفة",
    },
    skills: {
      title: "المهارات والخبرات",
      subtitle: "التقنيات التي أستخدمها لبناء منتجات متميزة",
    },
    achievements: {
      title: "الإنجازات",
      subtitle: "تقدير ومعالم",
    },
    blog: {
      title: "رؤى",
      subtitle: "أفكار حول الهندسة والهندسة المعمارية والمنتجات",
      readMore: "اقرأ المقال",
    },
    contact: {
      title: "لنبني شيئاً",
      subtitle: "لديك مشروع في ذهنك؟ لنتحدث.",
      email: "البريد",
      location: "الموقع",
      send: "إرسال الرسالة",
      name: "اسمك",
      message: "رسالتك",
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      built: "بُني بدقة في الرياض",
    },
    command: {
      placeholder: "ابحث في الصفحات والمشاريع والإجراءات...",
      noResults: "لا توجد نتائج.",
    },
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
