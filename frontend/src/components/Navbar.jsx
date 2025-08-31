import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
   <nav className="navbar">
  <div className="navbar-container">
    {/* Logo */}
    <div className="navbar-logo">
      <img 
        src={logo} 
        alt="NariShaktiConnect Logo" 
        className="logo-image"
      />
      <span className="logo-text"></span>
    </div>

        {/* Desktop Navigation Links */}
        <div className="navbar-menu">
          <a href="#home" className="navbar-link" onClick={closeMenu}>Home</a>
          <a href="#our-work" className="navbar-link" onClick={closeMenu}>Our Work</a>
          <a href="#resources" className="navbar-link" onClick={closeMenu}>Resources</a>
          <a href="#my-rights" className="navbar-link" onClick={closeMenu}>My Rights</a>
          <a href="#safety-tips" className="navbar-link" onClick={closeMenu}>Safety Tips</a>
          <a href="#find-help" className="navbar-link" onClick={closeMenu}>Find Help</a>
        </div>

        {/* Report Incident Button */}
        <div className="navbar-actions">
          <button className="report-btn">Report Incident</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <a href="#home" className="mobile-link" onClick={closeMenu}>Home</a>
        <a href="#our-work" className="mobile-link" onClick={closeMenu}>Our Work</a>
        <a href="#resources" className="mobile-link" onClick={closeMenu}>Resources</a>
        <a href="#my-rights" className="mobile-link" onClick={closeMenu}>My Rights</a>
        <a href="#safety-tips" className="mobile-link" onClick={closeMenu}>Safety Tips</a>
        <a href="#find-help" className="mobile-link" onClick={closeMenu}>Find Help</a>
        <button className="mobile-report-btn" onClick={closeMenu}>Report Incident</button>
      </div>
    </nav>
  );
};

export default Navbar;