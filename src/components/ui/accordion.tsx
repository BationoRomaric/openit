import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
interface AccordionItemProps { title: string; children: React.ReactNode; defaultOpen?: boolean; }
export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const id = React.useId();
  return (
    <div className="glass overflow-hidden rounded-xl">
      <h3>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={`${id}-panel`} id={`${id}-trigger`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <span>{title}</span>
          <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300", open && "rotate-180")} />
        </button>
      </h3>
      <div id={`${id}-panel`} role="region" aria-labelledby={`${id}-trigger`} className={cn("grid transition-all duration-300 ease-out", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden"><div className="px-5 pb-5 pt-1 text-sm leading-relaxed text-muted-foreground">{children}</div></div>
      </div>
    </div>
  );
}