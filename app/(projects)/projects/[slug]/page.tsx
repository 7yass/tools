import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/nav'
import { getProject, projects } from '@/lib/projects'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return { title: project ? `${project.title} — tools.brazy.xyz` : 'not found' }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const statusLabel = { live: 'live', wip: 'work in progress', archived: 'archived' }[project.status]
  const statusCls = { live: 'badge-live', wip: 'badge-wip', archived: 'badge-archived' }[project.status]

  return (
    <>
      <Nav />
      <main className="proj-page">
        <div className="proj-header">
          <Link href="/projects" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            projects
          </Link>
          <div className="proj-meta">
            <span className={`badge ${statusCls}`}>{statusLabel}</span>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="proj-ext-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                visit site
              </a>
            )}
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="proj-ext-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
                github
              </a>
            )}
          </div>
          <h1 className="proj-title">{project.title}</h1>
          <p className="proj-desc">{project.desc}</p>
        </div>

        <div className="proj-stack-section">
          <h2 className="section-label">stack</h2>
          <div className="proj-stack">
            {project.stack.map(t => (
              <span key={t} className="stack-chip">{t}</span>
            ))}
          </div>
        </div>

        <div className="proj-tags-section">
          <h2 className="section-label">tags</h2>
          <div className="proj-tags">
            {project.tags.map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>
        </div>
      </main>

      <style>{`
        .proj-page {
          min-height: 100dvh;
          padding: var(--space-24) var(--space-8) var(--space-16);
          max-width: var(--content-narrow);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-10);
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          text-decoration: none;
          font-weight: 500;
        }
        .back-link:hover { color: var(--color-text); }

        .proj-header { display: flex; flex-direction: column; gap: var(--space-4); }

        .proj-meta {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          flex-wrap: wrap;
          margin-top: var(--space-2);
        }

        .badge {
          font-size: var(--text-xs);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: 600;
        }
        .badge-live { background: rgba(74, 222, 128, 0.1); color: #4ade80; }
        .badge-wip  { background: var(--color-primary-dim); color: var(--color-primary); }
        .badge-archived { background: var(--color-surface-dynamic); color: var(--color-text-faint); }

        .proj-ext-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          text-decoration: none;
          font-weight: 500;
          padding: var(--space-1) var(--space-3);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
        }
        .proj-ext-link:hover { color: var(--color-text); border-color: var(--color-text-faint); }

        .proj-title {
          font-size: var(--text-xl);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text);
        }

        .proj-desc {
          font-size: var(--text-base);
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        .proj-stack-section,
        .proj-tags-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding: var(--space-6);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
        }

        .section-label {
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          font-family: var(--font-body);
        }

        .proj-stack,
        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .stack-chip {
          font-size: var(--text-sm);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          background: var(--color-primary-dim);
          color: var(--color-primary);
          font-weight: 600;
          border: 1px solid oklch(from var(--color-primary) l c h / 0.2);
        }

        .tag-chip {
          font-size: var(--text-xs);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          background: var(--color-surface-offset);
          color: var(--color-text-faint);
          font-weight: 500;
          border: 1px solid var(--color-divider);
        }

        @media (max-width: 640px) {
          .proj-page { padding: var(--space-20) var(--space-5) var(--space-12); }
        }
      `}</style>
    </>
  )
}
