"use client";

import { motion, type Variants } from "framer-motion";
import { variants, viewport, stagger } from "@/config/motion";
import type { ReactNode } from "react";

type Kind = keyof Pick<typeof variants, "rise" | "fade" | "scale" | "blur">;

/** Tek öğeyi görünür olunca içeri getirir. */
export function Reveal({
  children,
  kind = "rise",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  kind?: Kind;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={variants[kind] as Variants}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}

/** Çocuklarını kademeli getiren kapsayıcı. En fazla 8 kademe. */
export function Stagger({
  children,
  className,
  step = stagger.step,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: step, delayChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger içindeki tek öğe. */
export function StaggerItem({
  children,
  kind = "rise",
  className,
}: {
  children: ReactNode;
  kind?: Kind;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variants[kind] as Variants}>
      {children}
    </motion.div>
  );
}
