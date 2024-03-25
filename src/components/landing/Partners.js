import React from 'react';
import { Container } from 'reactstrap';

import './partners.css';

import partner1 from '../../assets/images/alphamore.png';
import partner2 from '../../assets/images/cmc.png';
import partner3 from '../../assets/images/coingecko.png';
import partner4 from '../../assets/images/cyberscope.png';

const partners = [partner1, partner2, partner3, partner4];
const Partner = () => {
  return (
    <section id="partner" className="partner-section">
      <Container>
        <div className="partner-inner">
          <div className="partner-title">
            <h3 className="sup-title">Our Partners</h3>
            <h2 className="title">Trusted by Top Companies</h2>
            <h6 className="sub-title">Explore our partners and Exchanges</h6>
          </div>
          <div className="partner-logos">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt={`Partner ${index + 1}`}
                className="partner-logo"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partner;
