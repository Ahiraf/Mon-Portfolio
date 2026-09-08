import { profile, socials, emailHref } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="shell py-24 sm:py-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border bg-surface/50 px-6 py-16 text-center hairline sm:px-12 sm:py-20">
          <div className="dot-grid absolute inset-0 -z-10 opacity-30" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iris to-transparent" />

          <p className="mono-label mb-5">/ 07 — Contact</p>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-muted">
            I&apos;m currently open to internships and junior developer roles. The fastest way to reach me is email.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={emailHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-text px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="link-underline text-sm text-muted transition-colors hover:text-text"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
