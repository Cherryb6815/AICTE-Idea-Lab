function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="section-inner">
        <p className="eyebrow center" data-reveal>GET IN TOUCH</p>
        <h2 className="section-title center" data-reveal>Contact the IDEA Lab</h2>

        <div className="contact__grid">
          <div className="contact-card glass" data-reveal>
            <i className="fa-solid fa-location-dot" />
            <h3>Address</h3>
            <p>Poornima Group of Institutions,<br />ISI-2, RIICO Institutional Area,<br />Sitapura, Jaipur, Rajasthan 302022</p>
          </div>
          <div className="contact-card glass" data-reveal>
            <i className="fa-solid fa-phone" />
            <h3>Phone</h3>
            <p><a href="tel:+911412770300">+91 141 277 0300</a></p>
          </div>
          <div className="contact-card glass" data-reveal>
            <i className="fa-solid fa-envelope" />
            <h3>Email</h3>
            <p><a href="mailto:idealab@poornima.edu.in">idealab@poornima.edu.in</a></p>
          </div>
          <div className="contact-card glass" data-reveal>
            <i className="fa-brands fa-square-instagram" />
            <h3>Social</h3>
            <div className="contact-card__social">
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
              <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
              <a href="#" aria-label="Twitter / X"><i className="fa-brands fa-x-twitter" /></a>
            </div>
          </div>
        </div>

        <div className="contact__map glass" data-reveal>
          <iframe title="Poornima Group location map" src="https://www.google.com/maps?q=Poornima%20Group%20of%20Institutions%2C%20Jaipur&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
