export type Step = {
  id: string
  title: string
  desc: string
  status: 'done' | 'active' | 'upcoming'
  tags?: string[]
}

export type Roadmap = {
  slug: string
  title: string
  desc: string
  category: string
  status: 'active' | 'draft' | 'complete'
  steps: Step[]
}

export const roadmaps: Roadmap[] = [
  {
    slug: 'web-dev',
    title: 'Web Dev Mastermap',
    desc: 'Full stack web development from zero — html to deployment on vercel with next.js and supabase.',
    category: 'engineering',
    status: 'active',
    steps: [
      { id: '1', title: 'HTML & CSS foundations', desc: 'Semantic html, box model, flexbox, grid, responsive design.', status: 'done', tags: ['html', 'css'] },
      { id: '2', title: 'JavaScript core', desc: 'Variables, functions, DOM, async/await, fetch API.', status: 'done', tags: ['js'] },
      { id: '3', title: 'React basics', desc: 'Components, props, state, hooks — build real UIs.', status: 'active', tags: ['react'] },
      { id: '4', title: 'Next.js app router', desc: 'Routing, layouts, server components, data fetching.', status: 'upcoming', tags: ['next.js'] },
      { id: '5', title: 'Supabase backend', desc: 'Postgres db, auth, realtime, storage — full backend without the ops.', status: 'upcoming', tags: ['supabase', 'db'] },
      { id: '6', title: 'Deploy on Vercel', desc: 'CI/CD, env vars, custom domains, edge functions.', status: 'upcoming', tags: ['vercel', 'deploy'] },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools Builder',
    desc: 'Build real AI-powered tools — from prompt engineering to full products with LLM APIs.',
    category: 'ai',
    status: 'draft',
    steps: [
      { id: '1', title: 'Prompt engineering fundamentals', desc: 'System prompts, few-shot, chain of thought, structured output.', status: 'done', tags: ['ai', 'prompts'] },
      { id: '2', title: 'OpenAI / Anthropic APIs', desc: 'API calls, streaming, function calling, tool use.', status: 'active', tags: ['api'] },
      { id: '3', title: 'Build an AI chatbot', desc: 'Stateful conversations, memory, context window management.', status: 'upcoming', tags: ['product'] },
      { id: '4', title: 'RAG & vector search', desc: 'Embeddings, Supabase pgvector, semantic search for docs.', status: 'upcoming', tags: ['rag', 'vectors'] },
      { id: '5', title: 'Ship it to users', desc: 'Auth, rate limiting, billing, usage analytics.', status: 'upcoming', tags: ['saas'] },
    ],
  },
  {
    slug: 'design',
    title: 'Design System Path',
    desc: 'From zero design skills to shipping polished interfaces — Figma to code.',
    category: 'design',
    status: 'draft',
    steps: [
      { id: '1', title: 'Visual design fundamentals', desc: 'Typography, color theory, spacing, contrast, hierarchy.', status: 'done', tags: ['design'] },
      { id: '2', title: 'Figma proficiency', desc: 'Components, auto-layout, variables, prototyping.', status: 'active', tags: ['figma'] },
      { id: '3', title: 'Design tokens to CSS', desc: 'Map Figma variables to CSS custom properties.', status: 'upcoming', tags: ['css', 'tokens'] },
      { id: '4', title: 'Build a design system', desc: 'Components, variants, documentation, Storybook.', status: 'upcoming', tags: ['system'] },
    ],
  },
]

export function getRoadmap(slug: string) {
  return roadmaps.find(r => r.slug === slug) ?? null
}
