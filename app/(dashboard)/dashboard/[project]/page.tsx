const labels: Record<string, string> = {
  "brazy-bio-platform": "Brazy bio platform",
  "discord-bot": "Discord bot",
  "selfbot-concept": "Selfbot concept",
  "cp-dashboard": "cp.brazy.xyz",
  "tools-hub": "tools.brazy.xyz",
  "coralmc-proxy": "CoralMC proxy",
  "username-finder": "Username finder",
  "pc-optimizer": "PC optimizer",
}

export default async function Page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params
  const title = labels[project] ?? project

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-500">project</p>
      <h1 className="mt-3 text-3xl font-semibold">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
        this is where the real work for this project goes. for now it stays clean and simple.
      </p>
    </section>
  )
}
