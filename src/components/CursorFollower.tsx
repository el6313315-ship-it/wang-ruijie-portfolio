import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

interface CursorFollowerProps {
  activeMedia: {
    type: "video" | "image";
    url: string;
  } | null;
}

export default function CursorFollower({ activeMedia }: CursorFollowerProps) {
  const [isMobile, setIsMobile] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  // Motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // A short spring keeps the cursor crisp while still avoiding jitter.
  const springConfig = { stiffness: 520, damping: 34, mass: 0.2 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      setIsInteractive(
        Boolean(
          (e.target as Element | null)?.closest(
            "a, button, input, textarea, select, [role='button'], .pixel-card"
          )
        )
      );
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 80,
        }}
        animate={{
          height: isInteractive ? 24 : 14,
          width: isInteractive ? 24 : 14,
          opacity: isVisible ? 1 : 0,
          backgroundColor: "rgba(5,5,17,1)",
        }}
        transition={{ duration: 0.16, ease: [0.76, 0, 0.24, 1] }}
        className="hidden md:block"
      />

      {activeMedia && (
        <motion.div
          style={{
            x,
            y,
            translateX: "18px",
            translateY: "18px",
            pointerEvents: "none",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 70,
          }}
          animate={{
            scale: isVisible ? 1 : 0,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.24, ease: [0.76, 0, 0.24, 1] }}
          className="hidden select-none md:block"
        >
          <div className="relative aspect-video w-44 overflow-hidden border border-brand bg-surface shadow-[8px_8px_0_#050511]">
            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.url}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={activeMedia.url}
                alt="Hover Media Thumbnail"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        </motion.div>
      )}
    </>
  );
}
