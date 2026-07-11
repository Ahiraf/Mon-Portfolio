"use client";

import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import { profile } from "@/lib/content";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#skills", label: "Skills" },
  { href: "/#work", label: "Projects" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-b hairline" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between py-4">
        <a href="/#top" className="group flex items-center gap-2.5" aria-label={profile.name}>
          {profile.signatureUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={profile.signatureUrl}
              alt={profile.name}
              className="h-9 w-auto max-w-[190px] object-contain transition-opacity group-hover:opacity-80"
            />
          ) : (
            <>
              {/* Stack mark — three offset layers echoing the hero "stack" visual */}
              <span className="flex h-8 w-7 flex-col items-start justify-center gap-[3px]" aria-hidden>
                <span className="h-[3px] w-3.5 rounded-full bg-gradient-to-r from-iris to-mint transition-transform duration-300 group-hover:translate-x-1.5" />
                <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-iris via-mint to-coral" />
                <span className="h-[3px] w-2.5 translate-x-2 rounded-full bg-gradient-to-r from-mint to-coral transition-transform duration-300 group-hover:translate-x-0" />
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                {profile.name.split(" ")[0]}
              </span>
            </>
          )}
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-sm text-muted transition-colors hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl || "#contact"}
          target={profile.resumeUrl ? "_blank" : undefined}
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-text transition-all hairline hover:border-iris/50 hover:bg-iris/15 hover:text-iris lg:inline-flex"
        >
          Download CV
          <FiDownload className="h-4 w-4" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md ring-1 hairline lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-text transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-text transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-text transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t hairline bg-ink/95 backdrop-blur lg:hidden">
          <ul className="shell flex flex-col gap-1 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base text-muted hover:bg-surface hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-2 pt-2">
              <a
                href={profile.resumeUrl || "#contact"}
                target={profile.resumeUrl ? "_blank" : undefined}
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full border bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-text hairline"
              >
                Download CV
                <FiDownload className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
