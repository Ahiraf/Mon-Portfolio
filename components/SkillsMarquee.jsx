"use client";

import { skillIcons } from "@/lib/skillIcons";

function Chip({ name }) {
  const entry = skillIcons[name];
  const Icon = entry?.icon;
  return (
    <div className="flex min-w-[150px] shrink-0 flex-col items-center gap-3 rounded-2xl border bg-surface/40 px-8 py-6 transition-colors hover:bg-surface/80 hairline">
      {Icon ? (
        <Icon className="h-9 w-9" style={{ color: entry.color }} aria-hidden />
      ) : (
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-mono text-sm text-mint">
          {name.slice(0, 2)}
        </span>
      )}
      <span className="whitespace-nowrap text-sm font-medium text-text">{name}</span>
    </div>
  );
}

// One auto-scrolling row. The list is rendered twice so the -50% translate
// loops seamlessly. Pauses on hover; frozen (static) under reduced-motion.
function Row({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="group flex overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className={`flex w-max gap-4 pr-4 group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((name, i) => (
          <Chip key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee({ groups }) {
  const flat = groups.flatMap((g) => g.items);
  const unique = [...new Set(flat)];
  const mid = Math.ceil(unique.length / 2);
  const rowA = unique.slice(0, mid);
  const rowB = unique.slice(mid);

  return (
    <div className="flex flex-col gap-4">
      <Row items={rowA} />
      <Row items={rowB} reverse />
    </div>
  );
}
