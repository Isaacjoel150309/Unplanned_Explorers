import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import BookTrip from './pages/BookTrip';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import BookingConfirmation from './pages/BookingConfirmation';

function App() {
  return (
    <><Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destinations" element={<Destinations />} />
        <Route path="/book" element={<BookTrip />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
    </Routes>
    </>
  );
}

export default App;
