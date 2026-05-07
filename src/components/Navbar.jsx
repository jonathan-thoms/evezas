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
    <nav
      id="main-nav"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 4px 30px rgba(11,25,41,0.08)',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo */}
          <a href="#home" id="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Evezas"
              style={{ height: '96px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '4px' }} id="nav-links-desktop">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  padding: '0.625rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.015em',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  color: '#1e3354',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#eef2f7';
                  e.target.style.color = '#0b1929';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#1e3354';
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              id="nav-cta"
              className="btn-nav btn-nav--solid"
              style={{ marginLeft: '1rem' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center"
            style={{
              width: '44px', height: '44px',
              borderRadius: '0.5rem',
              background: 'none', border: 'none', cursor: 'pointer',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px', height: '2px',
                    borderRadius: '2px',
                    backgroundColor: '#132340',
                    transition: 'all 0.3s',
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
      {mobileOpen && (
        <div
          className="md:hidden"
          id="nav-mobile-menu"
          style={{
            position: 'fixed', inset: 0, top: '80px',
            backgroundColor: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            paddingTop: '3rem', gap: '0.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: '1.125rem', fontWeight: 500, color: '#132340',
                padding: '0.875rem 2rem', borderRadius: '0.75rem',
                textDecoration: 'none', width: '80%', maxWidth: '320px', textAlign: 'center',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-nav btn-nav--solid"
            style={{ marginTop: '1rem', width: '80%', maxWidth: '320px', justifyContent: 'center' }}
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}
