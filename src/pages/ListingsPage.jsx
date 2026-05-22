import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import './ListingsPage.css';

const config = {
  buy: {
    title: 'Properties for Sale',
    subtitle: 'Find your dream home from our curated selection across Belfast, Lisburn, and the surrounding Co. Antrim and Co. Down areas.',
    hero: 'bg-buy',
    badge: 'buy',
  },
  sell: {
    title: 'Sell Your Property',
    subtitle: 'Let our local Northern Ireland experts help you achieve the best price for your property in the Belfast and Lisburn market.',
    hero: 'bg-sell',
    badge: 'sell',
  },
  rentals: {
    title: 'Rental Properties',
    subtitle: 'Flexible rental options for individuals, couples, and families across Belfast, Lisburn, and the wider area.',
    hero: 'bg-rent',
    badge: 'rent',
  },
  build: {
    title: 'Build & Development',
    subtitle: 'From home extensions to full-scale developments — we design and build across Co. Antrim and Co. Down.',
    hero: 'bg-build',
    badge: 'build',
  },
};

export default function ListingsPage({ type }) {
  const { title, subtitle, hero } = config[type];
  const typeKey = type === 'rentals' ? 'rent' : type;
  const listings = properties.filter(p => p.type === typeKey);

  return (
    <div className="listings-page">
      <div className={`listings-hero ${hero}`}>
        <div className="container">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="container listings-body">
        <p className="listings-count">{listings.length} listings found</p>
        <div className="listings-grid">
          {listings.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>

        {type === 'sell' && (
          <div className="sell-cta">
            <h2>Want to list your property?</h2>
            <p>Our local agents will value your property and market it to buyers across Belfast, Lisburn, and beyond. Get a free valuation today.</p>
            <button className="btn-primary">Request Free Valuation</button>
          </div>
        )}

        {type === 'build' && (
          <div className="sell-cta">
            <h2>Have a project in mind?</h2>
            <p>Tell us about your vision — new build, extension, or renovation. We handle everything from planning permission with Lisburn & Castlereagh City Council or Belfast City Council through to final fit-out.</p>
            <button className="btn-primary">Discuss Your Project</button>
          </div>
        )}
      </div>
    </div>
  );
}
