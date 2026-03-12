import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './PricingPage.css';

export default function PricingPage() {
  const [users, setUsers] = useState(25);
  const [activeModules, setActiveModules] = useState({ dq: true, mdm: true, compliance: false, marketplace: false });
  const [deployment, setDeployment] = useState('onprem');
  const [llm, setLlm] = useState('included');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const toggleModule = (mod) => setActiveModules(prev => ({ ...prev, [mod]: !prev[mod] }));

  const calculate = useCallback(() => {
    const prices = { dq: 15, mdm: 25, compliance: 10, marketplace: 12 };
    let basePerUser = 0;
    Object.entries(activeModules).forEach(([key, active]) => { if (active) basePerUser += prices[key]; });
    const depMultiplier = deployment === 'saas' ? 1.15 : deployment === 'hybrid' ? 1.08 : 1;
    const llmAddon = llm === 'byol' ? -3 : 0;
    const perUser = Math.round((basePerUser + llmAddon) * depMultiplier);
    const monthly = perUser * users;
    const annual = monthly * 12;
    const avgDataCost = users * 800;
    const savings = Math.round(avgDataCost * 0.583);
    const annualSavings = savings * 12;
    const paybackMonths = monthly > 0 ? Math.ceil(annual / annualSavings) : 0;

    return { perUser, monthly, annual, annualSavings, paybackMonths };
  }, [users, activeModules, deployment, llm]);

  const result = calculate();

  return (
    <div className="page-wrapper">
      <section className="section pricing" id="pricing">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Build Your Price</span></div>
              <h2 className="section__title">Price &amp; ROI Calculator</h2>
              <p className="section__subtitle">Straightforward. Predictable. Transparent. User-based licensing only — no volume, record, or transaction fees.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="pricing__grid">
              <div className="pricing__calculator">
                <h3>Configure Your Plan</h3>
                <div className="calc-group">
                  <div className="calc-group__label"><span>Number of Users</span><span className="calc-group__value">{users}</span></div>
                  <input type="range" className="calc-slider" min="5" max="500" value={users} step="5" onChange={e => setUsers(parseInt(e.target.value))} />
                </div>
                <div className="calc-group">
                  <div className="calc-group__label"><span>Select Modules</span></div>
                  <div className="calc-toggles">
                    {[{ key: 'dq', label: 'Data Quality' }, { key: 'mdm', label: 'MDM' }, { key: 'compliance', label: 'Compliance' }, { key: 'marketplace', label: 'Marketplace' }].map(m => (
                      <button key={m.key} className={`calc-toggle ${activeModules[m.key] ? 'active' : ''}`} onClick={() => toggleModule(m.key)}>{m.label}</button>
                    ))}
                  </div>
                </div>
                <div className="calc-group">
                  <div className="calc-group__label"><span>Deployment</span></div>
                  <div className="calc-radios">
                    {['onprem', 'hybrid', 'saas'].map(d => (
                      <label key={d} className={`calc-radio ${deployment === d ? 'active' : ''}`} onClick={() => setDeployment(d)}>
                        <input type="radio" name="deployment" value={d} checked={deployment === d} readOnly />
                        {d === 'onprem' ? 'On-Prem' : d === 'hybrid' ? 'Hybrid' : 'SaaS'}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="calc-group">
                  <div className="calc-group__label"><span>AI / LLM Option</span></div>
                  <div className="calc-radios">
                    <label className={`calc-radio ${llm === 'included' ? 'active' : ''}`} onClick={() => setLlm('included')}>
                      <input type="radio" name="llm" value="included" checked={llm === 'included'} readOnly /> DIP's LLM (Included)
                    </label>
                    <label className={`calc-radio ${llm === 'byol' ? 'active' : ''}`} onClick={() => setLlm('byol')}>
                      <input type="radio" name="llm" value="byol" checked={llm === 'byol'} readOnly /> Bring Your Own LLM
                    </label>
                  </div>
                </div>
              </div>
              <div className="pricing__results">
                <h3>Estimated Investment</h3>
                <div className="result-item"><span className="result-item__label">Monthly per User</span><span className="result-item__value">${result.perUser}</span></div>
                <div className="result-item"><span className="result-item__label">Monthly Total</span><span className="result-item__value">${result.monthly.toLocaleString()}</span></div>
                <div className="result-item result-item--total"><span className="result-item__label">Annual Investment</span><span className="result-item__value">${result.annual.toLocaleString()}</span></div>
                <div className="roi-metrics">
                  <div className="roi-metric"><div className="roi-metric__value">91.67%</div><div className="roi-metric__label">Data Purity</div></div>
                  <div className="roi-metric"><div className="roi-metric__value">${result.annualSavings.toLocaleString()}</div><div className="roi-metric__label">Est. Annual Savings</div></div>
                  <div className="roi-metric"><div className="roi-metric__value">{result.paybackMonths} mo</div><div className="roi-metric__label">Payback Period</div></div>
                </div>
                <Link to="/request-demo" className="btn btn--primary btn--lg pricing__cta">Get Custom Quote →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
