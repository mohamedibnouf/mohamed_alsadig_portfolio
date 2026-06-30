import type { Experience, SkillCategory, BlogPost, Testimonial, Stat, TimelineItem } from "@/types";

export const stats: Stat[] = [
  { value: "15+", label: "Projects", labelAr: "مشروع" },
  { value: "5+", label: "Enterprise Systems", labelAr: "أنظمة مؤسسية" },
  { value: "3+", label: "Years Experience", labelAr: "سنوات خبرة" },
  { value: "100%", label: "Client Satisfaction", labelAr: "رضا العملاء" },
];

export const aboutTimeline: TimelineItem[] = [
  {
    year: "2019",
    title: "The Spark",
    titleAr: "البداية",
    description:
      "Discovered programming through competitive problem solving. ICPC competitions ignited a passion for building elegant solutions to complex problems.",
    descriptionAr:
      "اكتشفت البرمجة من خلال حل المسائل التنافسية. مسابقات ICPC أشعلت شغفاً ببناء حلول أنيقة للمشاكل المعقدة.",
  },
  {
    year: "2020",
    title: "First Real Products",
    titleAr: "أول المنتجات الحقيقية",
    description:
      "Moved beyond algorithms to building real applications. Started understanding that great code serves business outcomes, not just technical elegance.",
    descriptionAr:
      "تجاوزت الخوارزميات لبناء تطبيقات حقيقية. بدأت أفهم أن الكود العظيم يخدم نتائج الأعمال وليس الأناقة التقنية فقط.",
  },
  {
    year: "2021",
    title: "Enterprise Mindset",
    titleAr: "عقلية المؤسسات",
    description:
      "Joined Microlab and began working on enterprise systems. Learned system architecture, team leadership, and how to translate business requirements into scalable software.",
    descriptionAr:
      "انضممت إلى Microlab وبدأت العمل على الأنظمة المؤسسية. تعلمت هندسة الأنظمة والقيادة وكيفية ترجمة متطلبات الأعمال إلى برمجيات قابلة للتوسع.",
  },
  {
    year: "2023",
    title: "SaaS Builder",
    titleAr: "باني SaaS",
    description:
      "Led development of Sanadat Platform — a multi-tenant enterprise SaaS. Mastered subscriptions, RLS, and building products that businesses depend on daily.",
    descriptionAr:
      "قادت تطوير منصة سندات — SaaS مؤسسي متعدد المستأجرين. أتقنت الاشتراكات و RLS وبناء منتجات تعتمد عليها الشركات يومياً.",
  },
  {
    year: "2025",
    title: "Product Engineer",
    titleAr: "مهندس منتجات",
    description:
      "Today I build premium digital products that combine engineering excellence with product thinking. Every line of code serves a business goal.",
    descriptionAr:
      "اليوم أبني منتجات رقمية متميزة تجمع التميز الهندسي مع التفكير المنتجي. كل سطر كود يخدم هدفاً تجارياً.",
  },
];

export const experience: Experience[] = [
  {
    company: "Microlab",
    companyAr: "مايكرولاب",
    roles: [
      {
        title: "Software Engineer",
        titleAr: "مهندس برمجيات",
        period: "2023 — Present",
        periodAr: "2023 — الحاضر",
        description:
          "Building enterprise SaaS platforms, leading full-stack development, architecting scalable systems with Supabase, Next.js, and modern cloud infrastructure.",
        descriptionAr:
          "بناء منصات SaaS مؤسسية، قيادة التطوير الشامل، تصميم أنظمة قابلة للتوسع مع Supabase و Next.js والبنية السحابية الحديثة.",
      },
      {
        title: "Android Project Manager",
        titleAr: "مدير مشروع أندرويد",
        period: "2022 — 2023",
        periodAr: "2022 — 2023",
        description:
          "Managed Android development teams, coordinated releases, and ensured delivery of mobile products on schedule with high quality standards.",
        descriptionAr:
          "أدرت فرق تطوير أندرويد، نسقت الإصدارات، وضمنت تسليم منتجات الجوال في الوقت المحدد بمعايير جودة عالية.",
      },
      {
        title: "Digital Marketing Manager",
        titleAr: "مدير تسويق رقمي",
        period: "2021 — 2022",
        periodAr: "2021 — 2022",
        description:
          "Led digital marketing strategies, managed campaigns, and bridged the gap between technical products and market positioning.",
        descriptionAr:
          "قادت استراتيجيات التسويق الرقمي، أدرت الحملات، وجسرت الفجوة بين المنتجات التقنية وتموضع السوق.",
      },
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    nameAr: "اللغات",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 90 },
      { name: "Dart", level: 75 },
    ],
  },
  {
    name: "Frontend",
    nameAr: "الواجهة الأمامية",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 90 },
      { name: "Three.js", level: 75 },
    ],
  },
  {
    name: "Backend",
    nameAr: "الخلفية",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Supabase", level: 95 },
      { name: "PostgreSQL", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "Stripe", level: 85 },
    ],
  },
  {
    name: "Cloud",
    nameAr: "السحابة",
    skills: [
      { name: "Vercel", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
    ],
  },
  {
    name: "Architecture",
    nameAr: "الهندسة",
    skills: [
      { name: "System Design", level: 90 },
      { name: "Multi-Tenant", level: 95 },
      { name: "RLS & Security", level: 90 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    name: "AI",
    nameAr: "الذكاء الاصطناعي",
    skills: [
      { name: "AI-Assisted Dev", level: 90 },
      { name: "Prompt Engineering", level: 85 },
      { name: "LLM Integration", level: 80 },
      { name: "Automation", level: 85 },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-multi-tenant-saas",
    title: "Building Multi-Tenant SaaS with Supabase RLS",
    titleAr: "بناء SaaS متعدد المستأجرين مع Supabase RLS",
    excerpt:
      "A deep dive into architecting secure multi-tenant systems using Row Level Security, subscription tiers, and scalable database design.",
    excerptAr:
      "غوص عميق في تصميم أنظمة متعددة المستأجرين آمنة باستخدام أمان مستوى الصفوف ومستويات الاشتراك وتصميم قاعدة بيانات قابل للتوسع.",
    category: "Architecture",
    categoryAr: "الهندسة",
    date: "2025-03-15",
    readTime: "8 min read",
    readTimeAr: "8 دقائق قراءة",
  },
  {
    slug: "nextjs-performance-guide",
    title: "Next.js Performance: From Good to Perfect Lighthouse",
    titleAr: "أداء Next.js: من جيد إلى Lighthouse مثالي",
    excerpt:
      "Practical techniques for achieving 100 Lighthouse scores — image optimization, code splitting, and rendering strategies.",
    excerptAr:
      "تقنيات عملية لتحقيق درجات Lighthouse 100 — تحسين الصور وتقسيم الكود واستراتيجيات العرض.",
    category: "Next.js",
    categoryAr: "Next.js",
    date: "2025-02-20",
    readTime: "6 min read",
    readTimeAr: "6 دقائق قراءة",
  },
  {
    slug: "ai-assisted-development",
    title: "AI-Assisted Development: 10x Without Sacrificing Quality",
    titleAr: "التطوير بمساعدة AI: 10x دون التضحية بالجودة",
    excerpt:
      "How I integrate AI tools into my development workflow while maintaining production-grade code quality and architecture.",
    excerptAr:
      "كيف أدمج أدوات AI في سير عمل التطوير مع الحفاظ على جودة الكود والهندسة على مستوى الإنتاج.",
    category: "AI",
    categoryAr: "الذكاء الاصطناعي",
    date: "2025-01-10",
    readTime: "5 min read",
    readTimeAr: "5 دقائق قراءة",
  },
  {
    slug: "supabase-production-tips",
    title: "Supabase in Production: Lessons from Enterprise Deployments",
    titleAr: "Supabase في الإنتاج: دروس من عمليات النشر المؤسسية",
    excerpt:
      "Real-world lessons from deploying Supabase at scale — RLS policies, connection pooling, and migration strategies.",
    excerptAr:
      "دروس من العالم الحقيقي لنشر Supabase على نطاق واسع — سياسات RLS وتجميع الاتصالات واستراتيجيات الترحيل.",
    category: "Supabase",
    categoryAr: "Supabase",
    date: "2024-12-05",
    readTime: "7 min read",
    readTimeAr: "7 دقائق قراءة",
  },
  {
    slug: "saas-pricing-strategies",
    title: "SaaS Pricing Strategies That Actually Convert",
    titleAr: "استراتيجيات تسعير SaaS التي تحقق تحويلاً فعلياً",
    excerpt:
      "Product thinking meets engineering — how to design subscription tiers that align technical architecture with business goals.",
    excerptAr:
      "التفكير المنتجي يلتقي بالهندسة — كيفية تصميم مستويات اشتراك تتماشى الهندسة التقنية مع الأهداف التجارية.",
    category: "Business",
    categoryAr: "الأعمال",
    date: "2024-11-18",
    readTime: "6 min read",
    readTimeAr: "6 دقائق قراءة",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mohamed doesn't just write code — he builds products. Sanadat Platform transformed how we manage our business operations.",
    quoteAr:
      "محمد لا يكتب كوداً فقط — بل يبني منتجات. منصة سندات غيّرت طريقة إدارتنا لعملياتنا التجارية.",
    author: "Enterprise Client",
    role: "CEO, Business Solutions Co.",
    roleAr: "الرئيس التنفيذي، شركة حلول الأعمال",
  },
  {
    quote:
      "Exceptional attention to detail and product thinking. The Gulf Sanad platform exceeded our expectations in every way.",
    quoteAr:
      "اهتمام استثنائي بالتفاصيل والتفكير المنتجي. منصة خليج سند تجاوزت توقعاتنا في كل الجوانب.",
    author: "Healthcare Partner",
    role: "Director, Gulf Sanad",
    roleAr: "المدير، خليج سند",
  },
  {
    quote:
      "A rare combination of engineering excellence and business understanding. Delivered on time, on budget, and beyond scope.",
    quoteAr:
      "مزيج نادر من التميز الهندسي وفهم الأعمال. سلّم في الوقت المحدد وضمن الميزانية وتجاوز النطاق.",
    author: "Startup Founder",
    role: "Founder, Tech Startup",
    roleAr: "المؤسس، شركة تقنية ناشئة",
  },
];

export const achievements = [
  {
    value: 5,
    suffix: "+",
    label: "Enterprise SaaS Systems",
    labelAr: "أنظمة SaaS مؤسسية",
  },
  {
    value: 1,
    suffix: "",
    label: "ICPC National Winner",
    labelAr: "فائز وطني ICPC",
  },
  {
    value: 1,
    suffix: "",
    label: "Arab Regional Finalist",
    labelAr: "وصيف إقليمي عربي",
  },
  {
    value: 10,
    suffix: "+",
    label: "Technical Workshops",
    labelAr: "ورش عمل تقنية",
  },
];

export const navLinks = [
  { href: "#home", label: "Home", labelAr: "الرئيسية" },
  { href: "#about", label: "About", labelAr: "عني" },
  { href: "#projects", label: "Projects", labelAr: "المشاريع" },
  { href: "#experience", label: "Experience", labelAr: "الخبرة" },
  { href: "#skills", label: "Skills", labelAr: "المهارات" },
  { href: "/blog", label: "Blog", labelAr: "المدونة" },
  { href: "/contact", label: "Contact", labelAr: "تواصل" },
];

export const socialLinks = {
  email: "mailto:mohamedibnouf.en@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohamed-al-sadig-6b250a214",
  github: "https://github.com/Commergio",
  whatsapp: "https://wa.me/966567395986",
  phone: "+966 567395986",
};
