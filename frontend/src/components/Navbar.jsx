import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="grid-container navbar-wrapper">
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="navbar-logo">
          genlab.
        </a>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="nav-links">Solution</a>
          </li>
          <li className="nav-item">
            <a href="#specialists" onClick={(e) => { e.preventDefault(); scrollToSection('specialists'); }} className="nav-links">Platform</a>
          </li>
          <li className="nav-item">
            <a href="#growth" onClick={(e) => { e.preventDefault(); scrollToSection('growth'); }} className="nav-links">Company</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-links">Verify</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#sample-certificate" onClick={(e) => { e.preventDefault(); scrollToSection('sample-certificate'); }} className="explore-btn">Verify Certificate</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="contact-btn">START A PROJECT</a>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="#FFFFFF" /> : <Menu color="#FFFFFF" />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
