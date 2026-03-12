import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    if (input.value && input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setSubscribed(true);
      setTimeout(() => { setSubscribed(false); input.value = ''; }, 3000);
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="https://www.amurta.com/" target="_blank" rel="noopener noreferrer" className="navbar__logo">
              <img src="/Amurta.png" alt="Amurta" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">dGold — a product by amurta. Trusted master data simplifAIed. Your single source of truth with built-in intelligence.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4>Platform</h4>
            <div className="footer__links">
              <Link to="/features" className="footer__link">Features</Link>
              <Link to="/modules" className="footer__link">Modules</Link>
              <Link to="/compare" className="footer__link">Compare</Link>
              <Link to="/pricing" className="footer__link">Pricing</Link>
            </div>
          </div>

          <div className="footer__col">
            <h4>Resources</h4>
            <div className="footer__links">
              <Link to="/resources" className="footer__link">White Papers</Link>
              <Link to="/case-study" className="footer__link">Case Studies</Link>
              <Link to="/resources" className="footer__link">Webinars</Link>
              <Link to="/resources" className="footer__link">Documentation</Link>
            </div>
          </div>

          <div className="footer__col">
            <h4>Stay Updated</h4>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
              Get the latest MDM insights and product updates delivered to your inbox.
            </p>
            <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" className={`btn btn--primary btn--sm`} style={subscribed ? { background: 'var(--color-green)' } : {}}>
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </button>
            </form>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                +1 888 840 0098
              </div>
              <div className="footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                sales@amurta.com
              </div>
              <div className="footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                www.amurta.com
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">Copyright © 2026 dgold.ai - All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}
