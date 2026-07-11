"use client";

import { motion } from "framer-motion";

// Fades + lifts children into view once, respecting reduced-motion
// (framer-motion reads the OS setting automatically for these props).
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.5, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
