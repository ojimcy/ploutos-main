import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './about.css';

import about from '../../assets/images/about-img.png';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section id="about" className="section-wrapper">
        <Container>
          <div className="content-inner-1">
            <div className="section-head">
              <h2 className="title">About Ploutos</h2>
            </div>
            <Row className="align-items-center justify-content-center">
              <Col lg={6}>
                <div className="about-img wow fadeInUp" data-wow-delay="1s">
                  <img src={about} alt="about" />
                </div>
              </Col>
              <Col lg={6}>
                <div
                  className="about-content wow fadeInUp"
                  data-wow-delay="1s"
                >
                  <div className="about-text">
                    <p>
                      PLOUTOS is more than just a cryptocurrency; its a
                      visionary project aimed at reshaping the future of digital
                      finance. Founded on the principles of innovation,
                      transparency, and utility, PLOUTOS seeks to address the
                      shortcomings of traditional cryptocurrencies and pave the
                      way for widespread adoption and real-world application.
                    </p>

                    <ul>
                      <li>
                        With a limited supply released gradually over 8 years,
                        PLOUTOS ensures stability.
                      </li>
                      <li>
                        Partnering with celebrities and companies worldwide, we
                        offer diverse utilities
                      </li>
                      <li>Join us in revolutionizing the crypto space.</li>
                    </ul>

                    <Link className="about-btn" to="/assets/white-paper.pdf">
                      Learn More
                    </Link>

                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}
