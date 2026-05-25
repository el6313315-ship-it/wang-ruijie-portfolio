import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeroSectionProps {
  onNavClick: (sectId: string) => void;
}

const navItems = [
  { label: "SKILLS", id: "services" },
  { label: "WORKS", id: "work" },
  { label: "ABOUT", id: "about" },
  { label: "CONTACT", id: "contact" },
];

const serviceWords = ["Strategy", "AI Product", "Prototype", "Research", "Launch"];

function PixelMark() {
  return (
    <span className="pixel-mark" aria-hidden="true">
      <span />
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function MarqueeRow() {
  const content = serviceWords.map((word) => (
    <span className="hero-marquee-item" key={word}>
      {word}
      <PixelMark />
    </span>
  ));

  return (
    <div className="hero-marquee" aria-hidden="true">
      <div className="hero-marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const titleTransition = {
    duration: 1.25,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#fffcf0] text-[#050511] z-10">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.95, delay: 1.55, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-0 right-0 top-[33vh] z-10 h-px origin-center bg-[#050511]"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.95, delay: 1.9, ease: [0.76, 0, 0.24, 1] }}
        className="absolute left-0 right-0 top-[68vh] z-10 h-px origin-center bg-[#050511]"
      />

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.35, delay: 2.45 }}
        className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#fffcf0]"
      >
        <motion.div
          initial={{ height: 2, width: 2 }}
          animate={{
            height: [2, 22, 22],
            width: [2, 2, 280],
          }}
          transition={{
            duration: 1.45,
            times: [0, 0.42, 1],
            ease: [0.76, 0, 0.24, 1],
          }}
          className="relative overflow-hidden border border-[#050511] bg-[#fffcf0]"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.05, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-full origin-left bg-[#050511]"
          />
        </motion.div>
      </motion.div>

      <header className="absolute left-0 top-0 z-40 grid w-full grid-cols-3 items-start px-5 py-7 text-[11px] font-medium md:px-7">
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="pixel-link flex w-fit items-center gap-2 text-[#050511]"
          aria-label="Open menu"
          data-label="Menu"
        >
          <Menu size={15} strokeWidth={1.7} />
          <span className="hidden sm:inline">Menu</span>
        </button>

        <button
          onClick={() => onNavClick("hero")}
          className="pixel-link justify-self-center text-[#050511]"
          data-label="Wang Ruijie"
        >
          <span>Wang Ruijie</span>
        </button>

        <button
          onClick={() => onNavClick("contact")}
          className="pixel-link justify-self-end text-[#050511]"
          data-label="Contact"
        >
          <span>Contact</span>
        </button>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050511] p-7 text-[#f7f3e8]"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-fit text-[#f7f3e8]"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavClick(item.id);
                  }}
                  className="pixel-link overflow-hidden text-left font-display text-5xl font-black uppercase leading-none md:text-7xl"
                  data-label={item.label}
                >
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.28em] text-[#f7f3e8]/50">Portfolio / 2026</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 flex h-full flex-col">
        <div className="flex h-[33vh] min-h-[225px] items-end justify-center overflow-hidden px-4 pb-4 pt-16">
          <motion.h1
            initial={{ y: "115%" }}
            animate={{ y: 0 }}
            transition={{ ...titleTransition, delay: 1.65 }}
            className="hero-name flex items-center justify-center gap-[0.08em] whitespace-nowrap text-center text-[14vw] leading-none tracking-normal text-[#050511] sm:text-[12vw] lg:text-[9.8vw]"
          >
            <span>Wang</span>
            <span className="flex translate-y-[0.03em] items-center">
              <PixelMark />
            </span>
            <span>Ruijie</span>
          </motion.h1>
        </div>

        <div className="grid flex-1 grid-cols-[72px_1fr_72px] items-center px-2 sm:grid-cols-[120px_1fr_120px] md:px-8">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[62px] leading-none tracking-normal sm:text-[92px] md:text-[118px]"
          >
            AI
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            <motion.p
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[560px] text-center text-[11px] leading-relaxed text-[#050511]/75 sm:text-xs"
            >
              AI Product Manager · UX Prototyping · Research to Launch
            </motion.p>
            <span className="inline-flex border border-[#222] px-[14px] py-[4px] text-[11px] uppercase tracking-[0.12em] shadow-[4px_4px_0_rgba(5,5,17,0.12)]">
              求职意向：AI 产品实习　｜　可实习：四个月及以上
            </span>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "min(50vw, 760px)" }}
              transition={{ duration: 1.15, delay: 1.85, ease: [0.76, 0, 0.24, 1] }}
              className="h-[18px] overflow-hidden border border-[#050511] bg-[#fffcf0]"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0.42 }}
                transition={{ duration: 1.15, delay: 2.12, ease: [0.76, 0, 0.24, 1] }}
                className="h-full origin-left bg-[#050511]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 2.35 }}
              className="grid w-[min(50vw,760px)] grid-cols-3 text-[11px] text-[#050511]/70"
            >
              <button onClick={() => onNavClick("work")} className="pixel-link justify-self-start" data-label="Research">
                <span>Research</span>
              </button>
              <span className="justify-self-center">Prototype</span>
              <button onClick={() => onNavClick("work")} className="pixel-link justify-self-end" data-label="Launch">
                <span>Launch</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.05, ease: [0.16, 1, 0.3, 1] }}
            className="justify-self-end font-sans text-[62px] leading-none tracking-normal sm:text-[92px] md:text-[118px]"
          >
            PM
          </motion.div>
        </div>

        <motion.div
          initial={{ y: "105%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.05, delay: 2.18, ease: [0.16, 1, 0.3, 1] }}
          className="h-[32vh] min-h-[205px] overflow-hidden pt-7"
        >
          <MarqueeRow />
        </motion.div>
      </div>
    </section>
  );
}
