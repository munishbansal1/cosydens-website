import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Our Belfast and Lisburn based team are ready to help with any property enquiry.</p>
        </div>
      </div>

      <div className="container contact-body">
        <div className="contact-grid">
          <div className="contact-form-wrap">
            <h2>Send Us a Message</h2>
            <form className="contact-form" onSubmit={e => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="John" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Smith" />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+44 7700 000000" />
              </div>
              <div className="form-group">
                <label>I'm interested in</label>
                <select>
                  <option>Buying a property</option>
                  <option>Selling a property</option>
                  <option>Renting a property</option>
                  <option>Build / Development</option>
                  <option>General enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Tell us about your requirements..." />
              </div>
              <button type="submit" className="btn-primary contact-submit">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div>
                <h4>Office Address</h4>
                <p>39 Llewellyn Avenue, Lisburn, Northern Ireland</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>07909 763781</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>cosydensltd@gmail.com</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🕐</span>
              <div>
                <h4>Opening Hours</h4>
                <p>Mon – Fri: 9am – 6pm<br />Saturday: 10am – 4pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
