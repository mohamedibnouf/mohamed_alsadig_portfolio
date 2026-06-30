import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { AchievementsSection } from "@/components/sections/achievements";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { BlogPreviewSection } from "@/components/sections/blog-preview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AchievementsSection />
      <TestimonialsSection />
      <BlogPreviewSection />
    </>
  );
}
