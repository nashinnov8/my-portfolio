import { experiences } from "@/lib/cv";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-2xl text-primary opacity-50">03.</span>
        <h2 className="text-2xl font-semibold">Professional Journey</h2>
        <div className="h-px flex-grow bg-border-subtle" />
      </div>

      <div className="relative space-y-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-border-subtle before:content-['']">
        {experiences.map((e, idx) => (
          <div key={e.company} className="relative pl-10">
            <div
              className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-terminal-black ${
                idx === 0 ? "bg-primary" : "bg-border-subtle"
              }`}
            />
            <div className="mb-2 flex flex-col justify-between md:flex-row md:items-center">
              <h3 className="text-lg font-bold text-on-surface">
                {e.role} <span className="text-primary">@ {e.company}</span>
              </h3>
              <span className="font-mono text-sm text-text-muted">
                {e.period}
              </span>
            </div>
            <div className="rounded-lg border border-border-subtle bg-surface-charcoal p-4">
              <ul className="space-y-2">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-base text-on-surface-variant"
                  >
                    <span className="font-bold text-secondary">-</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
