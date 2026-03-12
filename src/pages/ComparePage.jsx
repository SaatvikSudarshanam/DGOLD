import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { CheckCircleIcon, ArrowRightIcon } from '../components/SvgIcons';
import './ComparePage.css';

const competitors = [
  { key: 'sap', name: 'SAP MDG', color: '#4299e1' },
  { key: 'oracle', name: 'Oracle MDM', color: '#f56565' },
  { key: 'informatica', name: 'Informatica', color: '#ed8936' },
  { key: 'ataccama', name: 'Ataccama', color: '#48bb78' },
  { key: 'stibo', name: 'Stibo Systems', color: '#9f7aea' },
  { key: 'profisee', name: 'Profisee', color: '#38b2ac' },
  { key: 'semarchy', name: 'Semarchy', color: '#ed64a6' },
];

const comparisonData = [
  {
    lens: 'Time to Value',
    dgold: { text: '90 days with AI-assisted onboarding', rating: 5, highlight: true },
    sap: { text: 'Strong control, typically 12-18 month cycles', rating: 2 },
    oracle: { text: 'Often part of larger programs, 6-12+ months', rating: 2 },
    informatica: { text: 'Broad suite, can be heavyweight setup', rating: 3 },
    ataccama: { text: 'Modern UX, relatively faster', rating: 4 },
    stibo: { text: 'Excels in product/PIM programs', rating: 3 },
    profisee: { text: '90-day patterns common for mid-market', rating: 4 },
    semarchy: { text: 'Agile Quick Start deployments', rating: 4 },
  },
  {
    lens: 'Unified Platform',
    dgold: { text: 'Native, one interface — MDM, DQ, Compliance, Marketplace', rating: 5, highlight: true },
    sap: { text: 'Deep governance for SAP estates', rating: 3 },
    oracle: { text: 'MDM + Oracle stack components', rating: 3 },
    informatica: { text: 'Very broad portfolio, multi-SKU', rating: 3 },
    ataccama: { text: 'Wide feature set, modular licensing', rating: 4 },
    stibo: { text: 'Strong Product/PIM depth', rating: 3 },
    profisee: { text: 'Focused MDM, Microsoft-aligned', rating: 3 },
    semarchy: { text: 'Unified xDM hub', rating: 4 },
  },
  {
    lens: 'AI Integration',
    dgold: { text: 'Built-in "quiet AI" across all workflows — matching, mapping, rules', rating: 5, highlight: true },
    sap: { text: 'Workflow & model emphasis', rating: 2 },
    oracle: { text: 'Less explicit AI in marketing/features', rating: 2 },
    informatica: { text: 'AI present across suite (CLAIRE)', rating: 4 },
    ataccama: { text: 'Strong augmented intelligence claims', rating: 4 },
    stibo: { text: 'AI focus in product domain', rating: 3 },
    profisee: { text: 'Focused; less AI-forward', rating: 2 },
    semarchy: { text: 'Business friendly + fast', rating: 3 },
  },
  {
    lens: 'Total Cost of Ownership',
    dgold: { text: 'User-based pricing only. No data/record fees. Lower services cost.', rating: 5, highlight: true },
    sap: { text: 'High TCO in large estates', rating: 2 },
    oracle: { text: 'Complex adoption cost structures', rating: 2 },
    informatica: { text: 'Premium pricing with services', rating: 2 },
    ataccama: { text: 'Competitive vs. leaders', rating: 4 },
    stibo: { text: 'Varies by domain/scale', rating: 3 },
    profisee: { text: 'Cost-effective mid-market', rating: 4 },
    semarchy: { text: 'Competitive mid-market', rating: 4 },
  },
  {
    lens: 'Deployment Flexibility',
    dgold: { text: 'On-prem, hybrid, or SaaS — your infrastructure, your rules', rating: 5, highlight: true },
    sap: { text: 'Cloud + hybrid, SAP BTP focus', rating: 3 },
    oracle: { text: 'OCI-centric + hybrid options', rating: 3 },
    informatica: { text: 'Cloud-first + hybrid', rating: 4 },
    ataccama: { text: 'Cloud / on-prem / hybrid', rating: 4 },
    stibo: { text: 'Cloud-first focus', rating: 3 },
    profisee: { text: 'Azure-friendly (MS stacks)', rating: 3 },
    semarchy: { text: 'Cloud / on-prem / hybrid', rating: 4 },
  },
  {
    lens: 'DIY Capability',
    dgold: { text: 'No-code config, 2-week training, full team autonomy', rating: 5, highlight: true },
    sap: { text: 'Requires certified consultants', rating: 1 },
    oracle: { text: 'Heavy implementation teams', rating: 1 },
    informatica: { text: 'Training + PS involvement typical', rating: 2 },
    ataccama: { text: 'Growing self-service capabilities', rating: 3 },
    stibo: { text: 'Domain expertise required', rating: 2 },
    profisee: { text: 'Self-service friendly', rating: 4 },
    semarchy: { text: 'Business user oriented', rating: 4 },
  },
];

const RatingDots = ({ rating, isHighlight }) => (
  <div className="rating-dots">
    {[1, 2, 3, 4, 5].map(i => (
      <div key={i} className={`rating-dot ${i <= rating ? (isHighlight ? 'filled-gold' : 'filled') : ''}`} />
    ))}
  </div>
);

export default function ComparePage() {
  const [selectedCompetitor, setSelectedCompetitor] = useState('sap');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'table'
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <section className="section comparison" id="comparison">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Head-to-Head</span></div>
              <h2 className="section__title">See How dGold Stacks Up</h2>
              <p className="section__subtitle">Objective, transparent, side-by-side evaluation. Choose the platform that delivers fastest time-to-value with the lowest total cost of ownership.</p>
            </div>
          </ScrollReveal>

          {/* View Toggle */}
          <ScrollReveal>
            <div className="comp-view-toggle">
              <button className={`comp-view-btn ${viewMode === 'cards' ? 'active' : ''}`} onClick={() => setViewMode('cards')}>
                Card View
              </button>
              <button className={`comp-view-btn ${viewMode === 'table' ? 'active' : ''}`} onClick={() => setViewMode('table')}>
                Table View
              </button>
            </div>
          </ScrollReveal>

          {/* Card View - Compare one-at-a-time */}
          {viewMode === 'cards' && (
            <>
              <ScrollReveal>
                <div className="comp-selector">
                  <span className="comp-selector__label">Compare dGold vs:</span>
                  <div className="comp-selector__pills">
                    {competitors.map(c => (
                      <button
                        key={c.key}
                        className={`comp-pill ${selectedCompetitor === c.key ? 'active' : ''}`}
                        onClick={() => setSelectedCompetitor(c.key)}
                        style={selectedCompetitor === c.key ? { borderColor: c.color, background: `${c.color}15` } : {}}
                      >
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <div className="comp-cards">
                {comparisonData.map((row, i) => (
                  <ScrollReveal delay={i * 80} key={i}>
                    <div className="comp-card">
                      <div className="comp-card__lens">{row.lens}</div>
                      <div className="comp-card__columns">
                        <div className="comp-card__col comp-card__col--dgold">
                          <div className="comp-card__col-header">
                            <span className="comp-card__col-name">dGold</span>
                            <RatingDots rating={row.dgold.rating} isHighlight />
                          </div>
                          <p>{row.dgold.text}</p>
                        </div>
                        <div className="comp-card__divider">
                          <span>VS</span>
                        </div>
                        <div className="comp-card__col comp-card__col--competitor">
                          <div className="comp-card__col-header">
                            <span className="comp-card__col-name">{competitors.find(c => c.key === selectedCompetitor)?.name}</span>
                            <RatingDots rating={row[selectedCompetitor].rating} />
                          </div>
                          <p>{row[selectedCompetitor].text}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}

          {/* Table View */}
          {viewMode === 'table' && (
            <ScrollReveal>
              <div className="comp-table-wrapper">
                <table className="comp-table">
                  <thead>
                    <tr>
                      <th className="comp-table__th-lens">Evaluation Lens</th>
                      <th className="comp-table__th-dgold">dGold</th>
                      {competitors.map(c => <th key={c.key}>{c.name}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i}>
                        <td className="comp-table__td-lens">{row.lens}</td>
                        <td className="comp-table__td-dgold">
                          <RatingDots rating={row.dgold.rating} isHighlight />
                          <span className="comp-table__cell-text">{row.dgold.text}</span>
                        </td>
                        {competitors.map(c => (
                          <td key={c.key}>
                            <RatingDots rating={row[c.key].rating} />
                            <span className="comp-table__cell-text">{row[c.key].text}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="comp-scroll-hint">← Scroll horizontally to see all competitors →</p>
              </div>
            </ScrollReveal>
          )}

          {/* Summary */}
          <ScrollReveal>
            <div className="comp-summary">
              <div className="comp-summary__card">
                <div className="comp-summary__icon">🏆</div>
                <h3>Why dGold Wins</h3>
                <ul>
                  <li><CheckCircleIcon size={16} color="var(--color-green)" /> <span>90-day go-live vs. 12-18 month industry average</span></li>
                  <li><CheckCircleIcon size={16} color="var(--color-green)" /> <span>User-based pricing only — no hidden data or record fees</span></li>
                  <li><CheckCircleIcon size={16} color="var(--color-green)" /> <span>Built-in AI across all workflows — not bolted on</span></li>
                  <li><CheckCircleIcon size={16} color="var(--color-green)" /> <span>Full DIY capability — zero consultant dependency</span></li>
                  <li><CheckCircleIcon size={16} color="var(--color-green)" /> <span>4 modules, 1 platform — not 4 products pretending to be one</span></li>
                </ul>
                <Link to="/request-demo" className="btn btn--primary" style={{ marginTop: 'var(--space-6)' }}>
                  See It In Action →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
