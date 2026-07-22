const projects = [
  { title: "Brazy bio platform", desc: "public flagship profile platform", status: "active" },
  { title: "Discord bot", desc: "server bot core and dashboard", status: "active" },
  { title: "Selfbot concept", desc: "brainstorm lane, keep it separated", status: "idea" },
  { title: "cp.brazy.xyz", desc: "private control panel for bot stuff", status: "active" },
  { title: "tools.brazy.xyz", desc: "utility hub for smaller tools", status: "planned" },
  { title: "CoralMC proxy", desc: "separate proxy project lane", status: "planned" },
  { title: "Username finder", desc: "deep planning module", status: "planned" },
  { title: "PC optimizer", desc: "future desktop utility", status: "future" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">roadmap</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">all projects in one lane</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            this page is the master map. every project gets a card, a route, and a clear place.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">{project.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
