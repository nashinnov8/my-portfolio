import { Section } from "@/components/section";
import { experiences, education } from "@/lib/cv";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experiences.map((e) => (
          <li
            key={e.company}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <div className="font-mono text-xs text-muted-foreground sm:pt-1">
              {e.period}
            </div>
            <div>
              <h3 className="text-base font-medium text-foreground">
                {e.role}{" "}
                <span className="text-muted-foreground">· {e.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        <li className="grid grid-cols-1 gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8">
          <div className="font-mono text-xs text-muted-foreground sm:pt-1">
            {education.period}
          </div>
          <div>
            <h3 className="text-base font-medium text-foreground">
              {education.degree}{" "}
              <span className="text-muted-foreground">· {education.school}</span>
            </h3>
          </div>
        </li>
      </ol>
    </Section>
  );
}
