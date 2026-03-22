import {
  BarChart3,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  ImageIcon,
  Layers3,
  Lightbulb,
  Link as LinkIcon,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import { projectData } from './data/projectData';

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function PlaceholderGalleryCard({ title, caption, placeholder }: { title: string; caption: string; placeholder: string }) {
  return (
    <div className="surface gallery-card">
      <div className="gallery-placeholder">
        <div className="gallery-placeholder-inner">
          <ImageIcon size={28} />
          <p>{placeholder}</p>
        </div>
      </div>
      <div className="gallery-body">
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-container">
        <section className="hero surface hero-surface">
          <div className="hero-copy">
            <h1>{projectData.title}</h1>
            <p className="owner-line">{projectData.ownerLine}</p>
            <p className="hero-subtitle">{projectData.subtitle}</p>
            <p className="hero-summary">{projectData.executiveSummary}</p>

            <div className="badge-row">
              {projectData.badges.map((badge) => (
                <span key={badge} className="chip">
                  {badge}
                </span>
              ))}
            </div>

            <div className="link-row">
              {projectData.links.map((link) => (
                <a
                  key={`${link.label}-${link.url}`}
                  href={link.url}
                  className={link.primary ? 'primary-link' : 'secondary-link'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkIcon size={16} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="surface instructions-surface">
          <div className="instruction-heading">
            <div className="icon-box cyan-box">
              <FileText size={22} />
            </div>
            <div>
              <p className="instruction-title">How to use WaNBRC Train</p>
              <p className="instruction-subtitle">A role-based training compliance dashboard — built for IACUC, USDA, and AALAC inspection readiness.</p>
            </div>
          </div>

          <div className="instruction-list">
            {projectData.instructions.map((instruction) => (
              <div key={instruction} className="instruction-card">
                <CheckCircle2 size={20} />
                <p>{instruction}</p>
              </div>
            ))}
          </div>

          <div className="metrics-grid">
            {projectData.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric-label">{metric.label}</p>
                <p className="metric-value">{metric.value}</p>
                <p className="metric-note">{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box emerald-box">
                <Target size={18} />
              </div>
              <div>
                <p className="eyebrow">Problem</p>
                <h3>The Problem</h3>
              </div>
            </div>
            <p className="body-copy">{projectData.problemStatement}</p>
            <div className="meta-grid">
              <div className="mini-panel">
                <p className="mini-label">Audience</p>
                <p>{projectData.audience}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Impact Goal</p>
                <p>{projectData.impactGoal}</p>
              </div>
              <div className="mini-panel">
                <p className="mini-label">Status</p>
                <p>{projectData.status}</p>
              </div>
            </div>
          </div>

          <div className="dark-card padded-card">
            <div className="card-heading">
              <div className="icon-box dark-icon-box">
                <Lightbulb size={18} />
              </div>
              <div>
                <p className="dark-eyebrow">Solution</p>
                <h3>The Solution</h3>
              </div>
            </div>
            <p className="dark-copy">{projectData.solutionSummary}</p>
            <div className="method-row">
              {projectData.methods.map((method) => (
                <span key={method} className="dark-chip">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Builder"
            title="About the Builder"
            description="WaNBRC Train was individually designed and built by Miranda S Grato as a live compliance tool for her workplace at the University of Washington."
          />
          <div className="card-grid">
            {projectData.members.map((member) => (
              <div key={`${member.name}-${member.role}`} className="surface padded-card team-card">
                <div className="team-avatar">{member.name.replace(/[[\]]/g, '').split(' ').filter(Boolean).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'TM'}</div>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="body-copy compact">{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Gallery"
            title="Screenshots and Demo"
            description="Live views from the deployed WaNBRC Train application across all three user roles."
          />
          <div className="card-grid two-up">
            {projectData.gallery.map((item) =>
              item.assetPath ? (
                <div key={item.title} className="surface gallery-card">
                  <div className="gallery-image-wrap">
                    <img src={item.assetPath} alt={item.title} className="gallery-image" />
                  </div>
                  <div className="gallery-body">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                  </div>
                </div>
              ) : (
                <PlaceholderGalleryCard
                  key={item.title}
                  title={item.title}
                  caption={item.caption}
                  placeholder={item.placeholder ?? 'Add a visual asset here'}
                />
              ),
            )}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Wrench size={18} />
              </div>
              <div>
                <p className="eyebrow">Stack</p>
                <h3>Technical Stack</h3>
              </div>
            </div>
            <div className="stack-list">
              {projectData.stack.map((group) => (
                <div key={group.category} className="stack-card">
                  <div className="stack-title-row">
                    <Layers3 size={16} />
                    <h4>{group.category}</h4>
                  </div>
                  <div className="badge-row compact-row">
                    {group.tools.map((tool) => (
                      <span key={tool} className="chip">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <p className="body-copy compact">{group.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box violet-box">
                <Brain size={18} />
              </div>
              <div>
                <p className="eyebrow">Methods</p>
                <h3>Key Methods</h3>
              </div>
            </div>
            <div className="method-grid">
              {projectData.methods.map((method) => (
                <div key={method} className="method-card">
                  <div className="method-icon">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <p className="method-title">{method}</p>
                    <p className="method-note">Explain how this method improved speed, quality, or reliability.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            eyebrow="Product"
            title="Key Features"
            description="Five core capabilities built around the compliance needs of WaNBRC employees, supervisors, and coordinators."
          />
          <div className="card-grid two-up">
            {projectData.features.map((feature) => (
              <div key={feature.title} className="surface padded-card">
                <div className="icon-box cyan-box">
                  <Rocket size={18} />
                </div>
                <h3>{feature.title}</h3>
                <p className="body-copy compact">{feature.description}</p>
                <div className="check-list">
                  {feature.highlights.map((highlight) => (
                    <div key={highlight} className="check-item">
                      <CheckCircle2 size={16} />
                      <p>{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box lab-box">
                <Network size={18} />
              </div>
              <div>
                <p className="eyebrow">Architecture</p>
                <h3>System Architecture</h3>
              </div>
            </div>
            <div className="architecture-list">
              {projectData.architecture.map((step, index) => (
                <div key={step.title} className="architecture-card">
                  <div className="step-badge">{index + 1}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <Code2 size={18} />
              </div>
              <div>
                <p className="eyebrow">Code Highlights</p>
                <h3>Code Highlights</h3>
              </div>
            </div>
            <div className="code-list">
              {projectData.codeHighlights.map((snippet) => (
                <div key={snippet.title} className="code-card">
                  <div className="code-card-top">
                    <div>
                      <h4>{snippet.title}</h4>
                      <p>{snippet.note}</p>
                    </div>
                    <span className="language-pill">{snippet.language}</span>
                  </div>
                  <pre>
                    <code>{snippet.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="two-col-grid">
          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box cyan-box">
                <BarChart3 size={18} />
              </div>
              <div>
                <p className="eyebrow">Roadmap</p>
                <h3>Roadmap</h3>
              </div>
            </div>
            <div className="roadmap-list">
              {projectData.roadmap.map((phase) => (
                <div key={phase.phase} className="roadmap-card">
                  <p className="roadmap-phase">{phase.phase}</p>
                  <div className="roadmap-items">
                    {phase.items.map((item) => (
                      <div key={item} className="bullet-item">
                        <span />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface padded-card">
            <div className="card-heading">
              <div className="icon-box danger-box">
                <ShieldCheck size={18} />
              </div>
              <div>
                <p className="eyebrow">Risks</p>
                <h3>Risks and Constraints</h3>
              </div>
            </div>
            <div className="risk-list">
              {projectData.risks.map((risk) => (
                <div key={risk.title} className="risk-card">
                  <h4>{risk.title}</h4>
                  <p>{risk.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="closing-card">
          <div>
            <p className="dark-eyebrow">Why WaNBRC Train Matters</p>
            <h2>Compliance should be visible in real time — not reconstructed under pressure</h2>
            <p>
              WaNBRC Train was built around a real operational gap: the most dangerous moment for a compliance-dependent organization is an unannounced inspection when records are scattered across spreadsheets and email threads. Every feature — the role dashboards, automated assignment trigger, approval workflow, and Agent Train — exists to make the WaNBRC perpetually inspection-ready.
            </p>
          </div>

          <div className="card-grid two-up">
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Users size={18} />
              </div>
              <h3>Who benefits?</h3>
              <p>WaNBRC employees, supervisors, and the training coordinator — plus the organization as a whole during IACUC, USDA, and AALAC reviews.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Target size={18} />
              </div>
              <h3>What changes?</h3>
              <p>Manual data entry is replaced by real-time self-service. The coordinator shifts from record-keeper to compliance analyst — using Agent Train to generate reports instead of building them by hand.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Layers3 size={18} />
              </div>
              <h3>Why this build?</h3>
              <p>RLS on every table and RoleGuard on every route were chosen specifically for a compliance use case where data leakage across roles is not just a UX problem — it is a regulatory risk.</p>
            </div>
            <div className="closing-mini-card">
              <div className="icon-box dark-icon-box">
                <Rocket size={18} />
              </div>
              <h3>What is next?</h3>
              <p>Formal WaNBRC adoption pending UW IT review, UW HR system integration for real-time role sync, and expanding Agent Train to generate IACUC and USDA inspection report templates.</p>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>Template by <strong>Leonard Boussioux</strong> &middot; Built with <strong>Claude Code</strong></p>
        </footer>
      </div>
    </div>
  );
}
