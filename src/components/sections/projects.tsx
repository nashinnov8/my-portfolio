import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/cv";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-12">
        {projects.map((p) => (
          <article
            key={p.name}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="font-mono text-xs text-muted-foreground sm:pt-1">
              {p.period}
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-base font-medium text-foreground">
                  {p.name}
                </h3>
                {p.link ? (
                  <Link
                    href={p.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p.link.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                ) : null}
              </div>
              {(p.role || p.team) && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {[p.role, p.team].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {p.description}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
