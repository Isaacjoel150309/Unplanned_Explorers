import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thanks for reaching out! We’ll get back to you soon 🌞');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", sans-serif',
      animation: 'fadeSlideIn 0.8s ease-out',
      animationFillMode: 'forwards'
    }}>
      <h1 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        fontFamily: '"Bebas Neue", sans-serif',
        color: '#333'
      }}>
        Get in Touch
      </h1>
      <p style={{
        textAlign: 'center',
        fontSize: '1.1rem',
        color: '#666',
        marginBottom: '2rem'
      }}>
        Questions, feedback......? We’d love to hear from you!
      </p>

      <form onSubmit={handleSubmit} style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
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
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            resize: 'vertical'
          }}
        />
        <button type="submit" style={{
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
          Send Message
        </button>
      </form>
    </div>
  );
}
