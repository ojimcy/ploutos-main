import React from 'react';

import './partners.css';

import partner1 from '../../assets/images/alphamore.png';
import partner2 from '../../assets/images/cmc.png';
import partner3 from '../../assets/images/coingecko.png';
import partner4 from '../../assets/images/cyberscope.png';

const Partner = () => {
  // Array of partner logos
  const partnerLogos = [partner1, partner2, partner3, partner4];

  // Function to render list items dynamically
  const renderPartnerLogos = () => {
    // Duplicate partner logos for continuous view
    const duplicatedPartnerLogos = [...partnerLogos, ...partnerLogos];

    // Map through duplicated logos and render list items
    return duplicatedPartnerLogos.map((logo, index) => (
      <li key={index}>
        <img src={logo} alt={``} className="partner-logo" />
      </li>
    ));
  };

  return (
    <section className="partner-section">
      <div className="marquee-wrapper">
        <div className="marquee">
          <ul>{renderPartnerLogos()}</ul>
        </div>
      </div>
    </section>
  );
};

export default Partner;
