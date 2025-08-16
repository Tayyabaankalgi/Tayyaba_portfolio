"use client";
import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <div className="text-sm uppercase tracking-wider text-brand-700/80">{eyebrow}</div>
      )}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mt-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && <p className="text-gray-600 mt-3">{subtitle}</p>}
    </div>
  );
}
