import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './features.css';

import features from '../../assets/images/service.webp';

function Features() {
  return (
    <section id="features" className="features-section">
      <Container>
        <div className="features-wrapper">
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={6}>
              <Row className="justify-content-center">
                <div className="features-header text-center">
                  <h2>Features</h2>
                  <p>
                    Discover the powerful features that set PLOUTOS apart and
                    make it the future of cryptocurrency.
                  </p>
                </div>
              </Row>
              <Row className="mt-4 mb-5 feature-cards">
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">Proof of Stake Technology</h4>
                    </div>
                    <p className="text-left">
                      PLOUTOS tackles cryptocurrency issues like volatility and
                      real-world use, aiming for a sustainable and inclusive
                      digital currency.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">Real-world Utility </h4>
                    </div>
                    <p className="text-left">
                      PLOUTOS addresses crypto challenges, focusing on utility,
                      security, and sustainability, tackling issues like
                      volatility, limited use, wealth concentration, and
                      environmental concerns.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">Security and Compliance </h4>
                    </div>
                    <p className="text-left">
                      PLOUTOS ensures platform security with a thorough audit by
                      Cyberscope.io, providing peace of mind to users and
                      investors.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">
                        NFT Development and Partnerships{' '}
                      </h4>
                    </div>
                    <p className="text-left">
                      Collaborating with established NFT ecosystems to introduce
                      unique digital assets, fostering creativity and ownersip
                      in the digital space.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">PLOUTOS Pay </h4>
                    </div>
                    <p className="text-left">
                      PLOUTOS Pay is a secure and efficient payment solution
                      integrated within the PLOUTOS ecosystem, enabling seamless
                      transactions and financial interactions between users.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <div
                    className="features-card mt-3 wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="features-card-header">
                      <h4 className="mt-3">Community Engagement </h4>
                    </div>
                    <p className="text-left">
                      PLOUTOS prioritizes community engagement and environmental
                      sustainability through programs and partnerships,
                      empowering its community and promoting a greener future.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={6}>
              <div className="features-img wow fadeInUp" data-wow-delay="1s">
                <img src={features} alt=" " />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Features;
