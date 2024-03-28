import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import './Hero.css';

import hero1 from '../../assets/images/hero-1.png';
import hero2 from '../../assets/images/hero-2.png';
import hero3 from '../../assets/images/hero-3.png';
import hero4 from '../../assets/images/hero-4.png'
import hero5 from '../../assets/images/hero-5.png'
import hero6 from '../../assets/images/hero-6.png'

import pdf from '../../assets/white-paper.pdf';

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-background "></div>
        <div className="hero-main">
          <div className=" hero-content d-flex justify-content-center align-items-center">
            <Container>
              <div className="content-title">
                <h1 className="main-title text-center wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                  <span>Ploutos:</span> Redefining Cryptocurrency.
                </h1>
                <p className="text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                  With a limited supply release gradually over 8 years period,
                  PLOUTOS ensure Stability. Positioning in gamefi and Nfts.
                  Partnering with celebrities and companies worldwide, we offer
                  diverse utilities. Join us in revolutionizing the Crypto
                  space.
                </p>
                <div className="get-sterted">
                  <Link
                    className="btn btn-primary hero-btn btn-gradient btn-shadow"
                    to="/"
                  >
                    Get Started
                  </Link>

                  <Link className=" paper-btn" to={pdf} target="_blank">
                    White Paper
                  </Link>
                </div>
              </div>
              <img className="img-1 hero-img" src={hero1} alt="Hero image" />
              <img className="img-2 hero-img" src={hero2} alt="Hero image" />
              <img className="img-3 hero-img" src={hero3} alt="Hero image" />
              <img className="img-4 hero-img" src={hero4} alt="Hero image" />
              <img className="img-5 hero-img" src={hero5} alt="Hero image" />
              <img className="img-6 hero-img" src={hero6} alt="Hero image" />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
