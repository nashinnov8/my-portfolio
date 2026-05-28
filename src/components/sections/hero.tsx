import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/cv";

export function Hero() {
  return (
    <section
      id="hero"
      className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2"
    >
      <div className="order-2 md:order-1">
        <div className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
          SYSTEM_INIT_SUCCESS
        </div>
        <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {profile.name}
          <br />
          <span className="text-primary">{profile.title}</span>
          <span className="cursor-blink" />
        </h1>

        <div className="mb-6 rounded-lg border border-border-subtle bg-surface-charcoal p-4">
          <div className="mb-3 flex items-center justify-between border-b border-border-subtle pb-2">
            <div className="terminal-dots" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">
              about.md
            </span>
          </div>
          <p className="font-mono text-sm leading-relaxed text-on-surface-variant">
            {profile.about}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <div className="flex items-center gap-2 text-text-muted">
            <Phone className="h-[18px] w-[18px]" />
            <span className="font-mono text-sm">{profile.phone}</span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-text-muted transition-colors hover:text-primary"
          >
            <Mail className="h-[18px] w-[18px]" />
            <span className="font-mono text-sm">{profile.email}</span>
          </a>
          <div className="flex items-center gap-2 text-text-muted">
            <MapPin className="h-[18px] w-[18px]" />
            <span className="font-mono text-sm">Ho Chi Minh City</span>
          </div>
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2">
        <div className="relative aspect-square w-full max-w-[400px]">
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
          <Image
            src="/avatar.jpg"
            alt={`${profile.name} portrait`}
            width={800}
            height={1200}
            priority
            className="relative z-10 h-full w-full rounded-xl border border-border-subtle object-cover object-top grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
}
