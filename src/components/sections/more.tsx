import { Section } from "@/components/section";
import { activities, awards, interests } from "@/lib/cv";

export function More() {
  return (
    <Section id="more" title="More">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Activities
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-foreground/90">
            {activities.map((a) => (
              <li key={a.name}>
                <p className="font-medium text-foreground">
                  {a.name}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {a.period}
                  </span>
                </p>
                <ul className="mt-1.5 space-y-1 text-xs leading-relaxed text-foreground/70">
                  {a.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Honors
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-foreground/90">
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Interests
          </h3>
          <p className="mt-4 text-sm text-foreground/90">
            {interests.join(" · ")}
          </p>
        </div>
      </div>
    </Section>
  );
}
