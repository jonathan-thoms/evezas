import { useEffect, useRef } from 'react';

const svcIcons = {
  'Strategy & Management Advisory': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>),
  'ESG & Sustainability Advisory': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
  'Financial & Investment Services': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>),
  'Investment & New Business Venture Advisory & Partnerships': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
  'IT & Digital Transformation Services': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" /></svg>),
  'Engineering Solutions & Technology Development': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1M17.12 9.47l-5.1-5.1m0 0L6.72 9.68a3.75 3.75 0 000 5.3l5.1 5.1a3.75 3.75 0 005.3 0l5.1-5.1a3.75 3.75 0 000-5.3l-5.1-5.1a3.75 3.75 0 00-5.3 0z" /></svg>),
  'AI, Automation & Data Enablement': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>),
  'Cybersecurity & Risk Management': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
  'Emerging & Niche Technology Services': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
  'IT Staffing & Workforce Solutions': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H5.228m9.772 0a9.334 9.334 0 01-.786-3.07m-9.986 3.07A5.988 5.988 0 015 16.07m0 3.058V16.07m0 0a5.964 5.964 0 012.228-4.066 5.985 5.985 0 013.522-1.254m0 0a3 3 0 10-.55-5.968 3 3 0 00.55 5.968z" /></svg>),
  'Operations & Process Optimization': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>),
  'Marketing & Customer Experience Strategy': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.954.954 0 01-1.307-.378c-.546-1.012-.967-2.09-1.258-3.218m2.7-1.078c.688.06 1.386.09 2.09.09h.75a4.5 4.5 0 100-9h-.75c-.704 0-1.402.03-2.09.09m0 9.18a23.848 23.848 0 008.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 010 15.75m-17.918 0c-.146-.39-.282-.783-.408-1.178" /></svg>),
  'Industry-Specific Advisory Services': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" /></svg>),
  'Medical Services & Healthcare Advisory & Expansion': (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>),
};

const iconColors = {
  'Strategy & Advisory': 'card-icon card-icon--navy',
  'Technology & Innovation': 'card-icon card-icon--blue',
  'Operations & Talent': 'card-icon card-icon--slate',
  'Specialized Industries': 'card-icon card-icon--teal',
};

const categories = [
  {
    title: 'Technology & Innovation',
    subtitle: 'Cutting-edge solutions powering digital-first enterprises.',
    iconClass: 'category-icon category-icon--technology',
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0015.75 4.5h-9A2.25 2.25 0 004.5 6.75v10.5A2.25 2.25 0 006.75 19.5z" /></svg>),
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
    subtitle: 'Board-level insight and strategic direction for enterprise growth.',
    iconClass: 'category-icon category-icon--strategy',
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>),
    services: [
      { name: 'Strategy & Management Advisory', desc: 'Board-level strategic planning, market entry, and organizational transformation roadmaps.' },
      { name: 'ESG & Sustainability Advisory', desc: 'Embed sustainable practices into corporate DNA with measurable ESG frameworks.' },
      { name: 'Financial & Investment Services', desc: 'Capital strategy, M&A advisory, and financial modeling for growth-stage enterprises.' },
      { name: 'Investment & New Business Venture Advisory & Partnerships', desc: 'Identify, evaluate, and structure strategic partnerships and venture opportunities.' },
    ],
  },
  {
    title: 'Operations & Talent',
    subtitle: 'Optimizing people, processes, and performance at scale.',
    iconClass: 'category-icon category-icon--operations',
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
    services: [
      { name: 'IT Staffing & Workforce Solutions', desc: 'Talent acquisition, contractor augmentation, and workforce planning at scale.' },
      { name: 'Operations & Process Optimization', desc: 'Lean methodologies, supply chain redesign, and operational excellence programs.' },
      { name: 'Marketing & Customer Experience Strategy', desc: 'Brand positioning, CX journey mapping, and data-driven marketing frameworks.' },
    ],
  },
  {
    title: 'Specialized Industries',
    subtitle: 'Deep domain expertise for sector-specific transformation.',
    iconClass: 'category-icon category-icon--industries',
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>),
    services: [
      { name: 'Industry-Specific Advisory Services', desc: 'Sector-deep consulting for energy, telecom, BFSI, and public sector transformation.' },
      { name: 'Medical Services & Healthcare Advisory & Expansion', desc: 'Healthcare systems optimization, MedTech strategy, and expansion playbooks.' },
    ],
  },
];

/* Band backgrounds: Tech (blue) → Strategy (ivory) → Ops (stone) → Industries (sage) */
const bandStyles = [
  { bg: '#f0f4f9', border: '#2e74c0' },
  { bg: '#f8f7f4', border: '#2d4770' },
  { bg: '#f5f4f2', border: '#6b7a8d' },
  { bg: '#f2f6f4', border: '#3a5a8c' },
];

function ServiceCard({ service, categoryTitle }) {
  return (
    <div className="service-card" style={{ backgroundColor: '#ffffff' }}>
      <div className={iconColors[categoryTitle]}>{svcIcons[service.name]}</div>
      <h4>{service.name}</h4>
      <p>{service.desc}</p>
    </div>
  );
}

function CategoryBand({ category, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('animate-fade-in-up'); el.style.opacity = '1'; }
    }, { threshold: 0.08 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style = bandStyles[index];

  return (
    <section ref={ref} style={{ opacity: 0, width: '100%', position: 'relative', overflow: 'hidden', backgroundColor: style.bg, padding: '5rem 0' }}>
      {/* Gradient accent bar at top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, transparent 10%, ${style.border}44 30%, ${style.border} 50%, ${style.border}44 70%, transparent 90%)` }} />

      {/* Decorative corner circle */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '260px', height: '260px', borderRadius: '50%', background: `radial-gradient(circle, ${style.border}08, transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: `radial-gradient(circle, ${style.border}06, transparent 70%)`, pointerEvents: 'none' }} />

      {/* Subtle dot pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: `radial-gradient(${style.border}15 1px, transparent 1px)`, backgroundSize: '24px 24px', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
            <div className={category.iconClass}>{category.icon}</div>
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 700, color: '#0b1929', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            {category.title}
          </h3>
          <p style={{ fontSize: '1rem', color: '#8e9aaa', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            {category.subtitle}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.25rem', maxWidth: '1100px', margin: '0 auto' }}>
          {category.services.map((s) => (<ServiceCard key={s.name} service={s} categoryTitle={category.title} />))}
        </div>
      </div>
    </section>
  );
}

export default function Capabilities() {
  return (
    <div id="capabilities">
      <section style={{ backgroundColor: '#ffffff', paddingTop: '7rem', paddingBottom: '2rem' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-7rem', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #d9dee4, transparent)' }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', backgroundColor: '#eef2f7', border: '1px solid #d5dfe9', color: '#2d4770', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Our Capabilities
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0b1929', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            End-to-End Enterprise{' '}
            <span style={{ background: 'linear-gradient(90deg, #2d4770, #2e74c0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Solutions</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#8e9aaa', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
            14 integrated service lines organized across four practice areas, designed to address every dimension of enterprise transformation.
          </p>
        </div>
      </section>
      {categories.map((c, i) => (<CategoryBand key={c.title} category={c} index={i} />))}
      <section style={{ backgroundColor: bandStyles[3].bg, paddingBottom: '5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <a href="#contact" id="capabilities-cta" className="btn-navy">
            Discuss Your Transformation
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
