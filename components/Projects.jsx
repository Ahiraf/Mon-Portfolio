import Link from "next/link";
import { FiArrowUpRight, FiGlobe, FiGithub } from "react-icons/fi";
import { projects } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCover from "./ProjectCover";

function ProjectCard({ p }) {
  const shownTags = p.tags.slice(0, 4);
  const extra = p.tags.length - shownTags.length;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface/40 ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:ring-line hairline">
      <Link href={`/projects/${p.slug}`} aria-label={`View ${p.title}`}>
        <ProjectCover p={p} />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <Link href={`/projects/${p.slug}`} className="group/title">
          <h3 className="flex items-center justify-between gap-2 font-display text-xl font-semibold transition-colors group-hover/title:text-iris">
            {p.title}
            <FiArrowUpRight className="h-5 w-5 flex-none text-muted transition-transform group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
          </h3>
        </Link>

        <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {shownTags.map((t) => (
            <span key={t} className="rounded-md bg-iris/10 px-2 py-1 font-mono text-[11px] text-iris/90 ring-1 ring-iris/20">
              {t}
            </span>
          ))}
          {extra > 0 && (
            <span className="rounded-md bg-ink/60 px-2 py-1 font-mono text-[11px] text-muted">+{extra}</span>
          )}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t pt-4 hairline">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-mint"
            >
              <FiGlobe className="h-4 w-4" /> Live Demo
            </a>
          )}
          {p.code && (
            <a
              href={p.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-mint"
            >
              <FiGithub className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="shell py-24 sm:py-32">
      <SectionHeading index="/ 05" eyebrow="Selected work" title="Recent Projects">
        A few projects I'm happy to talk through — the how and the why, not just the what.
      </SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.08}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
