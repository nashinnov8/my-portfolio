import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/cv";

export function Hero() {
  return (
    <section id="top" className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <p className="font-mono text-sm text-muted-foreground">Hi, I&apos;m</p>
      <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
        {profile.name}.
      </h1>
      <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
        {profile.title} — building scalable backends with Java, Spring Boot,
        and .NET.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          Ho Chi Minh City, Vietnam
        </span>
        <Link
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Mail className="h-3.5 w-3.5" />
          {profile.email}
        </Link>
        <Link
          href={profile.github.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Github className="h-3.5 w-3.5" />
          {profile.github.label}
        </Link>
        <Link
          href={profile.linkedin.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <Linkedin className="h-3.5 w-3.5" />
          LinkedIn
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View projects
          <ArrowDown className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
}
