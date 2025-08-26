import React from 'react';

export default function Header() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw', // ✅ Fix 2
      zIndex: 900,
      textAlign: 'center',
      padding: '1rem 1rem',
      background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      borderBottomLeftRadius: '80px',
      borderBottomRightRadius: '0px'
    }}>
      <h1 style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontWeight: '400',
        fontSize: 'clamp(2rem, 8vw, 2.8rem)',
        marginBottom: '0.1rem',
        letterSpacing: '12px',
        textTransform: 'uppercase'
      }}>
        Unplanned Explorers
      </h1>
      <p style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 'clamp(0.85rem, 4vw, 1rem)',
        fontStyle: 'italic',
        opacity: 0.9,
        maxWidth: '90%',
        letterSpacing: '3.5px',
        margin: '0.2rem auto 0'
      }}>
        Where the Unexpected Becomes Unforgettable
      </p>
    </div>
  );
}
