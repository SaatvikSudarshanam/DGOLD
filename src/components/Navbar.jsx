import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { path: '/features', label: 'Features' },
  { path: '/who-its-for', label: "Who It's For" },
  { path: '/compare', label: 'Compare' },
  { path: '/modules', label: 'Modules' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/resources', label: 'Resources' },
  { path: '/case-study', label: 'Case Study' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo">
            <img src="/logo.png" alt="dGold Logo" className="navbar__logo-img" />
          </NavLink>

          <div className="navbar__links">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/request-demo" className="btn btn--primary btn--sm">
              Request Demo
            </NavLink>
          </div>

          <button
            className={`navbar__menu-btn ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
        <NavLink to="/request-demo" className="btn btn--primary" style={{ textAlign: 'center', marginTop: 8 }}>
          Request Demo
        </NavLink>
      </div>
    </>
  );
}
