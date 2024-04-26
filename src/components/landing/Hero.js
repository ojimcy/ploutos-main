import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import pdf from '../../assets/white-paper.pdf';
import cryptChain from '../../assets/images/crypt-chain.webp';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <Container>
        <Row className="align-items-center">
          <Col
            lg="6"
            md="6"
            sm={12}
            className="d-flex justify-content-center wow fadeInUp"
          >
            <div className="hero-content">
              <h1
                className="banner-heading"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <span>PLOUTOS:</span> Redefining Cryptocurrency.
              </h1>
              <div className="banner-des">
                <p>
                  With a limited supply released gradually over 8 years, PLOUTOS
                  ensures stability. Partnering with celebrities and companies
                  worldwide, we offer diverse utilities. Join us in
                  revolutionizing the Crypto space.
                </p>
              </div>
              <div className="d-flex flex-wrap  button-wrapper">
                <Link className="hero-btn get-started-btn" to="/">
                  Get Started
                </Link>
                <Link className="hero-btn paper-btn" to={pdf} target="_blank">
                  White Paper
                </Link>
              </div>
            </div>
          </Col>
          <Col
            lg="6"
            md="6"
            sm={12}
            className="position-relative wow fadeInRight"
          >
            <div className="banner-img">
              <img src={cryptChain} alt="banner" className="banner-img" />
            </div>
            <div className="blur-background bottom-right" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
