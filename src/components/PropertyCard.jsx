import './PropertyCard.css';

export default function PropertyCard({ property }) {
  const { title, location, price, beds, baths, area, type, image } = property;

  const badgeClass = {
    buy: 'badge-buy',
    sell: 'badge-sell',
    rent: 'badge-rent',
    build: 'badge-build',
  }[type] || 'badge-buy';

  return (
    <div className="property-card">
      <div className="property-img">
        <img src={image} alt={title} />
        <span className={`badge ${badgeClass}`}>{type}</span>
      </div>
      <div className="property-body">
        <h3>{title}</h3>
        <p className="property-location">📍 {location}</p>
        <p className="property-price">{price}</p>
        {type !== 'build' && (
          <div className="property-meta">
            <span>🛏 {beds} Beds</span>
            <span>🚿 {baths} Baths</span>
            <span>📐 {area}</span>
          </div>
        )}
        <button className="btn-primary property-btn">View Details</button>
      </div>
    </div>
  );
}
