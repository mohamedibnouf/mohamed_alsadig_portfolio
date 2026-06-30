"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { LocaleProvider } from "@/providers/locale-provider";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { AnimatedBackground } from "@/components/effects/animated-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { EasterEgg } from "@/components/effects/easter-egg";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SocialDock } from "@/components/layout/social-dock";
import { CommandMenu } from "@/components/layout/command-menu";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <SmoothScroll>
          <LoadingScreen />
          <CustomCursor />
          <AnimatedBackground />
          <div className="noise-overlay" />
          <ScrollProgress />
          <EasterEgg />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <SocialDock />
          <CommandMenu />
        </SmoothScroll>
      </LocaleProvider>
    </ThemeProvider>
  );
}
