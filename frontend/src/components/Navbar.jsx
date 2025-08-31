import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";


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
          <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
<Link to="/our-work" className="navbar-link" onClick={closeMenu}>Our Work</Link>
<Link to="/resources" className="navbar-link" onClick={closeMenu}>Resources</Link>
<Link to="/my-rights" className="navbar-link" onClick={closeMenu}>My Rights</Link>
<Link to="/safety-tips" className="navbar-link" onClick={closeMenu}>Safety Tips</Link>
<Link to="/find-help" className="navbar-link" onClick={closeMenu}>Find Help</Link>

        </div>

        {/* Report Incident Button */}
        <div className="navbar-actions">
  <Link to="/report-incident">
    <button className="report-btn">Report Incident</button>
  </Link>
</div>


        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
  <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
  <Link to="/our-work" className="mobile-link" onClick={closeMenu}>Our Work</Link>
  <Link to="/resources" className="mobile-link" onClick={closeMenu}>Resources</Link>
  <Link to="/my-rights" className="mobile-link" onClick={closeMenu}>My Rights</Link>
  <Link to="/safety-tips" className="mobile-link" onClick={closeMenu}>Safety Tips</Link>
  <Link to="/find-help" className="mobile-link" onClick={closeMenu}>Find Help</Link>

  <Link to="/report-incident" onClick={closeMenu}>
    <button className="mobile-report-btn">Report Incident</button>
  </Link>
</div>

    </nav>
  );
};

export default Navbar;