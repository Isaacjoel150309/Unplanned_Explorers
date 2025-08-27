import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { locations } from '/src/js/locations.js';

export default function Gallery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleBook = (location) => {
    navigate('/book', { state: { destination: location } });
  };

  const handleExplore = (id) => {
    navigate(`/explore/${id}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulated loading delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div style={{
      padding: '4rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Segoe UI", sans-serif'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '6px solid #ffe0c1',
        borderTop: '6px solid #ff7e5f',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '1.5rem'
      }} />
      <p style={{
        fontSize: '1.2rem',
        color: '#333',
        textAlign: 'center'
      }}>
        Just a moment... your travel gallery is coming to life
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      animation: 'fadeSlideIn 0.8s ease-out',
      animationFillMode: 'forwards',
      fontFamily: '"Segoe UI", sans-serif'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        fontFamily: '"Bebas Neue", sans-serif',
        color: '#333'
      }}>
        Travel Gallery
      </h2>
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '2rem'
      }}>
        Discover stunning destinations and start your journey with a click
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {locations.map(loc => (
          <div key={loc.id} style={{
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
            <img src={loc.image} alt={loc.name} style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{
                marginBottom: '0.5rem',
                fontSize: '1.4rem',
                color: '#333',
                fontWeight: '600'
              }}>{loc.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{loc.description}</p>
              <p style={{ fontWeight: 'bold', color: '#f4a261' }}>{loc.price}</p>
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem',
                justifyContent: 'center'
              }}>
                <button onClick={() => handleBook(loc)} style={buttonStyle}>Book Now</button>
                <button onClick={() => handleExplore(loc.id)} style={buttonStyle}>Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
  color: '#fff',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'transform 0.3s ease'
};
buttonStyle.onMouseOver = e => e.currentTarget.style.transform = 'scale(1.10)';
buttonStyle.onMouseOut = e => e.currentTarget.style.transform = 'scale(1)';