export default function WhyEvezas() {
  return (
    <section id="why-evezas" className="why-section">
      {/* Block 1: Image Left, Text Right */}
      <div className="container">
        <div className="feature-block">
          <div className="feature-block__visual">
            <div className="feature-block__geo feature-block__geo--tl" />
            <div className="feature-block__image-wrap">
              <img
                alt="Enterprise advisory team collaboration"
                src={`${import.meta.env.BASE_URL}1.jpg`}
                className="feature-block__image"
              />
            </div>
          </div>
          <div className="feature-block__content">
            <h2 className="feature-block__title">
              Partnering With Enterprises That Refuse to Stand Still
            </h2>
            <p className="feature-block__text">
              Evezas was founded on a single conviction: that the gap between strategy and execution is where most enterprises lose momentum. We bridge that gap with hands-on advisory, deep technical fluency, and a relentless focus on outcomes — not deliverables.
            </p>
            <p className="feature-block__text">
              From Fortune 500 boardrooms to high-growth startups navigating scale, our teams embed alongside yours to accelerate transformation at every level.
            </p>
          </div>
        </div>
      </div>

      {/* Block 2: Text Left, Image Right */}
      <div className="container">
        <div className="feature-block feature-block--reversed">
          <div className="feature-block__visual">
            <div className="feature-block__geo feature-block__geo--br" />
            <div className="feature-block__image-wrap">
              <img
                alt="Technology-driven enterprise solutions"
                src={`${import.meta.env.BASE_URL}2.webp`}
                className="feature-block__image"
              />
            </div>
          </div>
          <div className="feature-block__content">
            <h2 className="feature-block__title">
              The Engine Behind the World's Most Ambitious Transformations.
            </h2>
            <p className="feature-block__text">
              At Evezas, we're strategists, technologists, and operators on a mission to empower enterprises with the clarity, capability, and confidence to lead in their industries. With expertise spanning 14 service lines, we lead with insight, move with precision, and design strategies that place our clients at the forefront.
            </p>
            <p className="feature-block__text">
              Whether you need a fractional CXO to steer a critical initiative, an AI strategy to unlock data-driven growth, or a full-scale digital transformation — we have the depth and the drive.
            </p>
            <a href="#contact" className="btn btn--navy" style={{ marginTop: '1.5rem' }}>
              Start a Conversation
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
