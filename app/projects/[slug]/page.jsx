import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiGlobe,
  FiGithub,
  FiCalendar,
  FiTag,
  FiExternalLink,
  FiAlertCircle,
} from "react-icons/fi";
import { TbStack2, TbCircleCheck, TbRocket } from "react-icons/tb";
import { projects, profile } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} — ${profile.name}`,
    description: p.summary,
  };
}

export default function ProjectDetail({ params }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="shell py-16 sm:py-20">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Projects
        </Link>

        <header className="mt-8">
          <span className="mono-label text-iris">{p.category}</span>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{p.description}</p>
        </header>

        {/* screenshots */}
        {p.screenshots?.length ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {p.screenshots.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${p.title} screenshot ${i + 1}`}
                className="w-full rounded-2xl border object-cover hairline"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          {/* left: stack + challenges + improvements */}
          <div className="space-y-14">
            <section>
              <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold">
                <TbStack2 className="h-6 w-6 text-iris" /> Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-iris/10 px-3 py-1.5 font-mono text-sm text-iris/90 ring-1 ring-iris/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {p.challenges?.length ? (
              <section>
                <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold">
                  <FiAlertCircle className="h-6 w-6 text-iris" /> Challenges Faced
                </h2>
                <ul className="space-y-3">
                  {p.challenges.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-xl border bg-surface/40 px-4 py-3 text-muted hairline"
                    >
                      <TbCircleCheck className="mt-0.5 h-5 w-5 flex-none text-iris" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {p.improvements?.length ? (
              <section>
                <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold">
                  <TbRocket className="h-6 w-6 text-iris" /> Future Improvements
                </h2>
                <ul className="space-y-3">
                  {p.improvements.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 rounded-xl border bg-surface/40 px-4 py-3 text-muted hairline"
                    >
                      <TbRocket className="mt-0.5 h-5 w-5 flex-none text-iris" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          {/* right: sticky sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {(p.live || p.code) && (
              <div className="rounded-2xl border bg-surface/40 p-6 hairline">
                <h3 className="mb-4 font-display text-lg font-semibold">Project Links</h3>
                <div className="space-y-3">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl bg-iris px-4 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                    >
                      <span className="flex items-center gap-2">
                        <FiGlobe className="h-4 w-4" /> Live Demo
                      </span>
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium hairline transition-colors hover:bg-surface"
                    >
                      <span className="flex items-center gap-2">
                        <FiGithub className="h-4 w-4" /> GitHub Repo
                      </span>
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="rounded-2xl border bg-surface/40 p-6 hairline">
              <h3 className="mb-4 font-display text-lg font-semibold">Project Details</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <FiCalendar className="mt-0.5 h-4 w-4 flex-none text-iris" />
                  <div>
                    <dt className="text-muted">Duration</dt>
                    <dd className="font-medium text-text">{p.duration || p.year}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FiTag className="mt-0.5 h-4 w-4 flex-none text-iris" />
                  <div>
                    <dt className="text-muted">Category</dt>
                    <dd className="font-medium text-text">{p.category}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
