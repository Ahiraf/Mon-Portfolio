"use client";

import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

// Card cover: shows the project logo centered on a themed background.
// Falls back to the name placeholder if there's no image or it fails to load.
export default function ProjectCover({ p }) {
  const [failed, setFailed] = useState(false);
  const showImage = p.image && !failed;

  return (
    <div className="relative aspect-[16/10] overflow-hidden">
      {showImage ? (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 via-surface to-ink p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.title} logo`}
            onError={() => setFailed(true)}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface-2 via-surface to-ink">
          <span className="px-6 text-center font-display text-2xl font-semibold text-muted/70">
            {p.title}
          </span>
        </div>
      )}

      {/* category badge */}
      <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-text backdrop-blur ring-1 ring-line">
        {p.category}
      </span>

      {/* hover overlay with View Details */}
      <div className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <span className="inline-flex items-center gap-2 rounded-full bg-iris px-5 py-2.5 text-sm font-medium text-white">
          View Details <FiArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
