import type { Project } from "@/data/projects";

export function ProjectVisual({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const from = `${project.color}22`;
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{
        background: `radial-gradient(120% 120% at 20% 0%, ${from}, transparent 60%), linear-gradient(160deg, #0f172a, #030712)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 border-b border-white/8 bg-ink-950/60 px-4 py-2.5 backdrop-blur">
        <span className="size-2.5 rounded-full bg-[#FF5F56]" />
        <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="size-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-[10px] text-mist-500">
          {project.codeSnippet.tab}
        </span>
      </div>
      <pre className="pointer-events-none relative overflow-hidden p-5 font-mono text-[11px] leading-relaxed text-mist-400">
        <code>
          {project.codeSnippet.lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span className="mr-4 inline-block w-4 select-none text-right text-mist-600">
                {i + 1}
              </span>
              <span style={{ color: i === 0 ? "#64748b" : undefined }}>{line}</span>
            </div>
          ))}
        </code>
      </pre>
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-950 to-transparent"
      />
    </div>
  );
}
