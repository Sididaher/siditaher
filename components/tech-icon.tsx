import type { Tech } from "@/lib/content";
import { Code2 } from "lucide-react";

type TechIconProps = {
  tech: Tech;
  compact?: boolean;
};

export function TechIcon({ tech, compact = false }: TechIconProps) {
  return (
    <span
      className={`inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-white/[0.1] ${
        compact ? "px-3 py-2" : "px-4 py-3"
      }`}
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-md bg-white p-1.5 text-slate-700">
        {tech.logo ? (
          <img src={tech.logo} alt={`${tech.name} logo`} width={20} height={20} loading="lazy" />
        ) : (
          <Code2 size={20} aria-hidden="true" />
        )}
      </span>
      <span className="min-w-0 break-words">{tech.name}</span>
    </span>
  );
}
