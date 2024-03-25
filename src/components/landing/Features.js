import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './features.css';

import feature1 from '../../assets/images/stake.png';
import feature2 from '../../assets/images/utility-icon.png';
import feature3 from '../../assets/images/security-icon.png';
import feature4 from '../../assets/images/nft-dev.png';
import feature5 from '../../assets/images/ploutos-pay.png';
import feature6 from '../../assets/images/security-icon.png';

function Features() {
  return (
    <section id="features" className="features-section">
      <Container>
        <div className="features-wrapper">
          <Row className="justify-content-center">
            <div className="features-header text-center">
              <h2>Features</h2>
              <p>
                Discover the powerful features that set PLOUTOS apart and make
                it the future of cryptocurrency.
              </p>
            </div>
          </Row>
          <Row className="mt-4">
            <Col md={12} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature1} alt="Feature 1" />
                    <h4 className="mt-3">Proof of Stake Technology</h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      The PLOUTOS project offers a comprehensive solution to
                      cryptocurrency challenges, focusing on utility, security,
                      and sustainability. Addressing volatility, limited
                      real-world use, wealth concentration, and environmental
                      concerns.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature2} alt="Feature 2" />
                    <h4 className="mt-3">
                      Real-world Utility through Diverse Ecosystem Development
                    </h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      PLOUTOS offers a multifaceted solution to crypto
                      challenges, focusing on utility, security, and
                      sustainability. Addressing volatility, limited real-world
                      use, wealth concentration, and environmental concerns.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature3} alt="Feature 3" />
                    <h4 className="mt-3">Security and Compliance</h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      PLOUTOS prioritizes security, with its smart contract
                      undergoing a rigorous audit by Cyberscope.io, a blockchain
                      security leader. Our commitment ensures a secure,
                      hack-resistant platform, providing peace of mind to users
                      and investors.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={12} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature4} alt="Feature 1" />
                    <h4 className="mt-3">NFT Development and Partnerships</h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      Collaborating with established NFT ecosystems to introduce
                      unique digital assets, fostering creativity and ownersip
                      in the digital space.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature5} alt="Feature 2" />
                    <h4 className="mt-3">PLOUTOS Pay</h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      PLOUTOS Pay is a secure and efficient payment solution
                      integrated within the PLOUTOS ecosystem, enabling seamless
                      transactions and financial interactions between users.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="feature-card mt-3">
                <div className="inner">
                  <div className="feature-card-header text-center">
                    <img src={feature6} alt="Feature 3" />
                    <h4 className="mt-3">Community Engagement</h4>
                  </div>
                  <div className="content mt-3 text-center">
                    <p>
                      PLOUTOS prioritizes community engagement and environmental
                      sustainability through various programs and partnerships,
                      aiming to empower its community and contribute to a
                      greener future.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Features;
