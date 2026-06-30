export type Locale = "en" | "ar";

export interface Project {
  slug: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  tagline: string;
  taglineAr: string;
  description: string;
  descriptionAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  architecture: string;
  architectureAr: string;
  technologies: string[];
  features: string[];
  featuresAr: string[];
  businessImpact: string;
  businessImpactAr: string;
  lessonsLearned: string[];
  lessonsLearnedAr: string[];
  role: string;
  roleAr: string;
  timeline: string;
  timelineAr: string;
  gradient: string;
  accentColor: string;
  year: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  companyAr: string;
  roles: {
    title: string;
    titleAr: string;
    period: string;
    periodAr: string;
    description: string;
    descriptionAr: string;
  }[];
}

export interface SkillCategory {
  name: string;
  nameAr: string;
  skills: { name: string; level: number }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  date: string;
  readTime: string;
  readTimeAr: string;
}

export interface Testimonial {
  quote: string;
  quoteAr: string;
  author: string;
  role: string;
  roleAr: string;
}

export interface Stat {
  value: string;
  label: string;
  labelAr: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
}
