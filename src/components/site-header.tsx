import Link from "next/link";
import { profile } from "@/lib/cv";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-mono text-sm tracking-tight text-foreground"
        >
          {profile.name.split(" ").map((n) => n[0]).join("")}
        </Link>
        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
