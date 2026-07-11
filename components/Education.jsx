import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="shell py-24 sm:py-32">
      <SectionHeading index="/ 03" eyebrow="Education" title="Where I studied">
        The academic path behind the work.
      </SectionHeading>

      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => {
          // Centre a lone last card when there's an odd number of entries.
          const centered = education.length % 2 === 1 && i === education.length - 1;
          return (
          <Reveal
            key={`${e.degree}-${i}`}
            delay={i * 0.06}
            className={centered ? "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-10px)]" : ""}
          >
            <div className="group flex h-full items-start gap-5 rounded-2xl border bg-surface/40 p-6 transition-colors hover:bg-surface/70 hairline">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-iris/20 to-mint/10 text-iris ring-1 ring-iris/25">
                <FaGraduationCap className="h-6 w-6" />
              </span>
              <div>
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  {e.period ? <span className="mono-label">{e.period}</span> : null}
                  {e.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-iris/15 px-2.5 py-0.5 font-mono text-[11px] text-iris ring-1 ring-iris/30">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris opacity-70" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris" />
                      </span>
                      {e.current}
                    </span>
                  ) : null}
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{e.degree}</h3>
                <p className="mt-1 text-sm font-medium text-iris">{e.institution}</p>
                {e.detail ? (
                  <p className="mt-2 text-sm leading-relaxed text-muted">{e.detail}</p>
                ) : null}
              </div>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
