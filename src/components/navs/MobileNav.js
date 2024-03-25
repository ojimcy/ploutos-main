import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'reactstrap';
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';
import PropTypes from 'prop-types';

import './MobileNav.css';

function MobileMenu({ isOpen }) {

  return (
    <div className={`navbar-card ${isOpen ? 'open' : ''}`}>
      <Nav className="ml-auto" navbar>
        {/* Nav Links */}
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/#presale">
          Tokenomics
        </Link>
        <Link className="nav-link" to="/#roadmap">
          Roadmap
        </Link>
        <Link className="nav-link" to="/assets/white-paper.pdf">
          White paper
        </Link>

        {/* Social Icons */}
        <div className="navbar-bottom">
          <div className="social-icons">
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              target="_blank"
              rel="noopener noreferrer"
            >
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
};

export default MobileMenu;
