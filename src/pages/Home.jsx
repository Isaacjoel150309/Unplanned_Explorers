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
    <div style={{
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundColor: '#fdf6f0',
      position: 'relative'
    }}>
      <Sidebar />

      <div style={{
        height: '100%',
        overflowY: 'auto',
        paddingTop: '160px',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        boxSizing: 'border-box',
        width: '100%'
      }}>
        <Header />

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          animation: 'fadeSlideIn 1s ease-out',
          animationFillMode: 'forwards'
        }}>
          <h2 style={{
            fontSize: '2.4rem',
            fontWeight: '600',
            marginBottom: '1rem',
            fontFamily: '"Bebas Neue", sans-serif',
            letterSpacing: '1px',
            color: '#333'
          }}>
            Welcome to Unplanned Explorers
          </h2>

          <p style={{
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: '#555',
            marginBottom: '2rem'
          }}>
            Your journey begins here.
          </p>

          <button
            onClick={handleExploreClick}
            style={{
              padding: '0.8rem 1.6rem',
              fontSize: '1rem',
              background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
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
            Start Exploring
          </button>
        </div>
      </div>
    </div>
  );
}
