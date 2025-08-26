import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/destinations');
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar />

      <div style={{ height: '100%', overflowY: 'auto', paddingTop: '160px' }}>
        <Header />

        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            animation: 'fadeSlideIn 1s ease-out', // 👈 Apply animation
            animationFillMode: 'forwards'
          }}
        >
          <h2 style={{
            fontSize: '2.2rem',
            fontWeight: '600',
            marginBottom: '1rem',
            fontFamily: '"Bebas Neue", sans-serif',
            letterSpacing: '1px'
          }}>
            Welcome to Unplanned Explorers
          </h2>

          <p style={{
            fontSize: '1.1rem',
            fontStyle: 'italic',
            color: '#444',
            marginBottom: '2rem'
          }}>
            Your journey begins here.
          </p>

          <button
            onClick={handleExploreClick}
            style={{
              padding: '0.8rem 1.6rem',
              fontSize: '1rem',
              background: 'linear-gradient(to right, #00b4db, #0083b0)',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Start Exploring
          </button>

          <div style={{
            marginTop: '3rem',
            fontSize: '0.95rem',
            color: '#666'
          }}>
            <em>“Not all those who wander are lost.” — J.R.R. Tolkien</em>
          </div>
        </div>
      </div>
    </div>
  );
}
