export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(6,14,24,0.82) 0%, rgba(19,35,64,0.7) 40%, rgba(30,51,84,0.6) 70%, rgba(45,71,112,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              marginBottom: '1.75rem',
            }}
          >
            Accelerate Your<br />
            <span
              style={{
                background: 'linear-gradient(90deg, #4a90d9, #88bceb, #4a90d9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Digital Transformation
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '640px',
              margin: '0 auto 3rem',
              lineHeight: 1.7,
            }}
          >
            Evezas empowers forward-thinking enterprises with strategic advisory,
            cutting-edge technology solutions, and operational excellence to thrive
            in an era of constant disruption.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <a href="#capabilities" id="hero-cta-primary" className="btn-primary">
              Explore Our Capabilities
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" id="hero-cta-secondary" className="btn-secondary">
              Schedule a Consultation
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              marginTop: '5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
              maxWidth: '700px',
              margin: '5rem auto 0',
            }}
            className="max-sm:!grid-cols-2"
          >
            {[
              { value: '200+', label: 'Enterprise Clients' },
              { value: '14', label: 'Service Lines' },
              { value: '50+', label: 'Industry Experts' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.03em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to white */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '160px',
          background: 'linear-gradient(to top, #ffffffff, transparent)',
        }}
      />

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem', left: '50%',
          transform: 'translateX(-50%)',
        }}
        className="animate-bounce"
      >
        <div
          style={{
            width: '28px', height: '44px',
            borderRadius: '9999px',
            border: '2px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <div
            style={{
              width: '6px', height: '14px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255,255,255,0.5)',
            }}
            className="animate-pulse"
          />
        </div>
      </div>
    </section>
  );
}
