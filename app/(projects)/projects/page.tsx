import Link from 'next/link'
import Nav from '@/components/nav'
import { projects } from '@/lib/projects'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'projects — tools.brazy.xyz' }

const statusStyles: Record<string, { cls: string; label: string }> = {
  live:     { cls: 'badge-live',     label: 'live' },
  wip:      { cls: 'badge-wip',      label: 'wip' },
  archived: { cls: 'badge-archived', label: 'archived' },
}

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="page-label">section 02</div>
          <h1 className="page-title">projects</h1>
          <p className="page-sub">
            every build in the brazy ecosystem. tools, bots, sites, experiments — all linked.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(p => {
            const s = statusStyles[p.status]
            return (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="project-card">
                <div className="pc-top">
                  <span className={`badge ${s.cls}`}>{s.label}</span>
                  <div className="pc-links">
                    {p.url && (
                      <span className="pc-link-hint">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        live
                      </span>
                    )}
                    {p.repo && (
                      <span className="pc-link-hint">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                        </svg>
                        repo
                      </span>
                    )}
                  </div>
                </div>
                <h2 className="pc-title">{p.title}</h2>
                <p className="pc-desc">{p.desc}</p>
                <div className="pc-stack">
                  {p.stack.map(t => (
                    <span key={t} className="pc-tag">{t}</span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </main>

      <style>{`
        .page {
          min-height: 100dvh;
          padding: var(--space-24) var(--space-8) var(--space-16);
          max-width: var(--content-wide);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-16);
        }

        .page-header { display: flex; flex-direction: column; gap: var(--space-3); }
        .page-label {
          font-size: var(--text-xs);
          color: var(--color-primary);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .page-title {
          font-size: var(--text-xl);
          font-weight: 800;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }
        .page-sub {
          font-size: var(--text-base);
          color: var(--color-text-muted);
          max-width: 52ch;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
          gap: var(--space-4);
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          padding: var(--space-6);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          text-decoration: none;
          color: inherit;
          transition: border-color var(--transition), background var(--transition);
        }

        .project-card:hover {
          border-color: var(--color-primary);
          background: var(--color-surface-2);
        }

        .pc-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
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

        .pc-links {
          display: flex;
          gap: var(--space-3);
        }

        .pc-link-hint {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          font-weight: 500;
        }

        .pc-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text);
        }

        .pc-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.5;
          flex: 1;
        }

        .pc-stack {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-top: var(--space-1);
        }

        .pc-tag {
          font-size: var(--text-xs);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          background: var(--color-surface-offset);
          color: var(--color-text-faint);
          font-weight: 500;
          border: 1px solid var(--color-divider);
        }

        @media (max-width: 640px) {
          .page { padding: var(--space-20) var(--space-5) var(--space-12); }
        }
      `}</style>
    </>
  )
}
