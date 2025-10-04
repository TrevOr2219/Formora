import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import PageDots from './components/PageDots';
import ScrollToTop from './components/ScrollToTop';
import { SpeedInsights } from "@vercel/speed-insights/react"

import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <PageDots />
      <SpeedInsights />
      <div className="app-container">
        <Navbar />
        <MobileNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
