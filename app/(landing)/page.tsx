import Link from "next/link"

const cards = [
  { href: "/roadmaps", title: "Roadmaps", desc: "ideas, builds, and the full project map" },
  { href: "/dashboard", title: "Dashboard", desc: "all active projects in one clean place" },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-slate-400">brazy tools</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">simple, clean, locked in</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            one page to get in, one page for the roadmap, one dashboard for the work.
          </p>
        </div>

        <div className="grid w-full gap-5 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-10 h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 opacity-80" />
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{card.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
