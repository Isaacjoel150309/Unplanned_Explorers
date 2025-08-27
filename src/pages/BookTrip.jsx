import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BookTrip() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    travelers: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', { ...formData, destination });
    alert(`Trip booked to ${destination?.name || 'Unknown'}!`);
    navigate('/confirmation', {
      state: {
        destination,
        formData
      }
    });
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      animation: 'fadeSlideIn 0.8s ease-out',
      animationFillMode: 'forwards'
    }}>
      <h2 style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#333',
        textAlign: 'center'
      }}>
        Book Your Trip
      </h2>

      {destination && (
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#333' }}>{destination.name}</h3>
          <img
            src={destination.image}
            alt={destination.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
          <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#555' }}>{destination.description}</p>
          <p style={{ fontWeight: 'bold', color: '#f4a261', marginTop: '0.5rem' }}>{destination.price}</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          style={{
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <input
          type="number"
          name="travelers"
          min="1"
          value={formData.travelers}
          onChange={handleChange}
          required
          style={{
            padding: '0.6rem',
            borderRadius: '6px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <button
          type="submit"
          style={{
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            color: '#fff',
            border: 'none',
            padding: '0.7rem 1.2rem',
            borderRadius: '30px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
