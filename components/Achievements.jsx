import { FiFileText, FiExternalLink } from "react-icons/fi";
import { achievements } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="shell py-24 sm:py-32">
      <SectionHeading index="/ 06" eyebrow="Achievements" title="Wins & recognition">
        Competitions, contributions, and moments I'm proud of.
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <div className="group flex h-full flex-col rounded-2xl border bg-surface/40 p-6 transition-colors hover:bg-surface/70 hairline">
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-iris/20 to-mint/10 font-display text-sm font-semibold text-mint ring-1 ring-mint/25">
                    {a.metric}
                  </span>
                </div>
                <div>
                  <div className="mono-label mb-1.5">{a.year}</div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.detail}</p>
                </div>
              </div>

              {(a.certificate || a.credentialUrl || a.credentialId) && (
                <div className="mt-5 flex flex-wrap items-center gap-3 border-t pt-4 hairline">
                  {a.certificate && (
                    <a
                      href={a.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-iris px-4 py-2 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                      <FiFileText className="h-3.5 w-3.5" />
                      View Certificate
                    </a>
                  )}
                  {a.credentialUrl && (
                    <a
                      href={a.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-iris"
                    >
                      Verify <FiExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {a.credentialId && !a.credentialUrl && (
                    <span className="font-mono text-xs text-muted">ID: {a.credentialId}</span>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
