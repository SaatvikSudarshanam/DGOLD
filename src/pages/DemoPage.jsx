import { useEffect, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import '../components/Footer.css';

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};

    const name = form.leadName.value;
    const email = form.leadEmail.value;
    const company = form.leadCompany.value;
    const role = form.leadRole.value;

    if (!name) newErrors.name = 'Please enter your name';
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Please enter a valid work email';
    if (!company) newErrors.company = 'Please enter your company';
    if (!role) newErrors.role = 'Please select your role';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); form.reset(); }, 4000);
    }
  };

  return (
    <div className="page-wrapper">
      <section className="lead-form" id="lead-form" style={{ paddingTop: 'calc(var(--nav-height) + var(--space-16))' }}>
        <div className="container">
          <ScrollReveal>
            <div className="lead-form__inner">
              <h2>Ready to <span className="text-gold">Master Your Data</span>?</h2>
              <p>Get started with a personalized demo. Our team will show you how dGold can transform your data landscape.</p>
              <form id="leadFormEl" noValidate onSubmit={handleSubmit}>
                <div className="lead-form__fields">
                  <div className={`form-field ${errors.name ? 'error' : ''}`}>
                    <input type="text" name="leadName" id="leadName" placeholder="Full Name *" required />
                    {errors.name && <div className="form-field__error">{errors.name}</div>}
                  </div>
                  <div className={`form-field ${errors.email ? 'error' : ''}`}>
                    <input type="email" name="leadEmail" id="leadEmail" placeholder="Work Email *" required />
                    {errors.email && <div className="form-field__error">{errors.email}</div>}
                  </div>
                  <div className={`form-field ${errors.company ? 'error' : ''}`}>
                    <input type="text" name="leadCompany" id="leadCompany" placeholder="Company *" required />
                    {errors.company && <div className="form-field__error">{errors.company}</div>}
                  </div>
                  <div className={`form-field ${errors.role ? 'error' : ''}`}>
                    <select name="leadRole" id="leadRole" required defaultValue="">
                      <option value="" disabled>Select Your Role *</option>
                      <option value="cto">CTO / CIO</option>
                      <option value="vp">VP of Data / Engineering</option>
                      <option value="director">Director / Manager</option>
                      <option value="architect">Data Architect</option>
                      <option value="analyst">Data Analyst</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.role && <div className="form-field__error">{errors.role}</div>}
                  </div>
                  <div className="form-field form-field--full">
                    <textarea name="leadMessage" id="leadMessage" placeholder="Tell us about your data challenges (optional)" rows="3"></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  style={{ width: '100%', ...(submitted ? { background: 'var(--color-green)' } : {}) }}
                  disabled={submitted}
                >
                  {submitted ? "✓ Thank You! We'll Be in Touch." : 'Request Your Demo →'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
