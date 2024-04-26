import React from 'react';

import './tokenomics.css';
import { Col, Container, Row } from 'reactstrap';

import tokenomics from '../../assets/images/graph.png';

function Tokenomics() {
  return (
    <section id="tokenomics" className="section-wrapper tokenomics-section">
      <Container>
        <div className="wrapper">
          <div className="top-header">
            <div className="title">
              <h2>Tokenomics</h2>
            </div>
            <div className="sub-title mt-3">
              <h6>
                Explore the token distribution model and understand how PLOUTOS
                ensures fairness, stability, and long-term value for its
                holders.
              </h6>
            </div>
          </div>
          <Row className="mt-5 justify-content-center align-items-center">
            <Col sm={12} md={6}>
              <div className="details">
                <ul className="tokenomics-list">
                  <li>30% Prsale</li>
                  <li>20% Core team</li>
                  <li>2.5% Developer</li>
                  <li>5% Airdrops</li>
                  <li>25% Utility</li>
                  <li>16.5% Marketing and Promotions</li>
                  <li>1%Legal team</li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className="tokenomics-img">
                <img src={tokenomics} alt="Tokenomics" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Tokenomics;
