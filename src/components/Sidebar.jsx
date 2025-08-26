import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  // Delay nav visibility to match transition
  useEffect(() => {
    if (isOpen) {
      setShowNav(true);
    } else {
      const timer = setTimeout(() => setShowNav(false), 600); // match transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(prev => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={toggleSidebar}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1100,
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          background: 'transparent',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <div style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}></div>
        <div style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}></div>
        <div style={{ width: '24px', height: '3px', background: '#333', borderRadius: '2px' }}></div>
      </div>

      {/* Sidebar Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: isOpen ? '150px' : '0px', // 👈 Overlay style
          background: '#ffffff',
          overflow: 'hidden',
          boxShadow: isOpen ? '2px 0 8px rgba(0,0,0,0.1)' : 'none',
          zIndex: 1000,
          padding: isOpen ? '2rem 1rem' : '0',
          transition: 'width 0.6s ease, padding 0.6s ease'
        }}
      >
        {/* Nav Wrapper */}
        <div
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            pointerEvents: isOpen ? 'auto' : 'none'
          }}
        >
          {showNav && (
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '4rem',
                fontFamily: "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
              }}
            >
              {[
                { path: '/', label: '  Home' },
                { path: '/destinations', label: '  Destinations' },
                { path: '/book', label: '  Book a Trip' },
                { path: '/gallery', label: '  Gallery' },
                { path: '/contact', label: '  Contact Us' }
              ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={closeSidebar} // 👈 Auto-close on click
                  style={{
                    textDecoration: 'none',
                    color: '#333',
                    fontSize: '1rem'
                  }}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
