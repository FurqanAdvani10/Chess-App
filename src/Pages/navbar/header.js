import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaSearch, FaBars } from 'react-icons/fa';
import './header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <div className="navbar-logo">
          <img src='https://www.chesshouse.com/cdn/shop/files/chesshouse-full-logo-white_8084e40a-89b2-4281-bba3-6093cfdae545.png?v=1614296791&width=450' alt="Logo" />
        </div>
        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          <li className="nav-item"><a href="#home">Home</a></li>
          <li className="nav-item"><a href="#product">Product</a></li>
          <li className="nav-item"><a href="#feature">Feature</a></li>
          <li className="nav-item"><a href="#vision">Vision</a></li>
          <li className="nav-item"><a href="#about">About</a></li>
        </ul>
        <div className="navbar-icons">
          <FaSearch className="icon" /> |
          <FaEnvelope className="icon" />
          <span className="contact-number">+123 456 7890</span>
        </div>
        <FaBars className="menu-icon" onClick={handleMenuClick} />
      </div>
    </nav>
  );
}

export default Header;
