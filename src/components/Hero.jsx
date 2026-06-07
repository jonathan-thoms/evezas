export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid">
        {/* Left column — Text content */}
        <div className="container">
          <div className="hero__content">

            <h1 className="hero__headline">
              Accelerate Your<br />
              <span className="hero__headline-accent">
                Digital Transformation
              </span>
            </h1>

            <p className="hero__subtitle">
              Evezas empowers forward-thinking enterprises with strategic advisory,
              cutting-edge technology solutions, and operational excellence to thrive
              in an era of constant disruption.
            </p>

            <div className="hero__ctas">
              <a href="#capabilities" id="hero-cta-primary" className="btn btn--primary">
                Explore Our Capabilities
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" id="hero-cta-secondary" className="btn btn--secondary">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Right column — Image + Geometric accent */}
        <div className="hero__visual">
          <img
            src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
            alt="Enterprise transformation"
            className="hero__image"
          />
          <div className="hero__image-overlay" />
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="hero__stats">
        <div className="container">
          <div className="hero__stats-grid">
            {[
              { value: '200+', label: 'Enterprise Clients' },
              { value: '14', label: 'Service Lines' },
              { value: '50+', label: 'Industry Experts' },
              { value: '98%', label: 'Client Retention' },
            ].map((stat) => (
              <div key={stat.label} className="hero__stat">
                <div className="hero__stat-value">{stat.value}</div>
                <div className="hero__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-dot-wrap">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  );
}
