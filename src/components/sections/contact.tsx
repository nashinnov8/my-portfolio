import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { profile } from "@/lib/cv";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-base leading-relaxed text-foreground/90">
        I&apos;m open to backend engineering roles and interesting projects.
        The fastest way to reach me is email.
      </p>
      <div className="mt-6 space-y-2 text-sm">
        <Link
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-muted-foreground"
        >
          {profile.email}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
          <Link
            href={profile.github.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub ↗
          </Link>
          <Link
            href={profile.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn ↗
          </Link>
          <Link
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            CV (PDF) ↗
          </Link>
        </div>
      </div>
    </Section>
  );
}
