import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Destinations() {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleBook = (place) => {
    navigate('/book', { state: { destination: place } });
  };

  useEffect(() => {
    fetch('/api/destinations.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ✅ Apply the dynamic return block here
  if (loading) return <p style={{ padding: '2rem' }}>Loading destinations...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Explore Destinations</h2>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {destinations.map((place, index) => (
          <div key={index} style={{
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            <img src={place.image} alt={place.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              {place.price && <p><strong>{place.price}</strong></p>}
              <button onClick={() => handleBook(place)} style={{
                background: '#0077cc',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
