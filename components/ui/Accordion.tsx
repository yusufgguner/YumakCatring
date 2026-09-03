"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { duration, ease } from "@/config/motion";

export interface FaqItem {
  q: string;
  a: string;
}

export function Accordion({ items }: { items: FaqItem[] }) {
  // Tek seferde bir soru açık — odaklanmayı korur
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-ink-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink-200">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold-600"
            >
              <span className="font-[family-name:var(--font-display)] text-[1.0625rem] leading-snug">
                {item.q}
              </span>
              <Plus
                size={19}
                strokeWidth={1.4}
                className={`shrink-0 text-gold-600 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: duration.standard, ease: ease.out }}
                  className="overflow-hidden"
                >
                  <p className="prose-width pb-7 text-sm leading-relaxed text-ink-500">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
