import { useState } from 'react';

const categories = [
  {
    title: 'Technology & Innovation',
    subtitle: 'Cutting-edge solutions powering digital-first enterprises. From cloud migration to AI-driven automation, we architect the technology backbone your enterprise needs to compete and scale.',
    services: [
      { name: 'IT & Digital Transformation Services', desc: 'End-to-end cloud migration, ERP modernization, and digital-first architecture.' },
      { name: 'Engineering Solutions & Technology Development', desc: 'Custom software engineering, platform development, and technical architecture.' },
      { name: 'AI, Automation & Data Enablement', desc: 'Machine learning pipelines, intelligent automation, and enterprise data strategy.' },
      { name: 'Cybersecurity & Risk Management', desc: 'Threat assessment, compliance frameworks, and zero-trust security architecture.' },
      { name: 'Emerging & Niche Technology Services', desc: 'Blockchain, IoT ecosystems, Fractional CXO services, and frontier tech adoption.' },
    ],
  },
  {
    title: 'Strategy & Advisory',
    subtitle: 'Board-level insight and strategic direction for enterprise growth. We partner with leadership teams to design transformation roadmaps that align vision with measurable outcomes.',
    services: [
      { name: 'Strategy & Management Advisory', desc: 'Board-level strategic planning, market entry, and organizational transformation roadmaps.' },
      { name: 'ESG & Sustainability Advisory', desc: 'Embed sustainable practices into corporate DNA with measurable ESG frameworks.' },
      { name: 'Financial & Investment Services', desc: 'Capital strategy, M&A advisory, and financial modeling for growth-stage enterprises.' },
      { name: 'Investment & New Business Venture Advisory & Partnerships', desc: 'Identify, evaluate, and structure strategic partnerships and venture opportunities.' },
    ],
  },
  {
    title: 'Operations & Talent',
    subtitle: 'Optimizing people, processes, and performance at scale. We help enterprises build lean, agile operations and secure the specialized talent needed to execute on ambitious goals.',
    services: [
      { name: 'IT Staffing & Workforce Solutions', desc: 'Talent acquisition, contractor augmentation, and workforce planning at scale.' },
      { name: 'Operations & Process Optimization', desc: 'Lean methodologies, supply chain redesign, and operational excellence programs.' },
      { name: 'Marketing & Customer Experience Strategy', desc: 'Brand positioning, CX journey mapping, and data-driven marketing frameworks.' },
    ],
  },
  {
    title: 'Specialized Industries',
    subtitle: 'Deep domain expertise for sector-specific transformation. Our industry-embedded teams understand the regulatory, operational, and market nuances that generic consultancies miss.',
    services: [
      { name: 'Industry-Specific Advisory Services', desc: 'Sector-deep consulting for energy, telecom, BFSI, and public sector transformation.' },
      { name: 'Medical Services & Healthcare Advisory & Expansion', desc: 'Healthcare systems optimization, MedTech strategy, and expansion playbooks.' },
    ],
  },
];

function AccordionPanel({ category, index, isOpen, onToggle }) {
  return (
    <div className={`accordion-panel accordion-panel--${index}${isOpen ? ' is-open' : ''}`}>
      <button
        className="accordion-panel__header"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="accordion-panel__header-content">
          <h3 className="accordion-panel__title">{category.title}</h3>
          <p className="accordion-panel__subtitle">{category.subtitle}</p>
        </div>
        <div className="accordion-panel__chevron">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div className="accordion-panel__body">
        <div className="accordion-panel__services">
          {category.services.map((service) => (
            <div key={service.name} className="accordion-service">
              <div className="accordion-service__header">
                <h4 className="accordion-service__name">{service.name}</h4>
                <svg className="accordion-service__arrow" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="accordion-service__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div id="capabilities">
      <section className="capabilities-intro">
        <div className="capabilities-intro__divider" />
        <div className="container section-header">
          <h2 className="section-title section-title--dark">
            End-to-End Enterprise{' '}
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-subtitle">
            14 integrated service lines organized across four practice areas, designed to address every dimension of enterprise transformation.
          </p>
        </div>
      </section>

      <section className="accordion-section">
        <div className="container">
          <div className="accordion">
            {categories.map((cat, i) => (
              <AccordionPanel
                key={cat.title}
                category={cat}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
