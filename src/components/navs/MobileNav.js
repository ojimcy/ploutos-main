import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import { FaInstagram, FaLinkedin, FaTelegram, FaTwitter } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './MobileNav.css';

function MobileMenu({ isOpen, toggleMobileMenu, scrollToSection }) {
  const closeMenu = () => {
    if (isOpen) {
      toggleMobileMenu(); // Close the mobile menu
    }
  };

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId);
    closeMenu(); // Close the mobile menu after scrolling
  };

  return (
    <div className={`navbar-card ${isOpen ? 'open' : ''}`}>
      <Nav className="ml-auto" navbar>
        {/* Nav Links */}
        <Link className="nav-link" to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/#tokenomics"
          onClick={() => handleScrollToSection('tokenomics')}
        >
          Tokenomics
        </Link>
        <Link
          className="nav-link"
          to="/#roadmap"
          onClick={() => handleScrollToSection('roadmap')}
        >
          Roadmap
        </Link>
        <a
          className="nav-link"
          href="/assets/white-paper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          White paper
        </a>

        {/* Social Icons */}
        <div className="navbar-bottom">
          <div className="social-icons">
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link to="#" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </Nav>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default MobileMenu;
