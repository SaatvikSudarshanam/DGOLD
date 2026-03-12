import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ShieldIcon, LinkIcon, UsersIcon, LockIcon, BotIcon, FileTextIcon, SearchIcon, ChartIcon, RulerIcon, WrenchIcon, MapIcon, KeyIcon, MaskIcon, ClipboardIcon } from '../components/SvgIcons';
import './ModulesPage.css';

const modules = {
  dq: {
    title: 'AI-First Data Quality',
    desc: 'Automate rule generation, mapping, matching, merging, and stewardship. 91.67% data purity powered by intelligent automation.',
    icon: <ShieldIcon size={48} />,
    features: [
      { icon: <BotIcon size={20} />, title: 'AI-Powered Data Assets', desc: 'Intelligent data profiling and discovery across all your sources' },
      { icon: <FileTextIcon size={20} />, title: 'AI Rule Generation', desc: 'Automatic creation and tuning of quality rules without manual scripting' },
      { icon: <SearchIcon size={20} />, title: 'Data Discovery', desc: 'Find, understand, and catalog data assets across your entire estate' },
      { icon: <ChartIcon size={20} />, title: 'DQ Reports & Dashboards', desc: 'Real-time quality metrics, scoring, and trend analysis' },
    ],
    caps: ['Profiling', 'Standardization', 'Deduplication', 'Enrichment', 'Validation', 'Monitoring'],
  },
  mdm: {
    title: 'MDM Processes & Golden Record',
    desc: 'Create and maintain golden records with intelligent matching, survivorship rules, and hierarchical relationships.',
    icon: <LinkIcon size={48} />,
    features: [
      { icon: <RulerIcon size={20} />, title: 'Data Modeler', desc: 'Visual entity & relationship modeling with drag-and-drop simplicity' },
      { icon: <LinkIcon size={20} />, title: 'Match & Survivorship', desc: 'Configurable matching algorithms with golden record creation' },
      { icon: <ChartIcon size={20} />, title: 'Operational Metrics', desc: 'Track data quality, stewardship efficiency, and governance compliance' },
      { icon: <ClipboardIcon size={20} />, title: 'Hierarchy Management', desc: 'Define and manage complex organizational & product hierarchies' },
    ],
    caps: ['Golden Records', 'Hierarchies', 'Survivorship', 'Bulk Updates', 'Workflows', 'Data Browser'],
  },
  stewardship: {
    title: 'Data Stewardship & Governance',
    desc: 'Empower your data stewards with tools that simplify governance and make data management accessible to everyone.',
    icon: <UsersIcon size={48} />,
    features: [
      { icon: <UsersIcon size={20} />, title: 'Stewardship Workbench', desc: 'Centralized workspace for data stewards to manage and curate data' },
      { icon: <WrenchIcon size={20} />, title: 'Configuration & Rules', desc: 'Reference tables, enumerations, DQ rules, and validation rules' },
      { icon: <MapIcon size={20} />, title: 'GUI Data Mapping', desc: 'Visual data mapping interface — no ETL rewrites needed' },
      { icon: <KeyIcon size={20} />, title: 'Role-Based Access', desc: 'Attribute-level visibility & role-based access control' },
    ],
    caps: ['Connections', 'Reference Tables', 'Enumerations', 'Validation', 'Workflow Mgmt', 'Audit Trail'],
  },
  compliance: {
    title: 'Built-In Compliance & Policy Engine',
    desc: 'Integrated policies, source traceability, and audit-ready logs. Governance and regulations are handled — zero workflow friction.',
    icon: <LockIcon size={48} />,
    features: [
      { icon: <LockIcon size={20} />, title: 'PII Classifier', desc: 'Automatic detection and classification of personally identifiable information' },
      { icon: <FileTextIcon size={20} />, title: 'Policy & Rule Evaluation', desc: 'Automated compliance checking against defined policies and regulations' },
      { icon: <MaskIcon size={20} />, title: 'Masking Engine', desc: 'LLM-powered masking suggestions for sensitive data protection' },
      { icon: <ClipboardIcon size={20} />, title: 'Audit Trail & Journal', desc: 'Record-level audit trail with complete journal entries for compliance' },
    ],
    caps: ['PII Detection', 'Data Masking', 'Policy Engine', 'Lineage', 'Audit Logs', 'Drift Monitor'],
  },
};

const tabLabels = { dq: 'Data Quality', mdm: 'MDM Processes', stewardship: 'Data Stewardship', compliance: 'Compliance' };
const tabIcons = { dq: <ShieldIcon size={16} />, mdm: <LinkIcon size={16} />, stewardship: <UsersIcon size={16} />, compliance: <LockIcon size={16} /> };

export default function ModulesPage() {
  const [activeModule, setActiveModule] = useState('dq');
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const mod = modules[activeModule];

  return (
    <div className="page-wrapper">
      <section className="section section--alt modules" id="modules">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Platform Capabilities</span></div>
              <h2 className="section__title">Four Modules, One Platform</h2>
              <p className="section__subtitle">MDM, Data Quality, Compliance, and Marketplace — all in one clean workspace, not four products pretending to be one.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="modules__tabs">
              {Object.keys(modules).map(key => (
                <button key={key} className={`modules__tab ${activeModule === key ? 'active' : ''}`} onClick={() => setActiveModule(key)}>
                  {tabIcons[key]} {tabLabels[key]}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className={`modules__panel active module--${activeModule}`}>
            <div className="modules__detail">
              <div className="modules__detail-info">
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
                <div className="module-feature-list">
                  {mod.features.map((f, i) => (
                    <div className="module-feature-item" key={i}>
                      <div className="module-feature-item__icon">{f.icon}</div>
                      <div className="module-feature-item__text"><strong>{f.title}</strong><span>{f.desc}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modules__detail-visual">
                <div className="module-visual-icon">{mod.icon}</div>
                <div className="module-capabilities">
                  {mod.caps.map((cap, i) => <div className="module-cap" key={i}>{cap}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
