import { useEffect, useState, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './ResourcesPage.css';

const testimonials = [
  { industry: '🏛️ Government', title: 'Massive Human Capital Data Mastered', text: 'Middle Eastern government entity with massive human capital data, up and running in less than 2 quarters. Unified data governance at national scale.', result: 'Live in < 6 months' },
  { industry: '🏢 Insurance', title: 'Customer Master Amidst Cloud Migration', text: 'Insurance giant implemented customer master data amidst migration to cloud from on-prem. Platform held its ground for both on-prem and cloud sources.', result: 'Hybrid on-prem + cloud' },
  { industry: '🚗 Auto Finance', title: 'Customer Data in Under a Quarter', text: 'Auto finance company mastered customer data in less than a quarter, powered their customer-facing mobile app promoting digital transformation.', result: 'Zero external consultants' },
  { industry: '🏭 Manufacturing', title: 'Multi-Domain DIY Mastering', text: 'Manufacturing giant procured MDM for multi-domain mastering. Only training given, team is in full DIY mode mastering their domains with zero external consultants.', result: 'Full DIY operation' },
];

const resources = [
  { type: 'whitepaper', icon: '📄', title: 'The Modern MDM Playbook', desc: 'How AI-first master data management is redefining the path from chaos to trusted, actionable data.', date: 'Q1 2026', link: 'Download →' },
  { type: 'whitepaper', icon: '📊', title: 'AI-First Data Quality Guide', desc: 'Achieve 91.67% data purity with intelligent rule generation, auto-classification, and real-time monitoring.', date: 'Q1 2026', link: 'Download →' },
  { type: 'casestudy', icon: '🏭', title: 'Manufacturing MDM: Multi-Domain DIY', desc: 'How a manufacturing giant achieved full DIY multi-domain mastering with zero external consultants.', date: '2025', link: 'Read More →' },
  { type: 'casestudy', icon: '🏢', title: 'Insurance Cloud Migration Success', desc: 'Customer master data implementation amidst cloud migration — platform held ground for on-prem and cloud.', date: '2025', link: 'Read More →' },
  { type: 'event', icon: '🎤', title: 'Data Quality Masterclass', desc: 'Live deep-dive into AI-powered data quality: rule generation, profiling, and achieving 90%+ purity scores.', date: 'Mar 28, 2026', link: 'Register →' },
  { type: 'event', icon: '🖥️', title: 'Trusted MDM in 90 Days — Live Demo', desc: 'See how dGold goes from zero to trusted master data in 90 days. Live Q&A with the product team.', date: 'Apr 15, 2026', link: 'Register →' },
];

export default function ResourcesPage() {
  const [filter, setFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredResources = filter === 'all' ? resources : resources.filter(r => r.type === filter);

  const scrollToTestimonial = (index) => {
    setCurrentTestimonial(index);
    const carousel = carouselRef.current;
    if (carousel) {
      const cards = carousel.querySelectorAll('.testimonial-card');
      if (cards[index]) {
        carousel.scrollTo({ left: cards[index].offsetLeft - carousel.offsetLeft - 16, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="page-wrapper">
      {/* Testimonials */}
      <section className="section testimonials" id="testimonials">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge"> <span>Success Stories</span></div>
              <h2 className="section__title">Trusted by Leaders. Proven in Production.</h2>
              <p className="section__subtitle">Different industries. Same result — trusted data, faster.</p>
            </div>
          </ScrollReveal>
          <div className="testimonials__carousel" ref={carouselRef}>
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-card__quote">"</div>
                <div className="testimonial-card__industry">{t.industry}</div>
                <h4 className="testimonial-card__title">{t.title}</h4>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__result">
                  <span className="testimonial-card__result-icon">✓</span>
                  <span className="testimonial-card__result-text">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`testimonials__dot ${i === currentTestimonial ? 'active' : ''}`} onClick={() => scrollToTestimonial(i)} aria-label={`Go to testimonial ${i + 1}`} />
            ))}
          </div>
          <div className="testimonials__nav">
            <button className="testimonials__nav-btn" onClick={() => scrollToTestimonial(Math.max(0, currentTestimonial - 1))} aria-label="Previous">←</button>
            <button className="testimonials__nav-btn" onClick={() => scrollToTestimonial(Math.min(testimonials.length - 1, currentTestimonial + 1))} aria-label="Next">→</button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section resources" id="resources">
        <div className="container">
          <ScrollReveal>
            <div className="section__header">
              <div className="section__badge">✦ <span>Learn &amp; Connect</span></div>
              <h2 className="section__title">Resources &amp; Events</h2>
              <p className="section__subtitle">White papers, case studies, and webinars to deepen your MDM knowledge.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="resources__filters">
              {['all', 'whitepaper', 'casestudy', 'event'].map(f => (
                <button key={f} className={`resources__filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
                  {f === 'all' ? 'All' : f === 'whitepaper' ? 'White Papers' : f === 'casestudy' ? 'Case Studies' : 'Events'}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="resources__grid">
              {filteredResources.map((r, i) => (
                <div className="resource-card" key={i} style={{ animation: 'fadeInUp 0.4s ease-out forwards' }}>
                  <div className="resource-card__thumb">
                    <div className={`resource-card__thumb-bg resource-card__thumb-bg--${r.type}`}>{r.icon}</div>
                    <span className={`resource-card__badge resource-card__badge--${r.type}`}>
                      {r.type === 'whitepaper' ? 'White Paper' : r.type === 'casestudy' ? 'Case Study' : r.type === 'event' ? 'Event' : ''}
                    </span>
                  </div>
                  <div className="resource-card__body">
                    <h4 className="resource-card__title">{r.title}</h4>
                    <p className="resource-card__desc">{r.desc}</p>
                    <div className="resource-card__meta">
                      <span className="resource-card__date">{r.date}</span>
                      <a href="#" className="resource-card__link">{r.link}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
