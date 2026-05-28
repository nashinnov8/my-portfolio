import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { More } from "@/components/sections/more";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Separator className="opacity-60" />
        <About />
        <Separator className="opacity-60" />
        <Experience />
        <Separator className="opacity-60" />
        <Projects />
        <Separator className="opacity-60" />
        <Skills />
        <Separator className="opacity-60" />
        <More />
        <Separator className="opacity-60" />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
