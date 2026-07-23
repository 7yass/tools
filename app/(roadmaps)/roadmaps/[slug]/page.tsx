import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/nav'
import { getRoadmap, roadmaps } from '@/lib/roadmaps'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return roadmaps.map(r => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const roadmap = getRoadmap(slug)
  return { title: roadmap ? `${roadmap.title} — tools.brazy.xyz` : 'not found' }
}

export default async function RoadmapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const roadmap = getRoadmap(slug)
  if (!roadmap) notFound()

  const doneCount = roadmap.steps.filter(s => s.status === 'done').length
  const progress = Math.round((doneCount / roadmap.steps.length) * 100)

  return (
    <>
      <Nav />
      <main className="rm-page">
        <div className="rm-header">
          <Link href="/roadmaps" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            roadmaps
          </Link>
          <div className="rm-meta">
            <span className="rm-category">{roadmap.category}</span>
            <span className="rm-progress">{progress}% complete</span>
          </div>
          <h1 className="rm-title">{roadmap.title}</h1>
          <p className="rm-desc">{roadmap.desc}</p>
        </div>

        <div className="steps-track">
          {roadmap.steps.map((step, i) => (
            <div key={step.id} className={`step step--${step.status}`}>
              <div className="step-connector">
                <div className="step-dot">
                  {step.status === 'done' ? (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  ) : step.status === 'active' ? (
                    <div className="step-dot-pulse" />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                {i < roadmap.steps.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-body">
                <div className="step-header">
                  <h3 className="step-title">{step.title}</h3>
                  {step.status === 'active' && <span className="step-badge-active">in progress</span>}
                </div>
                <p className="step-desc">{step.desc}</p>
                {step.tags && (
                  <div className="step-tags">
                    {step.tags.map(t => (
                      <span key={t} className="step-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .rm-page {
          min-height: 100dvh;
          padding: var(--space-24) var(--space-8) var(--space-16);
          max-width: var(--content-narrow);
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-12);
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

        .rm-header { display: flex; flex-direction: column; gap: var(--space-4); }

        .rm-meta {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          margin-top: var(--space-2);
        }

        .rm-category {
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 500;
        }

        .rm-progress {
          font-size: var(--text-xs);
          color: var(--color-primary);
          font-weight: 600;
        }

        .rm-title {
          font-size: var(--text-xl);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-text);
        }

        .rm-desc {
          font-size: var(--text-base);
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        .steps-track {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .step {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: var(--space-5);
        }

        .step-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-dot {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-full);
          border: 2px solid var(--color-border);
          background: var(--color-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-xs);
          color: var(--color-text-faint);
          font-weight: 600;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .step--done .step-dot {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: var(--color-text-inverse);
        }

        .step--active .step-dot {
          border-color: var(--color-primary);
          background: var(--color-primary-dim);
          color: var(--color-primary);
        }

        .step-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          background: var(--color-primary);
          animation: pulse 1.8s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }

        .step-line {
          flex: 1;
          width: 2px;
          background: var(--color-divider);
          margin: var(--space-1) 0;
          min-height: var(--space-8);
        }

        .step--done + .step .step-line,
        .step--done .step-line {
          background: var(--color-primary);
          opacity: 0.3;
        }

        .step-body {
          padding-bottom: var(--space-10);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-top: var(--space-1);
        }

        .step:last-child .step-body { padding-bottom: 0; }

        .step-header {
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .step-title {
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--color-text);
          font-family: var(--font-body);
        }

        .step--upcoming .step-title { color: var(--color-text-muted); }

        .step-badge-active {
          font-size: var(--text-xs);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          background: var(--color-primary-dim);
          color: var(--color-primary);
          font-weight: 600;
        }

        .step-desc {
          font-size: var(--text-sm);
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        .step--upcoming .step-desc { color: var(--color-text-faint); }

        .step-tags {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-top: var(--space-1);
        }

        .step-tag {
          font-size: var(--text-xs);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          background: var(--color-surface-offset);
          color: var(--color-text-faint);
          font-weight: 500;
          border: 1px solid var(--color-divider);
        }

        @media (max-width: 640px) {
          .rm-page { padding: var(--space-20) var(--space-5) var(--space-12); }
        }
      `}</style>
    </>
  )
}
