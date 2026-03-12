import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { BoltIcon, RocketIcon, BrainIcon } from '../components/SvgIcons';
import './FeaturesPage.css';

export default function FeaturesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <section className="section features" id="features">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Core Pillars</span></div>
              <h2 className="section__title">Easier · Faster · SimplifAIed</h2>
              <p className="section__subtitle">MDM had become slow and complicated. We stripped away the clutter and built something faster, smarter, and simple by design.</p>
            </div>
          </ScrollReveal>

          <div className="features__grid">
            <ScrollReveal delay={100}>
              <div className="feature-card feature-card--easier">
                <div className="feature-card__icon"><BoltIcon size={28} /></div>
                <div className="feature-card__tag">Easier</div>
                <h3 className="feature-card__title">No Code. No Chaos.</h3>
                <ul className="feature-card__list">
                  <li>Drag-and-drop configurations with built-in validations</li>
                  <li>Supports multiple domains with easy configurations</li>
                  <li>One-click integrations to top databases &amp; cloud tools</li>
                  <li>MDM, DQ, Compliance, and Marketplace — all in one workspace</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="feature-card feature-card--faster">
                <div className="feature-card__icon"><RocketIcon size={28} /></div>
                <div className="feature-card__tag">Faster</div>
                <h3 className="feature-card__title">Setup to Success in Weeks</h3>
                <ul className="feature-card__list">
                  <li>90-day time-to-first-value with reusable templates</li>
                  <li>Pre-modeled entities with smart templates</li>
                  <li>Self-learning workflows cut go-live time by 70%</li>
                  <li>Real-time synchronization — no batch delays</li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="feature-card feature-card--simplifaied">
                <div className="feature-card__icon"><BrainIcon size={28} /></div>
                <div className="feature-card__tag">SimplifAIed</div>
                <h3 className="feature-card__title">Simplicity Powered by Intelligence</h3>
                <ul className="feature-card__list">
                  <li>AI-led data mapping, alignment &amp; relationship detection</li>
                  <li>Smart rule recommendations without manual scripting</li>
                  <li>Auto-classification of sensitive fields &amp; policy requirements</li>
                  <li>Use your own LLM or DIP's embedded AI — your control</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
