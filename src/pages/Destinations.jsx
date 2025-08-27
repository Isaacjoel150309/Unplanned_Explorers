import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { destinations } from '/src/js/destinations.js'; // ✅ Updated import

export default function Destinations() {
  const navigate = useNavigate();
  const [destinationList, setDestinationList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleBook = (place) => {
    navigate('/book', { state: { destination: place } });
  };

  const handleExplore = (id) => {
    navigate(`/explore/${id}`);
  };

  const handleSeeMore = () => {
    navigate('/gallery');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDestinationList(destinations); // ✅ Using static data
      setLoading(false);
    }, 1500);
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
        Just a moment... we're warming up your dream destinations
      </p>
      <style>
        {`@keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }`}
      </style>
    </div>
  );

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontFamily: '"Bebas Neue", sans-serif',
        color: '#333'
      }}>
        Popular Destinations
      </h1>
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '2rem'
      }}>
        Handpicked places to spark your wanderlust — book your next escape today
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        flexGrow: 1
      }}>
        {destinationList.map((place, index) => (
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
              <h3 style={{
                marginBottom: '0.5rem',
                fontSize: '1.4rem',
                color: '#333',
                fontWeight: '600'
              }}>{place.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>{place.description}</p>
              {place.price && <p style={{
                fontWeight: 'bold',
                marginTop: '0.5rem',
                color: '#f4a261'
              }}>{place.price}</p>}
              <div style={{
                display: 'flex',
                gap: '1rem',
                marginTop: '1rem',
                justifyContent: 'center'
              }}>
                <button onClick={() => handleBook(place)} style={buttonStyle}>Book Now</button>
                <button onClick={() => handleExplore(place.id)} style={buttonStyle}>Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '2rem'
      }}>
        <button onClick={handleSeeMore} style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          See More Destinations
        </button>
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
