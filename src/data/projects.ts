import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sanadat-platform",
    title: "Sanadat Platform",
    titleAr: "منصة سندات",
    category: "Enterprise SaaS",
    categoryAr: "منصة SaaS مؤسسية",
    tagline: "Multi-tenant enterprise platform for document management & business operations",
    taglineAr: "منصة مؤسسية متعددة المستأجرين لإدارة المستندات والعمليات التجارية",
    description:
      "A comprehensive enterprise SaaS platform built for businesses requiring secure document management, subscription billing, and role-based access control at scale.",
    descriptionAr:
      "منصة SaaS مؤسسية شاملة مبنية للشركات التي تحتاج إدارة مستندات آمنة وفوترة اشتراكات والتحكم في الوصول حسب الأدوار على نطاق واسع.",
    challenge:
      "Building a secure multi-tenant system with row-level security, complex subscription tiers, and real-time notifications across WhatsApp and PDF generation pipelines.",
    challengeAr:
      "بناء نظام متعدد المستأجرين آمن مع أمان على مستوى الصفوف ومستويات اشتراك معقدة وإشعارات فورية عبر واتساب وخطوط إنتاج PDF.",
    solution:
      "Architected a scalable Supabase backend with RLS policies, implemented Stripe subscriptions, built a comprehensive dashboard with role permissions, and integrated WhatsApp Business API for automated notifications.",
    solutionAr:
      "صممت بنية خلفية قابلة للتوسع مع سياسات RLS، ونفذت اشتراكات Stripe، وبنيت لوحة تحكم شاملة مع صلاحيات الأدوار، ودمجت واتساب للأعمال للإشعارات التلقائية.",
    architecture:
      "Next.js frontend → API Routes → Supabase (PostgreSQL + RLS) → Stripe Webhooks → WhatsApp API → PDF Generation Service",
    architectureAr:
      "واجهة Next.js ← مسارات API ← Supabase (PostgreSQL + RLS) ← Stripe Webhooks ← واتساب API ← خدمة إنشاء PDF",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
      "WhatsApp API",
      "PDF.js",
    ],
    features: [
      "Multi-Tenant Architecture",
      "Subscription Management",
      "Authentication & RLS",
      "Role-Based Dashboard",
      "PDF Generation",
      "WhatsApp Integration",
      "Role Permissions",
    ],
    featuresAr: [
      "بنية متعددة المستأجرين",
      "إدارة الاشتراكات",
      "المصادقة و RLS",
      "لوحة تحكم حسب الأدوار",
      "إنشاء PDF",
      "تكامل واتساب",
      "صلاحيات الأدوار",
    ],
    businessImpact:
      "Enabled businesses to digitize document workflows, reducing processing time by 70% and improving client satisfaction across enterprise accounts.",
    businessImpactAr:
      "مكّنت الشركات من رقمنة سير عمل المستندات، مما قلل وقت المعالجة بنسبة 70% وحسّن رضا العملاء عبر الحسابات المؤسسية.",
    lessonsLearned: [
      "RLS policies require careful testing across tenant boundaries",
      "Subscription webhooks need idempotent handling",
      "WhatsApp templates must be pre-approved for enterprise use",
    ],
    lessonsLearnedAr: [
      "سياسات RLS تتطلب اختباراً دقيقاً عبر حدود المستأجرين",
      "Webhooks الاشتراكات تحتاج معالجة متسقة",
      "قوالب واتساب يجب الموافقة عليها مسبقاً للاستخدام المؤسسي",
    ],
    role: "Lead Full Stack Developer",
    roleAr: "مطور Full Stack رئيسي",
    timeline: "2024 — Present",
    timelineAr: "2024 — الحاضر",
    gradient: "from-blue-600/20 via-violet-600/10 to-blue-900/20",
    accentColor: "#3B82F6",
    year: "2024",
    featured: true,
  },
  {
    slug: "gulf-sanad",
    title: "Gulf Sanad",
    titleAr: "خليج سند",
    category: "Medical Marketplace",
    categoryAr: "سوق طبي",
    tagline: "Connecting patients with trusted healthcare providers across the Gulf",
    taglineAr: "ربط المرضى بمقدمي الرعاية الصحية الموثوقين عبر الخليج",
    description:
      "A medical marketplace platform connecting patients with healthcare providers, featuring appointment booking, provider profiles, and secure medical record access.",
    descriptionAr:
      "منصة سوق طبي تربط المرضى بمقدمي الرعاية الصحية، مع حجز المواعيد وملفات المزودين والوصول الآمن للسجلات الطبية.",
    challenge:
      "Building a HIPAA-conscious marketplace with real-time availability, provider verification, and bilingual support for Gulf region users.",
    challengeAr:
      "بناء سوق واعٍ بمعايير الخصوصية مع توفر فوري والتحقق من المزودين ودعم ثنائي اللغة لمستخدمي منطقة الخليج.",
    solution:
      "Designed a provider-centric marketplace with verified profiles, intelligent search, appointment scheduling, and secure patient-provider communication channels.",
    solutionAr:
      "صممت سوقاً يركز على المزودين مع ملفات موثقة وبحث ذكي وجدولة مواعيد وقنوات تواصل آمنة بين المريض والمزود.",
    architecture:
      "Next.js App → Supabase Auth → PostgreSQL → Real-time Subscriptions → Search Index → Notification Service",
    architectureAr:
      "تطبيق Next.js ← مصادقة Supabase ← PostgreSQL ← اشتراكات فورية ← فهرس بحث ← خدمة إشعارات",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    features: [
      "Provider Marketplace",
      "Appointment Booking",
      "Provider Verification",
      "Bilingual Support",
      "Secure Messaging",
    ],
    featuresAr: [
      "سوق المزودين",
      "حجز المواعيد",
      "التحقق من المزودين",
      "دعم ثنائي اللغة",
      "مراسلة آمنة",
    ],
    businessImpact:
      "Streamlined healthcare access for thousands of patients, reducing appointment booking friction by 60%.",
    businessImpactAr:
      "سهّل الوصول للرعاية الصحية لآلاف المرضى، مما قلل عوائق حجز المواعيد بنسبة 60%.",
    lessonsLearned: [
      "Healthcare UX requires extreme clarity and trust signals",
      "Provider onboarding is the critical growth lever",
    ],
    lessonsLearnedAr: [
      "تجربة الرعاية الصحية تتطلب وضوحاً شديداً وإشارات ثقة",
      "إعداد المزودين هو محور النمو الحاسم",
    ],
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    timeline: "2023 — 2024",
    timelineAr: "2023 — 2024",
    gradient: "from-emerald-600/20 via-teal-600/10 to-emerald-900/20",
    accentColor: "#10B981",
    year: "2023",
    featured: true,
  },
  {
    slug: "commergio",
    title: "Commergio",
    titleAr: "كوميرجيو",
    category: "Corporate Website",
    categoryAr: "موقع مؤسسي",
    tagline: "Premium corporate presence for a leading commerce company",
    taglineAr: "حضور مؤسسي متميز لشركة تجارية رائدة",
    description:
      "A high-performance corporate website showcasing company services, team, and case studies with premium design and SEO optimization.",
    descriptionAr:
      "موقع مؤسسي عالي الأداء يعرض خدمات الشركة وفريقها ودراسات الحالة بتصميم متميز وتحسين محركات البحث.",
    challenge:
      "Delivering a luxury brand experience with perfect Lighthouse scores and multilingual content management.",
    challengeAr:
      "تقديم تجربة علامة تجارية فاخرة مع درجات Lighthouse مثالية وإدارة محتوى متعدد اللغات.",
    solution:
      "Built with Next.js SSG/ISR for blazing performance, implemented CMS-driven content, and crafted pixel-perfect responsive layouts.",
    solutionAr:
      "بُني بـ Next.js SSG/ISR لأداء فائق، مع محتوى مدفوع بنظام إدارة محتوى وتخطيطات متجاوبة بدقة.",
    architecture: "Next.js SSG → Headless CMS → CDN → Analytics → SEO Pipeline",
    architectureAr: "Next.js SSG ← CMS ← CDN ← تحليلات ← خط SEO",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "CMS"],
    features: [
      "Premium Design",
      "SEO Optimized",
      "Multilingual",
      "Performance First",
      "CMS Integration",
    ],
    featuresAr: [
      "تصميم متميز",
      "محسّن لمحركات البحث",
      "متعدد اللغات",
      "الأداء أولاً",
      "تكامل CMS",
    ],
    businessImpact:
      "Increased organic traffic by 150% and improved lead conversion through premium brand positioning.",
    businessImpactAr:
      "زادت الزيارات العضوية بنسبة 150% وحسّن تحويل العملاء المحتملين من خلال تموضع العلامة المتميز.",
    lessonsLearned: [
      "Corporate sites need fast load times above all",
      "Content structure drives SEO more than keywords",
    ],
    lessonsLearnedAr: [
      "المواقع المؤسسية تحتاج سرعة تحميل فائقة قبل كل شيء",
      "هيكل المحتوى يقود SEO أكثر من الكلمات المفتاحية",
    ],
    role: "Frontend Lead",
    roleAr: "قائد الواجهة الأمامية",
    timeline: "2023",
    timelineAr: "2023",
    gradient: "from-amber-600/20 via-orange-600/10 to-amber-900/20",
    accentColor: "#F59E0B",
    year: "2023",
    featured: false,
  },
  {
    slug: "copo-internal-system",
    title: "COPO Internal System",
    titleAr: "نظام COPO الداخلي",
    category: "Internal Operations",
    categoryAr: "عمليات داخلية",
    tagline: "Streamlined internal operations and workflow management",
    taglineAr: "تبسيط العمليات الداخلية وإدارة سير العمل",
    description:
      "An internal management system for tracking operations, managing workflows, and providing real-time dashboards for decision makers.",
    descriptionAr:
      "نظام إدارة داخلي لتتبع العمليات وإدارة سير العمل وتوفير لوحات تحكم فورية لصناع القرار.",
    challenge:
      "Replacing manual spreadsheet workflows with a centralized system that non-technical staff could adopt quickly.",
    challengeAr:
      "استبدال سير عمل الجداول اليدوية بنظام مركزي يمكن للموظفين غير التقنيين تبنيه بسرعة.",
    solution:
      "Built an intuitive dashboard with role-based views, automated reporting, and workflow automation that reduced manual work by 80%.",
    solutionAr:
      "بنيت لوحة تحكم بديهية مع عروض حسب الأدوار وتقارير تلقائية وأتمتة سير العمل مما قلل العمل اليدوي بنسبة 80%.",
    architecture:
      "React Dashboard → REST API → PostgreSQL → Report Generator → Email Notifications",
    architectureAr:
      "لوحة React ← REST API ← PostgreSQL ← مولد تقارير ← إشعارات بريد",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Workflow Management",
      "Real-time Dashboard",
      "Automated Reports",
      "Role-Based Access",
    ],
    featuresAr: [
      "إدارة سير العمل",
      "لوحة تحكم فورية",
      "تقارير تلقائية",
      "وصول حسب الأدوار",
    ],
    businessImpact:
      "Eliminated 15+ hours of weekly manual reporting and improved operational visibility across departments.",
    businessImpactAr:
      "ألغى أكثر من 15 ساعة أسبوعياً من التقارير اليدوية وحسّن الرؤية التشغيلية عبر الأقسام.",
    lessonsLearned: [
      "Internal tools succeed when UX matches consumer apps",
      "Adoption metrics matter more than feature count",
    ],
    lessonsLearnedAr: [
      "الأدوات الداخلية تنجح عندما تطابق تجربة المستخدم تطبيقات المستهلك",
      "مقاييس التبني أهم من عدد الميزات",
    ],
    role: "Full Stack Developer",
    roleAr: "مطور Full Stack",
    timeline: "2022 — 2023",
    timelineAr: "2022 — 2023",
    gradient: "from-slate-600/20 via-zinc-600/10 to-slate-900/20",
    accentColor: "#64748B",
    year: "2022",
    featured: false,
  },
  {
    slug: "luxury-beauty-salon",
    title: "Luxury Beauty Salon",
    titleAr: "صالون تجميل فاخر",
    category: "Luxury Brand",
    categoryAr: "علامة فاخرة",
    tagline: "Elegant digital experience for a premium beauty destination",
    taglineAr: "تجربة رقمية أنيقة لوجهة تجميل متميزة",
    description:
      "A visually stunning website for a luxury beauty salon featuring online booking, service showcase, and brand storytelling.",
    descriptionAr:
      "موقع بصري مذهل لصالون تجميل فاخر مع حجز عبر الإنترنت وعرض الخدمات وسرد قصة العلامة.",
    challenge:
      "Translating the in-salon luxury experience into a digital interface that drives bookings and brand loyalty.",
    challengeAr:
      "ترجمة تجربة الفخامة في الصالون إلى واجهة رقمية تدفع الحجوزات وولاء العلامة.",
    solution:
      "Crafted a cinematic scrolling experience with high-quality imagery, smooth animations, and seamless booking integration.",
    solutionAr:
      "صممت تجربة تمرير سينمائية مع صور عالية الجودة وحركات سلسة وتكامل حجز سلس.",
    architecture: "Next.js → Booking API → CMS → Image CDN → Analytics",
    architectureAr: "Next.js ← API حجز ← CMS ← CDN صور ← تحليلات",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    features: [
      "Online Booking",
      "Service Gallery",
      "Brand Storytelling",
      "Mobile Optimized",
    ],
    featuresAr: [
      "حجز عبر الإنترنت",
      "معرض الخدمات",
      "سرد قصة العلامة",
      "محسّن للجوال",
    ],
    businessImpact:
      "Increased online bookings by 200% and established the salon as a premium digital brand in Riyadh.",
    businessImpactAr:
      "زادت الحجوزات عبر الإنترنت بنسبة 200% ورسّخ الصالون كعلامة رقمية متميزة في الرياض.",
    lessonsLearned: [
      "Luxury brands demand pixel-perfect attention to typography",
      "Booking friction kills conversion in beauty industry",
    ],
    lessonsLearnedAr: [
      "العلامات الفاخرة تتطلب اهتماماً دقيقاً بالطباعة",
      "عوائق الحجز تقتل التحويل في صناعة التجميل",
    ],
    role: "Frontend Developer & Designer",
    roleAr: "مطور ومصمم واجهة",
    timeline: "2023",
    timelineAr: "2023",
    gradient: "from-pink-600/20 via-rose-600/10 to-pink-900/20",
    accentColor: "#EC4899",
    year: "2023",
    featured: false,
  },
  {
    slug: "ajmal-sudfah",
    title: "Ajmal Sudfah",
    titleAr: "أجمل صدفة",
    category: "Luxury Coffee",
    categoryAr: "قهوة فاخرة",
    tagline: "Artisan coffee brand with a premium digital presence",
    taglineAr: "علامة قهوة حرفية بحضور رقمي متميز",
    description:
      "A luxury coffee brand website showcasing artisan products, origin stories, and an immersive brand experience.",
    descriptionAr:
      "موقع علامة قهوة فاخرة يعرض منتجات حرفية وقصص المنشأ وتجربة علامة غامرة.",
    challenge:
      "Creating a sensory digital experience that conveys the richness of artisan coffee culture.",
    challengeAr:
      "إنشاء تجربة رقمية حسية تنقل ثراء ثقافة القهوة الحرفية.",
    solution:
      "Designed with warm earthy tones, parallax storytelling, and product-focused layouts that evoke the coffee experience.",
    solutionAr:
      "صُمم بألوان ترابية دافئة وسرد parallax وتخطيطات تركز على المنتج تثير تجربة القهوة.",
    architecture: "Next.js → E-commerce API → CMS → Image Optimization → SEO",
    architectureAr: "Next.js ← API تجارة إلكترونية ← CMS ← تحسين صور ← SEO",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    features: [
      "Product Showcase",
      "Origin Stories",
      "E-commerce Ready",
      "Immersive Design",
    ],
    featuresAr: [
      "عرض المنتجات",
      "قصص المنشأ",
      "جاهز للتجارة الإلكترونية",
      "تصميم غامر",
    ],
    businessImpact:
      "Elevated brand perception and drove 120% increase in online product inquiries.",
    businessImpactAr:
      "رفع تصور العلامة ودفع زيادة 120% في استفسارات المنتجات عبر الإنترنت.",
    lessonsLearned: [
      "Food & beverage brands need rich visual storytelling",
      "Warm color palettes build emotional connection",
    ],
    lessonsLearnedAr: [
      "علامات الطعام والمشروبات تحتاج سرداً بصرياً غنياً",
      "لوحات الألوان الدافئة تبني اتصالاً عاطفياً",
    ],
    role: "Frontend Developer & Designer",
    roleAr: "مطور ومصمم واجهة",
    timeline: "2023",
    timelineAr: "2023",
    gradient: "from-amber-700/20 via-yellow-600/10 to-amber-900/20",
    accentColor: "#D97706",
    year: "2023",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
