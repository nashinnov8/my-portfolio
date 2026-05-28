import Link from "next/link";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/cv";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.77 1.05.77 2.11 0 1.53-.01 2.76-.01 3.13 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12 24 5.65 18.85.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

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
          <GithubIcon className="h-3.5 w-3.5" />
          {profile.github.label}
        </Link>
        <Link
          href={profile.linkedin.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <LinkedinIcon className="h-3.5 w-3.5" />
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
