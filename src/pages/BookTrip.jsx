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
    <div style={{ padding: '2rem' }}>
      <h2>Book Your Trip</h2>
      {destination && (
        <div style={{ marginBottom: '1rem' }}>
          <h3>{destination.name}</h3>
          <img src={destination.image} alt={destination.name} style={{ width: '300px', borderRadius: '8px' }} />
          <p>{destination.description}</p>
          <p><strong>Price: {destination.price}</strong></p>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="travelers"
          min="1"
          value={formData.travelers}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{
          background: '#0077cc',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Confirm Booking
        </button>
      </form>
    </div>
  );
}