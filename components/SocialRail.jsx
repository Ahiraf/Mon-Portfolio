"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { socials } from "@/lib/content";

const iconFor = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  devpost: SiDevpost,
  email: HiOutlineMail,
};

// Arc geometry (percentages of the square photo box).
// Icons ride an arc on the right side of the circle, so the strip
// curves along the portrait instead of running dead straight.
const ARC_RADIUS = 55; // distance from circle centre → just outside the ring
const ARC_SPREAD = 118; // total degrees the icons fan across (top-right → bottom-right)

function arcPosition(i, n) {
  const start = ARC_SPREAD / 2;
  const step = n > 1 ? ARC_SPREAD / (n - 1) : 0;
  const deg = start - i * step; // +start (top) down to -start (bottom)
  const rad = (deg * Math.PI) / 180;
  return {
    left: `${50 + ARC_RADIUS * Math.cos(rad)}%`,
    top: `${50 - ARC_RADIUS * Math.sin(rad)}%`,
  };
}

function iconLink(s, extraClass = "") {
  const Icon = iconFor[s.kind] ?? HiOutlineMail;
  return (
    <a
      href={s.href}
      target={s.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={s.label}
      title={s.label}
      className={`group grid h-10 w-10 place-items-center rounded-full text-muted ring-1 ring-transparent transition-all hover:bg-iris/15 hover:text-iris hover:ring-iris/40 ${extraClass}`}
    >
      <Icon className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />
    </a>
  );
}

// Curved rail that hugs the photo circle. Render inside the photo's
// relative, square container so the arc lines up with the ring.
function ArcRail({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      {socials.map((s, i) => (
        // Outer div owns positioning (left/top + centering translate).
        // The inner motion.div owns the scale/opacity animation, so Framer
        // never overwrites the centering transform.
        <div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={arcPosition(i, socials.length)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.07, ease: [0.21, 0.5, 0.32, 1] }}
            className="pointer-events-auto"
          >
            {iconLink(s, "bg-ink/70 backdrop-blur ring-line/70")}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// `orientation`: "arc" (curved, beside photo) | "vertical" (fixed edge rail)
// | "horizontal" (mobile row).
export default function SocialRail({ orientation = "arc", className = "" }) {
  if (orientation === "arc") return <ArcRail className={className} />;

  if (orientation === "vertical") {
    return (
      <ul className={`flex flex-col gap-1.5 ${className}`}>
        {socials.map((s) => (
          <li key={s.label}>{iconLink(s)}</li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.21, 0.5, 0.32, 1] }}
      className={`flex items-center gap-3 ${className}`}
    >
      {socials.map((s) => (
        <li key={s.label}>{iconLink(s)}</li>
      ))}
    </motion.ul>
  );
}
