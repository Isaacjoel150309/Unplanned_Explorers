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

  if (loading) return <p style={{ padding: '2rem' }}>Loading destinations...</p>;
  if (error) return <p style={{ padding: '2rem', color: 'red' }}>Error: {error}</p>;

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0', // 🌅 Sunset background
      minHeight: '100vh',
      animation: 'fadeSlideIn 0.8s ease-out',
      animationFillMode: 'forwards'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '2rem',
        fontFamily: '"Bebas Neue", sans-serif',
        color: '#333'
      }}>
        Explore Destinations
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {destinations.map((place, index) => (
          <div key={index} style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img src={place.image} alt={place.name} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem', color: '#333' }}>{place.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{place.description}</p>
              {place.price && <p style={{ fontWeight: 'bold', marginTop: '0.5rem', color: '#f4a261' }}>{place.price}</p>}
              <button onClick={() => handleBook(place)} style={{
                marginTop: '1rem',
                padding: '0.6rem 1.2rem',
                background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // 🌅 Sunset button
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
