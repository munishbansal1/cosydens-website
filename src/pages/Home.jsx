import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import './Home.css';

const featured = properties.slice(0, 3);

const services = [
  { icon: '🏠', title: 'Buy', desc: 'Browse properties for sale across Belfast, Lisburn, and the surrounding areas.', to: '/buy' },
  { icon: '💰', title: 'Sell', desc: 'Get the best value for your property with our local Northern Ireland experts.', to: '/sell' },
  { icon: '🔑', title: 'Rentals', desc: 'Find your perfect rental home in Belfast or Lisburn with flexible terms.', to: '/rentals' },
  { icon: '🏗️', title: 'Build', desc: 'Extensions, new builds and full developments across Co. Antrim and Co. Down.', to: '/build' },
];

const stats = [
  { value: '1,200+', label: 'Properties Listed' },
  { value: '850+', label: 'Happy Clients' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

const owners = [
  {
    name: 'Munish Bansal',
    role: 'Co-Owner & Director',
    bio: 'With over a decade of experience in Northern Ireland property, Munish leads the company vision and client strategy across the Greater Belfast area.',
    initials: 'MB',
  },
  {
    name: 'Leo Campbell',
    role: 'Co-Owner & Director',
    bio: 'Leo brings deep expertise in property development and construction across Co. Antrim and Co. Down, overseeing all build and renovation projects.',
    initials: 'LC',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <p className="hero-tag">Northern Ireland's Local Property Experts</p>
          <h1>Find Your Perfect Home<br />in Belfast &amp; Lisburn</h1>
          <p className="hero-sub">
            Buying, selling, renting or building — Cosydens is your trusted local property partner across Belfast, Lisburn, and the wider Co. Antrim and Co. Down area.
          </p>
          <div className="hero-actions">
            <Link to="/buy" className="btn-primary">Browse Properties</Link>
            <Link to="/contact" className="btn-outline hero-outline">Talk to an Agent</Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">End-to-end property services under one roof</p>
          <div className="services-grid">
            {services.map(({ icon, title, desc, to }) => (
              <Link to={to} key={title} className="service-card">
                <span className="service-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map(({ value, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <p className="section-subtitle">Handpicked listings across all categories</p>
          <div className="properties-grid">
            {featured.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
          <div className="featured-cta">
            <Link to="/buy" className="btn-outline">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Owners */}
      <section className="owners-section">
        <div className="container">
          <h2 className="section-title">Meet the Owners</h2>
          <p className="section-subtitle">The people behind Cosydens Limited</p>
          <div className="owners-grid">
            {owners.map(({ name, role, bio, initials }) => (
              <div key={name} className="owner-card">
                <div className="owner-avatar">{initials}</div>
                <h3>{name}</h3>
                <p className="owner-role">{role}</p>
                <p className="owner-bio">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Make Your Move?</h2>
          <p>Speak to our Belfast and Lisburn based team today — no obligation, just great local advice.</p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
