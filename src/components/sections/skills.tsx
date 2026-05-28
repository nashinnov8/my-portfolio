import { skills } from "@/lib/cv";

type Group = {
  label: string;
  match?: string;
  matchMany?: string[];
};

const featured: Group[] = [
  { label: "Programming Languages", match: "Languages" },
  { label: "Backend Development", match: "Backend" },
  { label: "Infrastructure & DB", matchMany: ["Database", "DevOps & Cloud"] },
];

function itemsFor(spec: Group) {
  if (spec.matchMany) {
    return spec.matchMany.flatMap(
      (label) => skills.find((s) => s.label === label)?.items ?? []
    );
  }
  return skills.find((s) => s.label === spec.match)?.items ?? [];
}

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-mono text-2xl text-primary opacity-50">01.</span>
        <h2 className="text-2xl font-semibold">Technical Toolkit</h2>
        <div className="h-px flex-grow bg-border-subtle" />
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featured.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border-subtle bg-surface-charcoal p-4"
          >
            <h3 className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-secondary">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {itemsFor(group).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
