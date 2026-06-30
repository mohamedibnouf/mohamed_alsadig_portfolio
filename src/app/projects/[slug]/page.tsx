import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { projects, getProjectBySlug } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="relative min-h-screen pt-20 sm:pt-24">
      {/* Hero */}
      <div
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} py-16 sm:py-24 md:py-32`}
      >
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="page-container relative z-10">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <Badge variant="accent" className="mb-6">
            {project.category}
          </Badge>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-text-muted sm:mt-6 sm:text-lg md:text-xl">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm sm:mt-8 sm:gap-6">
            <div>
              <span className="text-text-muted">Role</span>
              <p className="font-medium text-white">{project.role}</p>
            </div>
            <div>
              <span className="text-text-muted">Timeline</span>
              <p className="font-medium text-white">{project.timeline}</p>
            </div>
            <div>
              <span className="text-text-muted">Year</span>
              <p className="font-medium text-white">{project.year}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container py-10 sm:py-12 md:py-16">
        {/* Overview */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Overview</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted sm:mt-6 sm:text-lg">
            {project.description}
          </p>
        </section>

        {/* Challenge & Solution */}
        <div className="mb-12 grid gap-4 sm:mb-16 sm:gap-6 md:mb-20 md:grid-cols-2 md:gap-8">
          <GlassCard>
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">Challenge</h3>
            <p className="mt-4 leading-relaxed text-text-muted">{project.challenge}</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-lg font-semibold text-white sm:text-xl">Solution</h3>
            <p className="mt-4 leading-relaxed text-text-muted">{project.solution}</p>
          </GlassCard>
        </div>

        {/* Architecture */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Architecture</h2>
          <GlassCard className="mt-4 sm:mt-8">
            <div className="scrollbar-hide flex flex-col gap-3 py-2 font-mono text-xs sm:flex-row sm:items-center sm:gap-3 sm:overflow-x-auto sm:py-4 sm:text-sm">
              {project.architecture.split(" → ").map((part, i, arr) => (
                <span key={i} className="flex items-center gap-2 sm:gap-3 sm:whitespace-nowrap">
                  <span className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-accent sm:px-4">
                    {part.trim()}
                  </span>
                  {i < arr.length - 1 && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-text-muted" />
                  )}
                </span>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* Tech Stack & Features */}
        <div className="mb-12 grid gap-8 sm:mb-16 md:mb-20 md:grid-cols-2">
          <section>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Tech Stack</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Features</h2>
            <ul className="mt-6 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-text-muted"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: project.accentColor }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Gallery Placeholder */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Gallery</h2>
          <div className="mt-4 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center border border-white/5`}
              >
                <span className="text-sm text-text-muted">Screenshot {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Video Placeholder */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Demo</h2>
          <div
            className={`mt-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br sm:mt-8 sm:rounded-2xl ${project.gradient} border border-white/5`}
          >
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <span className="text-2xl">▶</span>
              </div>
              <p className="mt-4 text-sm text-text-muted">Video demo coming soon</p>
            </div>
          </div>
        </section>

        {/* Business Impact & Lessons */}
        <div className="mb-12 grid gap-4 sm:mb-16 sm:gap-6 md:mb-20 md:grid-cols-2 md:gap-8">
          <GlassCard glow>
            <h3 className="font-display text-xl font-semibold text-white">
              Business Impact
            </h3>
            <p className="mt-4 leading-relaxed text-text-muted">
              {project.businessImpact}
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-display text-xl font-semibold text-white">
              Lessons Learned
            </h3>
            <ul className="mt-4 space-y-3">
              {project.lessonsLearned.map((lesson) => (
                <li key={lesson} className="flex items-start gap-3 text-text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {lesson}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Result */}
        <section className="text-center">
          <GlassCard className="w-full p-6 sm:inline-block sm:p-12">
            <p className="font-display text-xl font-bold text-gradient-accent sm:text-2xl">
              Result
            </p>
            <p className="mt-4 max-w-lg text-text-muted">{project.businessImpact}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-white"
            >
              Start a similar project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        </section>
      </div>
    </article>
  );
}
