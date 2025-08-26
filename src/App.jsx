import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import BookTrip from './pages/BookTrip';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Expandable Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/book" element={<BookTrip />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
