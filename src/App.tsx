import { useState } from "react";
import CursorFollower from "./components/CursorFollower";
import HeroSection from "./components/HeroSection";
import AboutAndSkillsSection from "./components/AboutAndSkillsSection";
import WorkSection from "./components/WorkSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [activeMedia, setActiveMedia] = useState<{
    type: "video" | "image";
    url: string;
  } | null>(null);

  // Smooth scroll handler for nav clicks
  const handleNavClick = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Map services or about nav clicks to the unified Section anchor
    const targetId = sectionId === "services" || sectionId === "about" ? "about-section" : `${sectionId}-section`;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-surface text-brand selection:bg-brand selection:text-surface">
      {/* Dynamic CursorFollower (Desktop Only) */}
      <CursorFollower activeMedia={activeMedia} />

      {/* Sections Mounting */}
      <HeroSection onNavClick={handleNavClick} />
      
      <AboutAndSkillsSection />
      
      <WorkSection />
      
      <ContactSection />

      {/* Industrial Footer Credit line */}
      <footer className="bg-surface py-16 px-6 md:px-12 border-t border-brand relative z-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-brand flex items-center justify-center text-surface font-black font-display text-xs shadow-[4px_4px_0_rgba(5,5,17,0.18)]">
              T
            </div>
            <span className="font-display font-black text-sm text-brand uppercase tracking-widest font-sans">
              TRAFFIC • 王蕊杰个人作品集
            </span>
          </div>
          <div className="text-xs font-mono text-text-dim font-sans">
            © 2026 王蕊杰. 保留所有权利
          </div>
        </div>
      </footer>
    </div>
  );
}
