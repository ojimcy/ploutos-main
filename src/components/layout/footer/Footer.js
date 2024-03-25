import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Footer.css';

import logo from '../../../assets/images/logo.png';

function Footer() {

  return (
    <footer>
      <div className="footer-area">
        <Container>
          <div className="footer-top">
            <Row>
              <Col
                className="footer-widget"
                data-wow-delay=".2s"
                lg="4"
                sm="12"
              >
                <Link to="/" className="footer-logo">
                  <img src={logo} alt="logo" />
                </Link>
                <div className="footer-content">
                  <ul className="footer-social">
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/millionaire-circle-23320527b"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.facebook.com/profile.php?id=100093244977134"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/MillionaireMCGP?t=_HFpwFhxH35ASuLC_BnWpA&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="tiktok.com/@Millionaire_Circle"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://instagram.com/millionaire_circle1?igshid=ZGUzMzM3NWJiOQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/@MillionaireCircle-MCGP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-bottom">
            <Row>
              <Col className="text-center" lg="12">
                <p>
                  © 2023
                  <span> Millionaire Circle Green Protocol</span>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
