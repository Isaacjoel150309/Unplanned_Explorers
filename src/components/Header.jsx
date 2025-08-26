import React from 'react';

export default function Header() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 900,
      textAlign: 'center',
      padding: '1rem 1rem',
      background: 'linear-gradient(to right, #00b4db, #0083b0)',
      color: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      borderBottomLeftRadius: '80px',
      borderBottomRightRadius: '0px'
    }}>
      <h1 style={{
        fontFamily: '"Bebas Neue", sans-serif',
        fontWeight: '400',
        fontSize: 'clamp(2rem, 8vw, 2.8rem)', // 👈 Responsive font size
        marginBottom: '0.1rem',
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }}>
        Unplanned Explorers
      </h1>
      <p style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 'clamp(0.85rem, 4vw, 1rem)', // 👈 Responsive font size
        fontStyle: 'italic',
        opacity: 0.9,
        maxWidth: '90%',
        margin: '0.2rem auto 0'
      }}>
        Where the Unexpected Becomes Unforgettable
      </p>
    </div>
  );
}
