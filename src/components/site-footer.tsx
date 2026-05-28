import { profile } from "@/lib/cv";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 text-xs text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">Built with Next.js · Tailwind · shadcn/ui</p>
      </div>
    </footer>
  );
}
