export default function Contact() {
  return (
    <section id="contact" className="contact section">
      {/* Decorative Background Elements */}
      <div className="contact__orb--tl" />
      <div className="contact__orb--br" />
      <div className="contact__separator" />

      <div className="container contact__body">
        <div className="section-header">
          <div className="section-badge section-badge--dark">
            Get in Touch
          </div>
          <h2 className="section-title section-title--light">
            Start Your Enterprise <span className="accent-text">Transformation</span>
          </h2>
          <p className="section-subtitle">
            Connect with our advisory team to discuss how Evezas can accelerate your digital strategy and operational goals.
          </p>
        </div>

        <div className="contact__grid">
          {/* Contact Information */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="contact-info-card__inner">
                <div className="contact-info-card__icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-card__title">Email Us</h4>
                  <p className="contact-info-card__text">info@evezas.com</p>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-card__inner">
                <div className="contact-info-card__icon">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="contact-info-card__title">Global Operations</h4>
                  <p className="contact-info-card__text">Enterprise Advisory Services</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrap">
            <h3 className="contact-form-wrap__title">Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact-form__row">
                <div>
                  <label className="contact-form__label">First Name</label>
                  <input type="text" className="contact-form__input" />
                </div>
                <div>
                  <label className="contact-form__label">Last Name</label>
                  <input type="text" className="contact-form__input" />
                </div>
              </div>

              <div>
                <label className="contact-form__label">Work Email</label>
                <input type="email" className="contact-form__input" />
              </div>

              <div>
                <label className="contact-form__label">How can we help?</label>
                <textarea rows="4" className="contact-form__textarea"></textarea>
              </div>

              <button type="submit" className="btn btn--navy btn--full-width contact-form__submit">
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
