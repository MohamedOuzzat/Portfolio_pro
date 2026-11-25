import type { Project } from "@/data/projects";

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const from = `${project.color}28`;
  return (
    <div
      className={`surface-terminal relative overflow-hidden ${className ?? ""}`}
      style={{
        background: `radial-gradient(120% 120% at 20% 0%, ${from}, transparent 62%), linear-gradient(160deg, #0d1020, #06060b)`,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="surface-terminal-bar relative z-10 flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#FF5F56]" />
        <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="size-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-[10px] text-white/50">
          {project.codeSnippet.tab}
        </span>
      </div>
      <pre className="pointer-events-none relative overflow-hidden px-5 pb-5 pt-4 font-mono text-[11px] leading-relaxed text-slate-300">
        <code>
          {project.codeSnippet.lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span className="mr-4 inline-block w-4 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <span style={{ color: i === 0 ? "#64748b" : undefined }}>{line}</span>
            </div>
          ))}
        </code>
      </pre>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#06060b] to-transparent"
      />
    </div>
  );
}
