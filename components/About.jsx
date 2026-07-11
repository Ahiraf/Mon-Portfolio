import { TbRocket, TbHeart, TbCircleCheck } from "react-icons/tb";
import { about } from "@/lib/content";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="shell py-24 sm:py-32">
      <SectionHeading index="/ 01" eyebrow="Get to know me" title="About Me" />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* My Journey */}
        <Reveal>
          <div className="border-l-2 border-iris/50 pl-6 sm:pl-8">
            <h3 className="mb-6 flex items-center gap-3 font-display text-2xl font-semibold">
              <TbRocket className="h-6 w-6 text-iris" />
              My Journey
            </h3>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What I Love */}
        <Reveal delay={0.1}>
          <div className="border-l-2 border-iris/50 pl-6 sm:pl-8">
            <h3 className="mb-6 flex items-center gap-3 font-display text-2xl font-semibold">
              <TbHeart className="h-6 w-6 text-iris" />
              What I Love
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              I thrive on work that challenges me to think outside the box — whether it&apos;s
              building AI-powered apps, chasing down performance bottlenecks, or crafting an
              interface that just feels right.
            </p>
            <ul className="space-y-6">
              {about.loves.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <TbCircleCheck className="mt-1 h-5 w-5 flex-none text-iris" />
                  <p className="leading-relaxed text-muted">
                    <span className="font-semibold text-text">{item.label}:</span>{" "}
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
