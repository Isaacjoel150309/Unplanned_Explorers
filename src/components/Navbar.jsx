import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      padding: '1rem',
      background: '#0077cc',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      fontWeight: 'bold'
    }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/destinations" style={{ color: '#fff', textDecoration: 'none' }}>Destinations</Link>
      <Link to="/book" style={{ color: '#fff', textDecoration: 'none' }}>Book a Trip</Link>
      <Link to="/gallery" style={{ color: '#fff', textDecoration: 'none' }}>Gallery</Link>
      <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</Link>
      
    </nav>
  );
};

export default Navbar;
