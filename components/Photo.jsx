"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import SocialRail from "./SocialRail";

export default function Photo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.5, 0.32, 1] }}
      className="mx-auto w-full max-w-[360px]"
    >
      {/* Square stage: the circle + arc rail share this box so the arc
          is centred on the ring, not on the caption below it. */}
      <div className="relative aspect-square">
        {/* ambient glow behind the portrait */}
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-iris/40 via-mint/20 to-coral/30 blur-3xl opacity-60" />
        <div className="dot-grid absolute -inset-6 -z-10 rounded-full opacity-30" />

        {/* gradient ring */}
        <div className="h-full w-full rounded-full bg-gradient-to-br from-iris via-mint to-coral p-[3px]">
          <div className="h-full w-full overflow-hidden rounded-full bg-surface">
            {profile.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 to-ink text-center">
                <span className="mono-label opacity-70">add your photo &rarr;</span>
              </div>
            )}
          </div>
        </div>

        {/* curved social rail hugging the portrait (desktop only) */}
        <SocialRail orientation="arc" className="hidden lg:block" />
      </div>

      {/* Name + tagline sit under the circle */}
      <div className="mt-7 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {profile.name}
        </p>
        {profile.photoCaption && (
          <p className="mt-1.5 text-sm text-muted">{profile.photoCaption}</p>
        )}
      </div>
    </motion.div>
  );
}
