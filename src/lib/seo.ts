import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mohamedalsadig.dev";

export const siteConfig = {
  name: "Mohamed Al-Sadig Ibnouf",
  title: "Mohamed Al-Sadig Ibnouf — Software Engineer & SaaS Product Builder",
  description:
    "Software Engineer specialized in SaaS Platforms, Enterprise Systems, and Modern Web Applications. Building digital products that businesses trust.",
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.png`,
  creator: "@mohamedalsadig",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "SaaS",
    "Enterprise Systems",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Riyadh",
    "Saudi Arabia",
  ],
  author: {
    name: "Mohamed Al-Sadig Ibnouf",
    url: siteUrl,
    email: "mohamed@example.com",
    jobTitle: "Software Engineer",
    location: "Riyadh, Saudi Arabia",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      ar: `${siteConfig.url}?lang=ar`,
    },
  },
};

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    url: siteConfig.url,
    email: siteConfig.author.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Riyadh",
      addressCountry: "SA",
    },
    knowsLanguage: ["Arabic", "English"],
    sameAs: [
      "https://linkedin.com/in/mohamed-alsadig",
      "https://github.com/mohamed-alsadig",
    ],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };
}
