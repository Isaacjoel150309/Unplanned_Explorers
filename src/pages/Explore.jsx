import React from 'react';
import { useParams } from 'react-router-dom';
import { locations } from '/src/js/locations.js';

export default function Explore() {
  const { id } = useParams();
  const location = locations.find(loc => loc.id === id);

  if (!location) return <p style={{ padding: '2rem' }}>Location not found.</p>;

  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#fdf6f0',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", sans-serif'
    }}>
      <h2 style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: '2.5rem',
        marginBottom: '1rem',
        color: '#333',
        textAlign: 'center'
      }}>
        {location.name}
      </h2>

      <img src={location.image} alt={location.name} style={{
        width: '100%',
        maxWidth: '700px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '2rem',
        objectFit: 'cover'
      }} />

      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.7',
        background: '#fff',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <p>{location.essay}</p>
      </div>
    </div>
  );
}
