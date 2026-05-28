import { Section } from "@/components/section";
import { skills } from "@/lib/cv";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="grid grid-cols-1 gap-y-6 sm:grid-cols-[10rem_1fr] sm:gap-x-8">
        {skills.map((g) => (
          <div key={g.label} className="contents">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {g.label}
            </dt>
            <dd className="text-sm text-foreground/90">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
