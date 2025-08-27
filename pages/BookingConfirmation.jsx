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
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', color: '#0077cc' }}>🎉 Booking Confirmed!</h2>
      <p>Thank you, <strong>{formData.name}</strong>. Your adventure to <strong>{destination.name}</strong> is officially booked.</p>

      <div style={{
        margin: '2rem auto',
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '500px',
        background: '#f9f9f9'
      }}>
        <img src={destination.image} alt={destination.name} style={{ width: '100%', borderRadius: '8px' }} />
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Travelers:</strong> {formData.travelers}</p>
        <p><strong>Total Price:</strong> ₹{totalPrice}</p>
      </div>

      <button onClick={() => navigate('/')} style={{
        background: '#0077cc',
        color: '#fff',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '1rem'
      }}>
        Back to Home
      </button>
    </div>
  );
}
