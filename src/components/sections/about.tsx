import { Section } from "@/components/section";
import { profile } from "@/lib/cv";

export function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-2xl text-base leading-relaxed text-foreground/90">
        {profile.about}
      </p>
    </Section>
  );
}
