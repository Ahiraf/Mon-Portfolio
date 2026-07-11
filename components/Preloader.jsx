"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/lib/content";

const ease = [0.76, 0, 0.24, 1];

// Persists for the lifetime of the loaded page (survives in-app route
// changes, resets on a real reload). So the intro plays once on first
// load and never again when navigating back from a project page.
let hasPlayed = false;

export default function Preloader() {
  const [show, setShow] = useState(() => !hasPlayed);

  useEffect(() => {
    if (!show) return; // not showing (e.g. navigated back) — nothing to do
    hasPlayed = true;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2400);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, [show]);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  const letters = profile.name.split("");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-ink"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          <div className="dot-grid absolute inset-0 opacity-20" />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-label mb-6"
            >
              Welcome to my portfolio
            </motion.p>

            {profile.signatureUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <motion.img
                src={profile.signatureUrl}
                alt={profile.name}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.3, ease }}
                className="h-20 w-auto max-w-[320px] object-contain sm:h-28"
              />
            ) : (
              <h1 className="font-display text-4xl font-semibold sm:text-6xl">
                {letters.map((ch, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.04, ease }}
                    className="inline-block"
                  >
                    {ch === " " ? " " : ch}
                  </motion.span>
                ))}
              </h1>
            )}

            {/* gradient line that draws across under the name */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="mt-6 h-px w-56 origin-left bg-gradient-to-r from-iris via-mint to-coral"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-5 text-sm text-muted"
            >
              {profile.role}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
