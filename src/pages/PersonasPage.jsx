import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { RulerIcon, LinkIcon, ChartIcon, PlugIcon, GearIcon, ClipboardIcon, CostIcon, TrendUpIcon, TargetIcon, SearchIcon, BoltIcon } from '../components/SvgIcons';
import './PersonasPage.css';

export default function PersonasPage() {
  const [activePanel, setActivePanel] = useState('technical');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <section className="section section--alt personas" id="personas">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge">✦ <span>Built For Everyone</span></div>
              <h2 className="section__title">MDM Across Your Organization</h2>
              <p className="section__subtitle">Whether you're in IT engineering or finance, dGold speaks your language and delivers results that matter to you.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="personas__tabs">
              <button className={`personas__tab ${activePanel === 'technical' ? 'active' : ''}`} onClick={() => setActivePanel('technical')}>
                <GearIcon size={16} /> Technical Teams
              </button>
              <button className={`personas__tab ${activePanel === 'financial' ? 'active' : ''}`} onClick={() => setActivePanel('financial')}>
                <ChartIcon size={16} /> Business &amp; Finance
              </button>
            </div>
          </ScrollReveal>

          {activePanel === 'technical' && (
            <div className="personas__panel active" id="panel-technical">
              <div className="personas__content">
                <div className="personas__info">
                  <h3>Platform Productivity for IT Teams</h3>
                  <p>A complete toolkit so your engineers control it — without a consulting army. Configure, model, and govern data with intuitive tools designed for technical depth.</p>
                  <div className="personas__features">
                    {[
                      { icon: <RulerIcon size={18} />, title: 'Data Modeler', desc: 'Visual model builder for entities, relationships & hierarchies' },
                      { icon: <LinkIcon size={18} />, title: 'Match & Survivorship', desc: 'AI-powered matching rules with configurable survivorship' },
                      { icon: <ChartIcon size={18} />, title: 'DQ Reports', desc: 'AI-powered data assets, discovery & quality scoring' },
                      { icon: <PlugIcon size={18} />, title: 'API Integrations', desc: 'Plug-and-play connectors for SAP, Salesforce, Oracle, Dynamics' },
                      { icon: <GearIcon size={18} />, title: 'Schema Detection', desc: 'Automatic schema inference for seamless onboarding' },
                      { icon: <ClipboardIcon size={18} />, title: 'Stewardship Workbench', desc: 'Complete data stewardship tool with workflow management' },
                    ].map((f, i) => (
                      <div className="persona-feature" key={i}>
                        <div className="persona-feature__icon">{f.icon}</div>
                        <div className="persona-feature__text"><strong>{f.title}</strong>{f.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="personas__visual">
                  <div className="stat-ring">
                    <svg width="200" height="200"><circle cx="100" cy="100" r="85" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="12"/><circle cx="100" cy="100" r="85" fill="none" stroke="url(#goldGrad)" strokeWidth="12" strokeDasharray="534" strokeDashoffset="134" strokeLinecap="round"/><defs><linearGradient id="goldGrad"><stop offset="0%" stopColor="#d4a843"/><stop offset="100%" stopColor="#e8c96a"/></linearGradient></defs></svg>
                    <span className="stat-ring__value">91.67%</span>
                  </div>
                  <span className="stat-ring__label">Data Purity Achieved</span>
                  <div className="personas__metrics">
                    <div className="metric-card"><div className="metric-card__value">70%</div><div className="metric-card__label">Faster Go-Live</div></div>
                    <div className="metric-card"><div className="metric-card__value">0</div><div className="metric-card__label">Custom Code Lines</div></div>
                    <div className="metric-card"><div className="metric-card__value">90d</div><div className="metric-card__label">Time to Value</div></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activePanel === 'financial' && (
            <div className="personas__panel active" id="panel-financial">
              <div className="personas__content">
                <div className="personas__info">
                  <h3>Turn Trusted Data into Measurable Impact</h3>
                  <p>Every capability designed to create faster insights, lower cost, and higher confidence in business decisions. Clean data that drives revenue.</p>
                  <div className="personas__features">
                    {[
                      { icon: <CostIcon size={18} />, title: 'Cost Optimization', desc: '58.3% cost reduction through eliminating duplicates & rework' },
                      { icon: <TrendUpIcon size={18} />, title: 'Revenue Intelligence', desc: 'Better LTV tracking, cleaner reports & faster onboarding' },
                      { icon: <TargetIcon size={18} />, title: 'Procurement Savings', desc: 'Reduced spend through duplicate elimination & normalized pricing' },
                      { icon: <ClipboardIcon size={18} />, title: 'Compliant Reporting', desc: 'Audit-ready lineage, PII control & explainable decisions' },
                      { icon: <SearchIcon size={18} />, title: 'Single Customer View', desc: 'One reliable view across the business for all stakeholders' },
                      { icon: <BoltIcon size={18} />, title: 'Lower Inventory Cost', desc: 'Clean materials data & consistent units power production planning' },
                    ].map((f, i) => (
                      <div className="persona-feature" key={i}>
                        <div className="persona-feature__icon">{f.icon}</div>
                        <div className="persona-feature__text"><strong>{f.title}</strong>{f.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="personas__visual">
                  <div className="stat-ring">
                    <svg width="200" height="200"><circle cx="100" cy="100" r="85" fill="none" stroke="rgba(148,163,184,0.1)" strokeWidth="12"/><circle cx="100" cy="100" r="85" fill="none" stroke="url(#greenGrad)" strokeWidth="12" strokeDasharray="534" strokeDashoffset="222" strokeLinecap="round"/><defs><linearGradient id="greenGrad"><stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#34d399"/></linearGradient></defs></svg>
                    <span className="stat-ring__value">58.3%</span>
                  </div>
                  <span className="stat-ring__label">Cost Optimization</span>
                  <div className="personas__metrics">
                    <div className="metric-card"><div className="metric-card__value">1</div><div className="metric-card__label">Customer View</div></div>
                    <div className="metric-card"><div className="metric-card__value">AI</div><div className="metric-card__label">Readiness Built-in</div></div>
                    <div className="metric-card"><div className="metric-card__value">0</div><div className="metric-card__label">Hidden Data Fees</div></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
