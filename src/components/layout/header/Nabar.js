import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { scrollSpy } from 'react-scroll';
import { Container, Nav, Navbar } from 'reactstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileMenu from '../../navs/MobileNav';

import logo from '../../../assets/images/logo.png';

function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTableMenuOpen, setIsTableMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width > 1024);
      setIsTablet(width <= 1024 && width > 768);
      setIsMobile(width <= 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Determine the active tab based on the current location
    const currentPath = location.pathname;
    setActiveTab(currentPath);
  }, [location]);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTabletOpen = () => {
    setIsTableMenuOpen(!isTableMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 180,
        behavior: 'smooth',
      });
      toggleMobileMenu();
    }
  };

  const isNavLinkActive = (path) => {
    // Check if both path and activeTab are exactly '/'
    if (path === '/' && activeTab === '/') {
      return 'active';
    }
    // For other paths, use the comparison with activeTab
    return activeTab === path ? 'active' : '';
  };

  return (
    <header>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="overlay" onClick={toggleMobileMenu} />
      )}

      {/* Navbar */}
      <Navbar
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        expand="md"
        fixed="top"
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" />
          </Link>

          {/* Navbar Toggler */}
          <div className="navbar-right d-flex justify-content-between align-items-center">
            {/* Desktop Menu */}
            {isDesktop && (
              <Nav className="ml-auto" navbar>
                <Link
                  className={`nav-link mr-1 ${isNavLinkActive('/')}`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`nav-link mr-1 ${isNavLinkActive('/#tokenomics')}`}
                  to="/#tokenomics"
                  onClick={() => scrollToSection('tokenomics')}
                >
                  Tokenomics
                </Link>
                <Link
                  className={`nav-link mr-1 ${isNavLinkActive('/#roadmap')}`}
                  to="/#roadmap"
                  onClick={() => scrollToSection('roadmap')}
                >
                  Roadmap
                </Link>
                <a
                  className={`nav-link mr-1 }`}
                  href="https://ploutoslabs.gitbook.io/ploutos-white-paper"
                  target="_blank"
                  rel="noreferrer"
                >
                  White paper
                </a>
              </Nav>
            )}

            {/* Tablet Menu */}
            {isTablet && (
              <>
                <div className="tab-toggle navicon" onClick={toggleTabletOpen}>
                  {isTableMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
              </>
            )}

            {/* Mobile Menu */}
            {isMobile && (
              <div className="navicon" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            )}
          </div>
        </Container>
      </Navbar>

      {/* Mobile Menu */}
      {isMobile && (
        <MobileMenu
          isOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          scrollToSection={scrollToSection}
        />
      )}
    </header>
  );
}

export default MainNavigation;
