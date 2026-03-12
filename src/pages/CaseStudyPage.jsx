import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import CounterAnimation from '../components/CounterAnimation';
import { ShieldIcon, UsersIcon, DatabaseIcon, RocketIcon, CheckCircleIcon, ChartIcon, BoltIcon, TargetIcon, TrendUpIcon, ArrowRightIcon, LinkIcon, GearIcon } from '../components/SvgIcons';
import './CaseStudyPage.css';

const caseStudies = [
  {
    id: 'government',
    icon: '🏛️',
    industry: 'Government',
    title: 'National Human Capital Data Mastering',
    client: 'Middle Eastern Government Entity',
    challenge: 'A large Middle Eastern government body needed to unify human capital records across 14 separate ministries and 200,000+ employee records. Data was fragmented across legacy HR systems, manual spreadsheets, and siloed ministry databases — creating payroll discrepancies, ghost employees, and compliance gaps.',
    solution: 'dGold was deployed as a multi-domain MDM hub, connecting to all 14 ministry systems via pre-built connectors. AI-powered matching identified 23,000+ duplicate records in the first week. Automated survivorship rules created unified employee golden records with complete employment history.',
    results: [
      { label: 'Go-Live', value: '< 6 months' },
      { label: 'Duplicates Found', value: '23,000+' },
      { label: 'Data Purity', value: '94.2%' },
      { label: 'Cost Savings', value: '$4.1M/yr' },
    ],
    quote: '"dGold gave us national-scale data governance in less than two quarters. We eliminated ghost employees, fixed payroll gaps, and now have a single source of truth across all ministries."',
    quoteAuthor: 'Director of Digital Transformation',
    tags: ['Multi-Domain', 'AI Matching', 'National Scale'],
    color: 'gold',
  },
  {
    id: 'insurance',
    icon: '🏢',
    industry: 'Insurance',
    title: 'Customer Master During Cloud Migration',
    client: 'Fortune 500 Insurance Provider',
    challenge: 'During a major cloud migration from on-premises infrastructure, the company needed to maintain customer data integrity across both environments. With 12M+ policyholder records spanning 30+ years, the migration risked data loss, duplicate customer profiles, and regulatory non-compliance.',
    solution: 'dGold operated in hybrid mode — connecting to both the legacy on-prem Oracle systems and the new AWS cloud environment simultaneously. The platform\'s real-time sync ensured zero data gaps during the 18-month migration window. PII classification and masking were applied automatically for HIPAA and state insurance regulations.',
    results: [
      { label: 'Records Unified', value: '12M+' },
      { label: 'Migration Gaps', value: 'Zero' },
      { label: 'Compliance', value: '100%' },
      { label: 'Downtime', value: '0 hours' },
    ],
    quote: '"We migrated 12 million customer records to the cloud without a single compliance incident. dGold held its ground across both on-prem and cloud sources the entire time."',
    quoteAuthor: 'VP of Enterprise Architecture',
    tags: ['Hybrid Cloud', 'Real-Time Sync', 'Compliance'],
    color: 'blue',
  },
  {
    id: 'autofinance',
    icon: '🚗',
    industry: 'Auto Finance',
    title: 'Customer Data for Digital Transformation',
    client: 'Leading Auto Finance Company',
    challenge: 'The company\'s customer-facing mobile app was displaying inconsistent customer information — different names, addresses, and account details depending on which backend system was queried. Support calls were spiking, and the NPS score had dropped 18 points in one quarter.',
    solution: 'dGold was deployed as the single customer master, integrating with the loan origination system, CRM, billing platform, and mobile app backend. AI matching resolved 340,000 duplicate customer profiles. The mobile app was reconnected to dGold\'s real-time API, ensuring every customer sees consistent, accurate information.',
    results: [
      { label: 'Go-Live', value: '< 90 days' },
      { label: 'Duplicates Resolved', value: '340K' },
      { label: 'NPS Improvement', value: '+22 pts' },
      { label: 'Support Calls Down', value: '41%' },
    ],
    quote: '"We went from messy, inconsistent customer data to a golden record in under a quarter. Our mobile app finally shows one consistent view — and our NPS bounced back immediately."',
    quoteAuthor: 'Chief Digital Officer',
    tags: ['Mobile App', 'Customer MDM', 'Fast Go-Live'],
    color: 'green',
  },
  {
    id: 'manufacturing',
    icon: '🏭',
    industry: 'Manufacturing',
    title: 'Multi-Domain DIY Mastering at Scale',
    client: 'Global Manufacturing Corporation',
    challenge: 'A manufacturing giant with $8B+ revenue was struggling with material, vendor, and customer data scattered across 6 ERP systems (SAP, Oracle, JDE) in 12 countries. Previous MDM initiatives had failed due to over-reliance on external consultants, costing $3M+ with no measurable results.',
    solution: 'dGold\'s no-code configuration and pre-built templates allowed the internal team to set up a multi-domain hub covering materials, vendors, and customers. After a 2-week training, the team achieved full DIY mode — configuring match rules, survivorship logic, and governance workflows without any external help.',
    results: [
      { label: 'Domains Mastered', value: '3' },
      { label: 'ERP Systems', value: '6' },
      { label: 'Countries', value: '12' },
      { label: 'External Consultants', value: '0' },
    ],
    quote: '"We had burned $3 million on a failed MDM project. With dGold, our own team mastered three domains across 6 ERPs. No consultants. No custom code. Just results."',
    quoteAuthor: 'Global Head of Data Management',
    tags: ['Multi-Domain', 'DIY', 'Global Scale'],
    color: 'purple',
  },
];

const summaryStats = [
  { value: 4, suffix: '', label: 'Enterprise Deployments' },
  { value: 12, suffix: 'M+', label: 'Records Mastered' },
  { value: 58.3, suffix: '%', label: 'Avg. Cost Reduction', decimals: 1 },
  { value: 0, suffix: '', label: 'Failed Projects' },
];

// ... existing imports and data ...

export default function CaseStudyPage() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const activeStudy = caseStudies.find(cs => cs.id === activeTab);

  return (
    <div className="page-wrapper">
      {/* Hero */}
      <section className="cs-hero">
        <div className="cs-hero__bg">
          <div className="cs-hero__orb cs-hero__orb--1"></div>
          <div className="cs-hero__orb cs-hero__orb--2"></div>
        </div>
        <div className="container">
          <div className="cs-hero__content">
            <div className="section__badge"> <span>Proven Results</span></div>
            <h1 className="section__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Real Companies. Real Data.<br />Real Results.
            </h1>
            <p className="section__subtitle">
              See how enterprises across industries have transformed their data landscape with dGold — slashing costs, eliminating duplicates, and achieving trusted master data in record time.
            </p>
          </div>
          <div className="cs-hero__stats">
            {summaryStats.map((s, i) => (
              <div className="cs-hero__stat" key={i}>
                <div className="cs-hero__stat-value">
                  <CounterAnimation target={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </div>
                <div className="cs-hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section cs-list">
        <div className="container">
          
          {/* Pill Bar Navigation */}
          <ScrollReveal>
            <div className="cs-tabs">
              <div className="cs-tabs__pills">
                {caseStudies.map((cs) => (
                  <button
                    key={cs.id}
                    className={`cs-tab-btn ${activeTab === cs.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(cs.id)}
                    style={activeTab === cs.id ? { borderColor: `var(--color-${cs.color})`, color: `var(--color-${cs.color}-light)` } : {}}
                  >
                    <span className="cs-tab-btn__icon">{cs.icon}</span>
                    <span className="cs-tab-btn__label">{cs.industry}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Active Case Study */}
          <div className="cs-content-wrapper">
            <ScrollReveal key={activeStudy.id}>
              <div className={`cs-card cs-card--${activeStudy.color}`}>
                <div className="cs-card__header">
                  <div className="cs-card__industry">
                    <span className="cs-card__emoji">{activeStudy.icon}</span>
                    <span className="cs-card__industry-name">{activeStudy.industry}</span>
                  </div>
                  <div className="cs-card__tags">
                    {activeStudy.tags.map((tag, j) => <span className="cs-card__tag" key={j}>{tag}</span>)}
                  </div>
                </div>

                <h2 className="cs-card__title">{activeStudy.title}</h2>
                <p className="cs-card__client">{activeStudy.client}</p>

                <div className="cs-card__body">
                  <div className="cs-card__section">
                    <div className="cs-card__section-label">
                      <TargetIcon size={16} /> The Challenge
                    </div>
                    <p>{activeStudy.challenge}</p>
                  </div>

                  <div className="cs-card__section">
                    <div className="cs-card__section-label">
                      <RocketIcon size={16} /> The Solution
                    </div>
                    <p>{activeStudy.solution}</p>
                  </div>
                </div>

                <div className="cs-card__results">
                  {activeStudy.results.map((r, j) => (
                    <div className="cs-card__result" key={j}>
                      <div className="cs-card__result-value">{r.value}</div>
                      <div className="cs-card__result-label">{r.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="cs-card__quote">
                  <p>{activeStudy.quote}</p>
                  <cite>— {activeStudy.quoteAuthor}, {activeStudy.client}</cite>
                </blockquote>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cs-cta-section">
        <div className="container">
          <ScrollReveal>
            <div className="cs-cta">
              <h2>Want to Be Our Next Success Story?</h2>
              <p>Join the growing list of enterprises that trust dGold to deliver clean, governed, actionable master data.</p>
              <div className="cs-cta__actions">
                <Link to="/request-demo" className="btn btn--primary btn--lg">Request a Demo →</Link>
                <Link to="/pricing" className="btn btn--secondary btn--lg">View Pricing</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
