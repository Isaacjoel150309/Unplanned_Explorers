// components/DestinationCard.jsx
function DestinationCard({ title, image, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default DestinationCard;
