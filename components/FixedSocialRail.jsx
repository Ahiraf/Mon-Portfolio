"use client";

import { useState, useEffect } from "react";
import SocialRail from "./SocialRail";

// A slim vertical rail pinned to the right edge of the viewport.
// Hidden over the hero (which has its own curved arc) and slides in
// once you scroll past it, staying visible through the rest of the page.
export default function FixedSocialRail() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 transition-all duration-500 lg:block ${
        show ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"
      }`}
    >
      <div className="rounded-l-2xl border-y border-l bg-surface/60 p-2 backdrop-blur hairline">
        <SocialRail orientation="vertical" />
      </div>
    </div>
  );
}
