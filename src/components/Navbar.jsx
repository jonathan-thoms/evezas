import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav id="main-nav" className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#home" id="nav-logo" className="navbar__logo">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Evezas"
              className="navbar__logo-img"
            />
          </a>

          {/* Desktop Links */}
          <div className="navbar__links" id="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="navbar__link">
                {link.label}
              </a>
            ))}
            <a href="#contact" id="nav-cta" className="btn btn--nav btn--nav-solid navbar__cta">
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar__hamburger"
            aria-label="Toggle menu"
          >
            <div className="navbar__hamburger-lines">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="navbar__hamburger-line"
                  style={{
                    transform: mobileOpen
                      ? i === 0 ? 'rotate(45deg) translateY(7px)' : i === 2 ? 'rotate(-45deg) translateY(-7px)' : 'scaleX(0)'
                      : 'none',
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`navbar__mobile-menu${mobileOpen ? ' is-open' : ''}`}
        id="nav-mobile-menu"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="navbar__mobile-link"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMobileOpen(false)}
          className="btn btn--nav btn--nav-solid navbar__mobile-cta"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
