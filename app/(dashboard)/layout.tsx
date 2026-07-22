import Link from "next/link"

const projects = [
  "brazy-bio-platform",
  "discord-bot",
  "selfbot-concept",
  "coralmc-proxy",
  "username-finder",
  "pc-optimizer",
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white md:flex">
      <aside className="border-b border-white/10 bg-white/5 p-5 md:w-72 md:border-b-0 md:border-r">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">projects</p>
        <div className="mt-5 space-y-2">
          {projects.map((project) => (
            <Link
              key={project}
              href={`/dashboard/${project}`}
              className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {project}
            </Link>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-10">{children}</main>
    </div>
  )
}
