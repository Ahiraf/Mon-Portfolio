import { skillGroups } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SkillsMarquee from "./SkillsMarquee";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="shell">
        <SectionHeading index="/ 04" eyebrow="Toolkit" title="What I work with">
          The stack I reach for most. Always adding to it.
        </SectionHeading>
      </div>

      {/* Full-bleed marquee — the "moving train" of skills */}
      <Reveal className="mb-16">
        <SkillsMarquee groups={skillGroups} />
      </Reveal>

      {/* Grouped reference for recruiters skimming by category */}
      <div className="shell">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border bg-surface/40 p-5 hairline">
                <h3 className="mono-label mb-4">{g.title}</h3>
                <ul className="space-y-2.5">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-iris to-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
