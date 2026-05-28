import Link from "next/link";
import { profile } from "@/lib/cv";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-terminal-black">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <Link href="#hero" className="text-2xl font-bold text-primary">
          Nguyen<span className="text-secondary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base text-on-surface-variant transition-colors duration-200 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href={`mailto:${profile.email}`}
          className="rounded bg-primary px-4 py-2 text-sm font-semibold text-terminal-black transition-all hover:brightness-110 active:scale-95"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
