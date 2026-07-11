import { FiFileText, FiExternalLink } from "react-icons/fi";
import { experience } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="shell py-24 sm:py-32">
      <SectionHeading index="/ 02" eyebrow="Experience" title="Where I've worked">
        Roles where I shipped real software with real users.
      </SectionHeading>

      <div className="relative">
        {/* vertical timeline rail */}
        <span className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-line sm:block" />

        <div className="flex flex-col gap-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.role}-${i}`} delay={i * 0.08}>
              <div className="relative sm:pl-12">
                {/* node */}
                <span className="absolute left-0 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full bg-ink ring-1 ring-line sm:flex">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-iris to-mint" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-xl font-semibold">
                    {job.role} <span className="text-iris">· {job.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {job.period} {job.location ? `· ${job.location}` : ""}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  {job.tags?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((t) => (
                        <span key={t} className="rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  {job.offerLetter ? (
                    <a
                      href={job.offerLetter}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border bg-iris/10 px-3 py-1.5 text-xs font-medium text-iris ring-1 ring-iris/25 transition-colors hover:bg-iris/20 hairline"
                    >
                      <FiFileText className="h-3.5 w-3.5" />
                      {job.offerLetterLabel || "View Offer Letter"}
                      <FiExternalLink className="h-3 w-3 opacity-70" />
                    </a>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
