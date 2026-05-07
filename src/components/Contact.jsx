export default function Contact() {
  return (
    <section id="contact" style={{ position: 'relative', backgroundColor: '#0b1929', padding: '6rem 0', overflow: 'hidden' }}>
      {/* Decorative Background Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(46,116,192,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(45,71,112,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', borderRadius: '9999px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a0b3c6', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Get in Touch
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
            Start Your Enterprise <span style={{ color: '#4a90d9' }}>Transformation</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#8e9aaa', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
            Connect with our advisory team to discuss how Evezas can accelerate your digital strategy and operational goals.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Contact Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', backgroundColor: 'rgba(74,144,217,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.25rem' }}>Email Us</h4>
                  <p style={{ color: '#8e9aaa', fontSize: '0.9rem' }}>info@evezas.com</p>
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', backgroundColor: 'rgba(74,144,217,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a90d9' }}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.25rem' }}>Global Operations</h4>
                  <p style={{ color: '#8e9aaa', fontSize: '0.9rem' }}>Enterprise Advisory Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0b1929', marginBottom: '1.5rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#2d4770', marginBottom: '0.5rem' }}>First Name</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #d5dfe9', backgroundColor: '#f8f9fb', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#4a90d9'} onBlur={(e) => e.target.style.borderColor = '#d5dfe9'} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#2d4770', marginBottom: '0.5rem' }}>Last Name</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #d5dfe9', backgroundColor: '#f8f9fb', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#4a90d9'} onBlur={(e) => e.target.style.borderColor = '#d5dfe9'} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#2d4770', marginBottom: '0.5rem' }}>Work Email</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #d5dfe9', backgroundColor: '#f8f9fb', outline: 'none', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#4a90d9'} onBlur={(e) => e.target.style.borderColor = '#d5dfe9'} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#2d4770', marginBottom: '0.5rem' }}>How can we help?</label>
                <textarea rows="4" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '0.5rem', border: '1px solid #d5dfe9', backgroundColor: '#f8f9fb', outline: 'none', resize: 'vertical', transition: 'border-color 0.2s' }} onFocus={(e) => e.target.style.borderColor = '#4a90d9'} onBlur={(e) => e.target.style.borderColor = '#d5dfe9'}></textarea>
              </div>

              <button type="submit" className="btn-navy" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                Submit Inquiry
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
