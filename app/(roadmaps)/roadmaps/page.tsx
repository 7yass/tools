import Link from 'next/link'
import Nav from '@/components/nav'
import { roadmaps } from '@/lib/roadmaps'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'roadmaps — tools.brazy.xyz' }

const statusStyles: Record<string, string> = {
  active: 'badge-active',
  draft: 'badge-draft',
  complete: 'badge-complete',
}

export default function RoadmapsPage() {
  return (
    <>
      <Nav />
      <main className="page">
        <div className="page-header">
          <div className="page-label">section 01</div>
          <h1 className="page-title">roadmaps</h1>
          <p className="page-sub">
            mastermaps and step-by-step paths. every skill, every stack — laid out clean.
          </p>
        </div>

        <div className="cards-grid">
          {roadmaps.map(r => (
            <Link key={r.slug} href={`/roadmaps/${r.slug}`} className="roadmap-card">
              <div className="card-top">
                <span className="card-category">{r.category}</span>
                <span className={`badge ${statusStyles[r.status]}`}>{r.status}</span>
              </div>
              <h2 className="card-title">{r.title}</h2>
              <p className="card-desc">{r.desc}</p>
              <div className="card-footer">
                <div className="steps-count">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 11 12 14 22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                  {r.steps.filter(s => s.status === 'done').length} / {r.steps.length} steps
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(r.steps.filter(s => s.status === 'done').length / r.steps.length) * 100}%` }}
                />
              </div>
            </Link>
          ))}
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

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
          gap: var(--space-4);
        }

        .roadmap-card {
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
          position: relative;
          overflow: hidden;
        }

        .roadmap-card:hover {
          border-color: var(--color-primary);
          background: var(--color-surface-2);
        }

        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-category {
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }

        .badge {
          font-size: var(--text-xs);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .badge-active { background: var(--color-primary-dim); color: var(--color-primary); }
        .badge-draft { background: var(--color-surface-dynamic); color: var(--color-text-muted); }
        .badge-complete { background: rgba(74, 222, 128, 0.1); color: #4ade80; }

        .card-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.2;
        }

        .card-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.5;
          flex: 1;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--color-text-faint);
          font-size: var(--text-xs);
        }

        .steps-count {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .progress-bar {
          height: 2px;
          background: var(--color-surface-dynamic);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--color-primary);
          border-radius: var(--radius-full);
          transition: width 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .page { padding: var(--space-20) var(--space-5) var(--space-12); }
        }
      `}</style>
    </>
  )
}
