"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ContainerScroll({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0.05, 0.3], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0.05, 0.3], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0.05, 0.3], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex flex-col items-center justify-start py-10 md:py-20",
        className
      )}
      style={{ perspective: "1200px" }}
    >
      {/* Title area */}
      <div className="w-full max-w-5xl px-6">
        {titleComponent}
      </div>

      {/* Scroll-animated card */}
      <motion.div
        style={{
          rotateX: rotate,
          scale: scaleDimensions,
          y: translateY,
          opacity,
        }}
        className="relative mx-auto mt-8 w-full max-w-5xl px-4 md:mt-12 md:px-6"
      >
        {/* Outer glow */}
        <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-cta/15 to-primary/20 opacity-60 blur-3xl" />

        {/* Card frame */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-[var(--bg-dark)] shadow-2xl shadow-black/40 ring-1 ring-white/[0.05]">
          {/* Top accent line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {children}
        </div>
      </motion.div>
    </div>
  );
}
