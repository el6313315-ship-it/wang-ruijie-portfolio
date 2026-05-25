import { motion } from "motion/react";
import React from "react";

interface AnimatedTextLineProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedTextLine({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
}: AnimatedTextLineProps) {
  return (
    <div className="overflow-hidden py-1">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={className}
      >
        {text}
      </motion.div>
    </div>
  );
}
