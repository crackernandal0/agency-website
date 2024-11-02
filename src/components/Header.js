import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu toggle

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelect = (path) => {
    setSelected(path);
    setIsMenuOpen(false); // Close menu after selecting an option
  };

  return (
    <div className='rectangle'>
      <div className='frame'>
        <div className='clip-path-group'>
        <div className='group'>
              <div className='clip-path-group-1'>
                <div className='group-2'>
                  <div className='clip-path-group-3'>
                    <div className='group-4'>
                      <div className='rectangle-5' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* Logo or additional elements */}
        </div>
        <button className='menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`frame-6 ${isMenuOpen ? 'menu-open' : 'menu-closed'}`}>
          <Link
            to="/services"
            className={`frame-7 ${selected === '/services' ? 'selected' : ''}`}
            onClick={() => handleSelect('/services')}
          >
            <span className='services'>SERVICES</span>
          </Link>
          <Link
            to="/about-us"
            className={`about-us ${selected === '/about-us' ? 'selected' : ''}`}
            onClick={() => handleSelect('/about-us')}
          >
            ABOUT US
          </Link>
          <Link
            to="/projects"
            className={`proyects ${selected === '/projects' ? 'selected' : ''}`}
            onClick={() => handleSelect('/projects')}
          >
            PROYECTS
          </Link>
          <Link
            to="/contact-us"
            className={`contact-us ${selected === '/contact-us' ? 'selected' : ''}`}
            onClick={() => handleSelect('/contact-us')}
          >
            CONTACT US
          </Link>
        </div>
        <div className='group-8' />
      </div>
    </div>
  );
};

export default Header;
