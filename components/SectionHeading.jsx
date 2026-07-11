import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mono-label mb-3 flex items-center gap-3">
            <span className="text-mint">{index}</span>
            <span className="h-px w-8 bg-line" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        </div>
        {children ? <p className="max-w-sm text-sm leading-relaxed text-muted">{children}</p> : null}
      </div>
    </Reveal>
  );
}
