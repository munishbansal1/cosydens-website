import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-cosy">Cosy</span><span className="logo-dens">dens</span>
          <span className="logo-ltd"> Limited</span>
          <p>Northern Ireland's trusted property partner — serving Belfast, Lisburn, and the surrounding areas.</p>
          <p className="footer-owners">Owned by Munish Bansal &amp; Leo Campbell</p>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/buy">Buy Property</Link></li>
            <li><Link to="/sell">Sell Property</Link></li>
            <li><Link to="/rentals">Rentals</Link></li>
            <li><Link to="/build">Build</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📧 cosydensltd@gmail.com</p>
          <p>📞 07909 763781</p>
          <p>📍 39 Llewellyn Avenue, Lisburn</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cosydens Limited. All rights reserved.</p>
      </div>
    </footer>
  );
}
