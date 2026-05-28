import Link from "next/link";
import { profile } from "@/lib/cv";

export function SiteFooter() {
  return (
    <footer className="mt-16 w-full border-t border-border-subtle bg-terminal-black">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
          {profile.name} // DEV_PORTFOLIO
        </div>
        <div className="text-center font-mono text-sm text-text-muted md:text-left">
          © {new Date().getFullYear()} {profile.name}. Built for performance.
        </div>
        <div className="flex gap-6">
          <Link
            href={profile.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-on-surface-variant opacity-80 transition-colors hover:text-secondary hover:opacity-100"
          >
            LinkedIn
          </Link>
          <Link
            href={profile.github.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-on-surface-variant opacity-80 transition-colors hover:text-secondary hover:opacity-100"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
