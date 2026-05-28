import { cn } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ id, title, className, children }: Props) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", className)}>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
