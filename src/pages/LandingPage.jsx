import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import CounterAnimation from '../components/CounterAnimation';
import ScrollReveal from '../components/ScrollReveal';
import { BoltIcon, RocketIcon, BrainIcon, ShieldIcon, LinkIcon, DatabaseIcon, LayersIcon, CheckCircleIcon, SparklesIcon, UsersIcon, LockIcon, GearIcon, ChartIcon, TargetIcon, SearchIcon, ArrowRightIcon, PlugIcon, TrendUpIcon } from '../components/SvgIcons';
import './LandingPage.css';

export default function LandingPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <Parallax speed={-20} className="hero__orb hero__orb--1" />
        <Parallax speed={10} className="hero__orb hero__orb--2" />
        <Parallax speed={30} className="hero__orb hero__orb--3" />
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="highlight">Trusted Master Data</span><br />in 90 Days
          </h1>
          <p className="hero__subtitle">
            Onboard, Match &amp; Govern - One platform to close the gap and deliver trusted masters. Easier, Faster, SimplifAIed.
          </p>
          <div className="hero__cta">
            <Link to="/request-demo" className="btn btn--primary btn--lg">Request a Demo →</Link>
            <Link to="/features" className="btn btn--secondary btn--lg">▶ Watch Overview</Link>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value"><CounterAnimation target={90} /></span>
              <span className="hero__stat-label">Day Go-Live</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value"><CounterAnimation target={70} suffix="%" /></span>
              <span className="hero__stat-label">Faster Setup</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value"><CounterAnimation target={91.67} suffix="%" decimals={2} /></span>
              <span className="hero__stat-label">Data Purity</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value"><CounterAnimation target={58.3} suffix="%" decimals={1} /></span>
              <span className="hero__stat-label">Cost Reduction</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="trusted-strip">
        <div className="container">
          <p className="trusted-strip__label">Trusted across industries</p>
          <div className="trusted-strip__logos">
            {['Government', 'Insurance', 'Auto Finance', 'Manufacturing', 'Healthcare', 'Retail', 'Banking', 'Telecom'].map((name, i) => (
              <div className="trusted-strip__logo" key={i}>{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT OVERVIEW ===== */}
      <section className="section product-info" id="product-info">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>The Platform</span></div>
              <h2 className="section__title">dGold - AI First MDM Platform</h2>
              <p className="section__subtitle">One unified platform that replaces fragmented tools. Master, govern, and distribute your data with built-in intelligence — no consultants, no custom code.</p>
            </div>
          </ScrollReveal>

          <div className="product-info__grid">
            <ScrollReveal delay={100}>
              <div className="product-card">
                <div className="product-card__icon product-card__icon--gold"><DatabaseIcon size={28} /></div>
                <h3>Unified Data Hub</h3>
                <p>MDM, Data Quality, Compliance, and Marketplace — all in one workspace. No module sprawl, no integration headaches. One login, one interface, total control.</p>
                <div className="product-card__stats">
                  <div className="product-card__stat"><strong>4</strong><span>Modules</span></div>
                  <div className="product-card__stat"><strong>1</strong><span>Platform</span></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="product-card">
                <div className="product-card__icon product-card__icon--blue"><BrainIcon size={28} /></div>
                <h3>Quiet AI Built-In</h3>
                <p>AI handles mapping, matching, rule generation, and classification silently in the background. Bring your own LLM or use DIP's embedded engine — your choice, your control.</p>
                <div className="product-card__stats">
                  <div className="product-card__stat"><strong>AI</strong><span>Powered</span></div>
                  <div className="product-card__stat"><strong>0</strong><span>Scripts</span></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="product-card">
                <div className="product-card__icon product-card__icon--purple"><RocketIcon size={28} /></div>
                <h3>90-Day Go-Live</h3>
                <p>Pre-modeled entities, smart templates, and self-learning workflows slash onboarding time by 70%. From setup to measurable value in weeks, not quarters.</p>
                <div className="product-card__stats">
                  <div className="product-card__stat"><strong>70%</strong><span>Faster</span></div>
                  <div className="product-card__stat"><strong>90d</strong><span>Go-Live</span></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section--alt how-it-works">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>How It Works</span></div>
              <h2 className="section__title">From Messy Data to Golden Records in 4 Steps</h2>
              <p className="section__subtitle">Our AI-powered pipeline takes your raw, fragmented data and transforms it into a single source of truth — automatically.</p>
            </div>
          </ScrollReveal>

          <div className="hiw-timeline">
            {[
              { num: '01', icon: <PlugIcon size={24} />, title: 'Connect Your Sources', desc: 'Plug into SAP, Salesforce, Oracle, Dynamics, flat files, APIs, and 50+ databases with one-click connectors. Schema detection handles the rest.', color: 'gold' },
              { num: '02', icon: <BrainIcon size={24} />, title: 'AI Maps & Matches', desc: 'Quiet AI automatically maps fields across sources, detects relationships, and identifies duplicates using ML-powered fuzzy matching algorithms.', color: 'blue' },
              { num: '03', icon: <ShieldIcon size={24} />, title: 'Cleanse & Govern', desc: 'Auto-generated quality rules validate, standardize, and enrich your data. PII classification and compliance policies are applied in real-time.', color: 'green' },
              { num: '04', icon: <CheckCircleIcon size={24} />, title: 'Deliver Golden Records', desc: 'Publish trusted, unified master records back to consuming systems via real-time APIs. Monitor data health with built-in dashboards.', color: 'purple' },
            ].map((step, i) => (
              <ScrollReveal delay={i * 150} key={i}>
                <div className={`hiw-step hiw-step--${step.color}`}>
                  <div className="hiw-step__number">{step.num}</div>
                  <div className="hiw-step__icon">{step.icon}</div>
                  <div className="hiw-step__content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY CAPABILITIES ===== */}
      <section className="section capabilities">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Capabilities</span></div>
              <h2 className="section__title">Everything You Need. Nothing You Don't.</h2>
              <p className="section__subtitle">Built for enterprises that want results - not endless configuration cycles and consulting bills.</p>
            </div>
          </ScrollReveal>

          <div className="cap-grid">
            {[
              { icon: <GearIcon size={22} />, title: 'No-Code Configuration', desc: 'Drag-and-drop data models, validation rules, and workflow templates. Zero scripting required.', color: 'gold' },
              { icon: <LinkIcon size={22} />, title: 'Smart Match & Merge', desc: 'AI-powered fuzzy matching with configurable survivorship rules. 91.67% purity out of the box.', color: 'blue' },
              { icon: <LayersIcon size={22} />, title: 'Multi-Domain Support', desc: 'Customer, product, vendor, material, employee - manage any domain from a single workspace.', color: 'purple' },
              { icon: <SearchIcon size={22} />, title: 'Data Discovery', desc: 'Automatically profile, catalog, and lineage-trace data assets across your entire estate.', color: 'green' },
              { icon: <LockIcon size={22} />, title: 'Built-In Compliance', desc: 'GDPR, CCPA, HIPAA ready. PII classification, masking engine, and audit trail included.', color: 'red' },
              { icon: <ChartIcon size={22} />, title: 'Real-Time Dashboards', desc: 'Quality scores, stewardship metrics, and governance KPIs - all live, all exportable.', color: 'cyan' },
              { icon: <UsersIcon size={22} />, title: 'Stewardship Workbench', desc: 'Task queues, exception handling, and approval workflows for your data stewards.', color: 'gold' },
              { icon: <PlugIcon size={22} />, title: '50+ Connectors', desc: 'SAP, Salesforce, Oracle, Dynamics, Snowflake, AWS, Azure, GCP - and growing weekly.', color: 'blue' },
            ].map((cap, i) => (
              <ScrollReveal delay={i * 80} key={i}>
                <div className={`cap-card cap-card--${cap.color}`}>
                  <div className="cap-card__icon">{cap.icon}</div>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DEPLOYMENT ===== */}
      <section className="section section--alt deployment">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Deployment</span></div>
              <h2 className="section__title">Your Infrastructure. Your Rules.</h2>
              <p className="section__subtitle">Deploy dGold wherever it makes sense for your business - on-premises, hybrid, or fully managed SaaS.</p>
            </div>
          </ScrollReveal>

          <div className="deploy-grid">
            {[
              { icon: <DatabaseIcon size={32} />, title: 'On-Premises', desc: 'Full control. Install on your own servers, behind your firewall. Air-gapped environments supported.', tags: ['Full Data Control', 'BYOL Supported', 'Air-Gap Ready'] },
              { icon: <LayersIcon size={32} />, title: 'Hybrid Cloud', desc: 'Best of both worlds. Keep sensitive data on-prem while leveraging cloud compute for AI workloads.', tags: ['Flexible Architecture', 'Multi-Cloud', 'Edge Compatible'] },
              { icon: <RocketIcon size={32} />, title: 'Managed SaaS', desc: 'Zero ops burden. We handle the infrastructure - you focus on your data. SOC 2 Type II certified.', tags: ['Zero Maintenance', 'Auto-Scaling', 'SOC 2 Certified'] },
            ].map((dep, i) => (
              <ScrollReveal delay={i * 150} key={i}>
                <div className="deploy-card">
                  <div className="deploy-card__icon">{dep.icon}</div>
                  <h3>{dep.title}</h3>
                  <p>{dep.desc}</p>
                  <div className="deploy-card__tags">
                    {dep.tags.map((tag, j) => <span key={j} className="deploy-tag">{tag}</span>)}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROI SNAPSHOT ===== */}
      <section className="section roi-snapshot">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Business Impact</span></div>
              <h2 className="section__title">Measurable ROI from Day One</h2>
              <p className="section__subtitle">Every dollar invested in dGold compounds. Here's what our customers see within the first year.</p>
            </div>
          </ScrollReveal>

          <div className="roi-grid">
            {[
              { value: '58.3%', label: 'Cost Reduction', desc: 'Eliminate duplicate records, reduce rework, and cut data-related support costs.' },
              { value: '91.67%', label: 'Data Purity Score', desc: 'AI-driven quality rules achieve production-grade accuracy from the first sprint.' },
              { value: '70%', label: 'Faster Go-Live', desc: 'Pre-built templates and smart workflows compress timelines dramatically.' },
              { value: '$2.4M', label: 'Avg. Annual Savings', desc: 'Mid-market customers save on licensing, consultants, and failed integrations.' },
              { value: '< 6mo', label: 'Full Payback', desc: 'Most deployments pay for themselves within two quarters of going live.' },
              { value: '0', label: 'External Consultants', desc: 'DIY-friendly platform means your team owns it from day one.' },
            ].map((r, i) => (
              <ScrollReveal delay={i * 100} key={i}>
                <div className="roi-card">
                  <div className="roi-card__value">{r.value}</div>
                  <div className="roi-card__label">{r.label}</div>
                  <p className="roi-card__desc">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTEGRATIONS ===== */}
      <section className="section section--alt integrations">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Integrations</span></div>
              <h2 className="section__title">Connects to Everything You Already Use</h2>
              <p className="section__subtitle">Plug-and-play connectors to 50+ enterprise systems. No custom ETL. No middleware.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="integrations-grid">
              {['SAP S/4HANA', 'Salesforce', 'Oracle EBS', 'Microsoft Dynamics', 'Snowflake', 'AWS S3', 'Azure Blob', 'Google BigQuery', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Flat Files (CSV/Excel)', 'Kafka Streams', 'JDBC/ODBC', 'ServiceNow', 'Workday'].map((name, i) => (
                <div className="integration-chip" key={i}>{name}</div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="section final-cta">
        <div className="container">
          <ScrollReveal>
            <div className="final-cta__inner">
              <h2>Ready to <span className="text-gold">Master Your Data</span>?</h2>
              <p>Join industry leaders who've already transformed their data landscape. Get a personalized demo in 30 minutes.</p>
              <div className="final-cta__actions">
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
