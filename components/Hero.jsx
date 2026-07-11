"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import Photo from "./Photo";
import SocialRail from "./SocialRail";

const ease = [0.21, 0.5, 0.32, 1];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="shell grid items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-28">
        {/* Left: the pitch */}
        <div>
          {profile.available && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-surface/60 px-3 py-1.5 hairline"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              <span className="font-mono text-xs text-muted">Available for work</span>
            </motion.div>
          )}

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {profile.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.06 * i, ease }}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          {profile.quote && (
            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48, ease }}
              className="relative mt-8 max-w-xl border-l-2 border-iris/50 pl-5"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 -top-6 font-display text-6xl leading-none text-iris/25 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-lg italic leading-relaxed text-text sm:text-xl">
                {profile.quote}
              </blockquote>
            </motion.figure>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border px-5 py-2.5 text-sm font-medium hairline transition-colors hover:bg-surface"
              >
                Résumé
              </a>
            ) : null}
            {/* Social links inline on small screens; vertical rail beside the photo on desktop */}
            <div className="ml-1 lg:hidden">
              <SocialRail orientation="horizontal" />
            </div>
          </motion.div>
        </div>

        {/* Right: portrait with curved social rail hugging its edge */}
        <div className="lg:pr-12 xl:pr-16">
          <Photo />
        </div>
      </div>

      {/* thin gradient divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
    </section>
  );
}
