export type Project = {
  slug: string
  title: string
  desc: string
  url?: string
  repo?: string
  tags: string[]
  status: 'live' | 'wip' | 'archived'
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: 'brazy-xyz',
    title: 'brazy.xyz',
    desc: 'main brazy hub — the ecosystem landing, links, and brand.',
    url: 'https://brazy.xyz',
    tags: ['site', 'hub'],
    status: 'live',
    stack: ['next.js', 'vercel'],
  },
  {
    slug: 'tools',
    title: 'tools.brazy.xyz',
    desc: 'this site — roadmaps, mastermaps, and every project in the ecosystem.',
    url: 'https://tools.brazy.xyz',
    repo: 'https://github.com/7yass/tools',
    tags: ['site', 'tools'],
    status: 'wip',
    stack: ['next.js', 'vercel', 'supabase'],
  },
  {
    slug: 'discord-bot',
    title: 'brazy bot',
    desc: 'discord bot for the brazy server — commands, moderation, and automations.',
    tags: ['bot', 'discord'],
    status: 'wip',
    stack: ['discord.js', 'node'],
  },
  {
    slug: 'github-tracker',
    title: 'github tracker',
    desc: 'track commits and activity across the brazy ecosystem repos — all in one view.',
    tags: ['tool', 'github'],
    status: 'wip',
    stack: ['next.js', 'github api'],
  },
]

export function getProject(slug: string) {
  return projects.find(p => p.slug === slug) ?? null
}
