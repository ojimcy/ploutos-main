import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Footer.css';

import logo from '../../../assets/images/logo-white.png';

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
                        to="https://twitter.com/MillionaireMCGP?t=_HFpwFhxH35ASuLC_BnWpA&s=09"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/@MillionaireCircle-MCGP"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTelegram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer-bottom">
            <Row>
              <Col className="text-left" md="12" lg="6">
                <p>
                  © 2023
                  <span> All right reserved</span>
                </p>
              </Col>
              <Col className='md="12" lg="6"'>
                <div className="footer-link">
                  <ul>
                    <li className="link-item">
                      <Link to="/#">Terms & condition</Link>
                    </li>
                    <li className="link-item">
                      <Link className="link-item" to="/#">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="link-item">
                      <Link className="link-item" to="/#">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
