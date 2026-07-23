import Link from 'next/link'
import Nav from '@/components/nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main className="home">
        <section className="hero">
          <div className="hero-label">tools.brazy.xyz</div>
          <h1 className="hero-title">
            the brazy<br />
            <span className="accent">ecosystem</span>
          </h1>
          <p className="hero-sub">
            two sections. one for the vision — roadmaps, mastermaps, step-by-step plans.
            one for the builds — every project, live and linked.
          </p>
          <div className="hero-actions">
            <Link href="/roadmaps" className="btn btn-primary">
              roadmaps
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        <section className="split-preview">
          <Link href="/roadmaps" className="preview-card">
            <div className="preview-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h18M3 6h18M3 18h12"/>
              </svg>
            </div>
            <div>
              <div className="preview-tag">section 01</div>
              <h2 className="preview-title">roadmaps</h2>
              <p className="preview-desc">
                mastermaps, learning paths, step-by-step plans for every tech stack and goal.
              </p>
            </div>
            <div className="preview-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>

          <Link href="/projects" className="preview-card">
            <div className="preview-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <div>
              <div className="preview-tag">section 02</div>
              <h2 className="preview-title">projects</h2>
              <p className="preview-desc">
                every build in the brazy ecosystem — live tools, bots, sites, and experiments.
              </p>
            </div>
            <div className="preview-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </Link>
        </section>
      </main>

      <style>{`
        .home {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: var(--space-24) var(--space-8) var(--space-16);
          max-width: var(--content-wide);
          margin: 0 auto;
          gap: var(--space-24);
        }

        .hero {
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
          max-width: 700px;
        }

        .hero-label {
          font-size: var(--text-xs);
          font-family: var(--font-body);
          color: var(--color-primary);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .hero-title {
          font-size: var(--text-2xl);
          font-weight: 800;
          line-height: 1.0;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }

        .accent { color: var(--color-primary); }

        .hero-sub {
          font-size: var(--text-base);
          color: var(--color-text-muted);
          max-width: 52ch;
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          gap: var(--space-3);
          flex-wrap: wrap;
          margin-top: var(--space-2);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-sm);
          font-weight: 600;
          border-radius: var(--radius-md);
          text-decoration: none;
          font-family: var(--font-body);
          letter-spacing: 0.01em;
        }

        .btn-primary {
          background: var(--color-primary);
          color: var(--color-text-inverse);
        }
        .btn-primary:hover { background: var(--color-primary-hover); }

        .btn-ghost {
          background: transparent;
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
        }
        .btn-ghost:hover {
          color: var(--color-text);
          border-color: var(--color-text-faint);
        }

        .split-preview {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        .preview-card {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--space-5);
          align-items: center;
          padding: var(--space-6);
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-xl);
          text-decoration: none;
          color: inherit;
          transition: border-color var(--transition), background var(--transition), transform var(--transition);
        }

        .preview-card:hover {
          border-color: var(--color-primary);
          background: var(--color-surface-2);
        }

        .preview-card:hover .preview-arrow {
          transform: translate(3px, -3px);
        }

        .preview-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-lg);
          background: var(--color-primary-dim);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .preview-tag {
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: var(--space-1);
          font-weight: 500;
        }

        .preview-title {
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--color-text);
          margin-bottom: var(--space-1);
        }

        .preview-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.5;
          max-width: 36ch;
        }

        .preview-arrow {
          color: var(--color-text-faint);
          transition: transform var(--transition), color var(--transition);
          flex-shrink: 0;
        }

        .preview-card:hover .preview-arrow { color: var(--color-primary); }

        @media (max-width: 768px) {
          .home {
            padding: var(--space-20) var(--space-5) var(--space-12);
            gap: var(--space-16);
          }

          .hero-title { font-size: clamp(2.5rem, 10vw, 4rem); }

          .split-preview { grid-template-columns: 1fr; }

          .preview-card { grid-template-columns: auto 1fr; }
          .preview-arrow { display: none; }
        }
      `}</style>
    </>
  )
}
