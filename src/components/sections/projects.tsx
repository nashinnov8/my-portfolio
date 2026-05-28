import Link from "next/link";
import { Terminal } from "lucide-react";
import { projects, type Project } from "@/lib/cv";

const FILENAME_BY_PROJECT: Record<string, string> = {
  "Ecommerce Microservices": "microservices_ecommerce.java",
  "Dental Clinic Booking": "dental_clinic_booking.cs",
};

function fileName(p: Project) {
  return (
    FILENAME_BY_PROJECT[p.name] ??
    `${p.name.toLowerCase().replace(/\s+/g, "_")}.md`
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-2xl text-primary opacity-50">02.</span>
        <h2 className="text-2xl font-semibold">Engineering Projects</h2>
        <div className="h-px flex-grow bg-border-subtle" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((p) => (
          <article
            key={p.name}
            className="glow-hover overflow-hidden rounded-lg border border-border-subtle bg-surface-charcoal"
          >
            <div className="flex items-center justify-between border-b border-border-subtle bg-terminal-black px-6 py-2">
              <div className="flex items-center gap-12">
                <div className="terminal-dots" />
                <span className="font-mono text-sm text-primary">
                  {fileName(p)}
                </span>
              </div>
              <span className="font-mono text-xs text-text-muted">
                {p.period}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-8 p-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h3 className="mb-4 text-2xl font-semibold text-on-surface">
                  {p.name}
                </h3>
                <p className="mb-6 text-base leading-relaxed text-on-surface-variant">
                  {p.description}
                </p>
                <div className="space-y-4">
                  {p.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-3">
                      <span className="mt-1 font-mono font-bold text-secondary">
                        &gt;
                      </span>
                      <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <h4 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-secondary">
                    SYSTEM_STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="border border-border-subtle bg-surface-container px-2 py-0.5 font-mono text-xs text-on-surface-variant"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {p.link ? (
                  <div className="mt-8 flex gap-4">
                    <Link
                      href={p.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 font-mono text-sm text-primary hover:underline"
                    >
                      <Terminal className="h-[18px] w-[18px]" />
                      VIEW_SOURCE
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
