const labels: Record<string, string> = {
  "brazy-bio-platform": "Brazy bio platform",
  "discord-bot": "Very Advanced Discord bot",
  "selfbot-concept": "A discord Selfbot concept",
  "coralmc-proxy": "A CoralMC proxy",
  "username-finder": "A Discord Username finder and sniper",
  "pc-optimizer": "A FreeForAll PC optimizer",
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
