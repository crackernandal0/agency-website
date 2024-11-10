import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa6";
// import { FaTiktok } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";

import group from "../assets/images/Group 111.png";

import "./Header.css";

import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const handleSelect = (path) => {
    setSelected(path);
    setIsMenuOpen(false); // Close menu after selecting an option
  };

  return (
    <div className="rectangle">
      <div className="frame">
        <div className="clip-path-group">
          <div className="group">
            <div className="clip-path-group-1">
              <div className="group-2">
                <div className="clip-path-group-3">
                  <div className="group-4">
                    <Link to="/" onClick={() => handleSelect("")}>
                      <div className="rectangle-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo or additional elements */}
        </div>
        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`frame-6 ${isMenuOpen ? "menu-open" : "menu-closed"}`}>
          <img
            className="header-image"
            style={{ position: "absolute", right: "-80px", top: "55px" }}
            src={group}
            alt=""
          />
          <img
            className="header-image-1"
            style={{ position: "absolute", left: "-80px", bottom: "100px" }}
            src={group}
            alt=""
          />
          <Link
            to="/services"
            className={`frame-7 ${selected === "/services" ? "selected" : ""}`}
            onClick={() => handleSelect("/services")}
          >
            <span className="services">SERVICES</span>
          </Link>
          <Link
            to="/about-us"
            className={`about-us ${selected === "/about-us" ? "selected" : ""}`}
            onClick={() => handleSelect("/about-us")}
          >
            ABOUT US
          </Link>
          {/* <Link
            to="/"
            className={` social ${selected === '/' ? 'selected' : ''}`}
            onClick={() => handleSelect('/')}
            style={{display:'none'}}
          >
             <div className="flex social-media space-x-4">
        <a href="#instagram" className="text-white text-xl"><FaInstagram /></a>
        <a href="#instagram" className="text-white text-xl"><FaTiktok /></a>
        <a href="#linkedin" className="text-white text-xl"><FaLinkedinIn /></a>
      </div>
          </Link> */}
          {/* <Link
            to="/projects"
            className={`proyects ${selected === '/projects' ? 'selected' : ''}`}
            onClick={() => handleSelect('/projects')}
          >
            PROYECTS
          </Link> */}
          <Link
            to="/contact-us"
            className={`contact-us ${
              selected === "/contact-us" ? "selected" : ""
            }`}
            onClick={() => handleSelect("/contact-us")}
          >
            CONTACT US
          </Link>
        </div>
        <div className="group-8" />
      </div>
    </div>
  );
};

export default Header;
