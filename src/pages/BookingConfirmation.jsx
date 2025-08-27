import { useLocation, useNavigate } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination, formData } = location.state || {};

  if (!destination || !formData) {
    return <p style={{ padding: '2rem' }}>No booking data found. Please start from the Destinations page.</p>;
  }

  const totalPrice = parseInt(destination.price.replace(/[^\d]/g, '')) * formData.travelers;

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", sans-serif',
      animation: 'fadeSlideIn 0.8s ease-out',
      animationFillMode: 'forwards'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        fontFamily: '"Bebas Neue", sans-serif',
        color: '#333'
      }}>
        🎉 Booking Confirmed!
      </h2>

      <p style={{
        textAlign: 'center',
        fontSize: '1.2rem',
        color: '#444',
        marginBottom: '2rem'
      }}>
        Thank you, <strong>{formData.name}</strong>. Your adventure to <strong>{destination.name}</strong> is officially booked.
      </p>

      <div style={{
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '2rem',
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        <img src={destination.image} alt={destination.name} style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1.5rem'
        }} />

        <div style={{ fontSize: '1rem', color: '#555', lineHeight: '1.6' }}>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Travelers:</strong> {formData.travelers}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice}</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={() => navigate('/')} style={{
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontSize: '1rem'
        }}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
