import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Minning from './pages/Minning';
import Consulting from './pages/Consulting';
import IT from './pages/IT';
import Contactus from './pages/Contactus';
import ServiceSections from './pages/ServiceSections';
import AboutUs from './pages/Aboutus';
import Electromachanical from './pages/Electromachanical';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minning" element={<Minning />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/it" element={<IT />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/services" element={<ServiceSections />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/electro-mechanics" element={<Electromachanical />} />


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
