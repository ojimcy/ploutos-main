import React from 'react';
import { Link } from 'react-router-dom';
import { Container, UncontrolledCarousel } from 'reactstrap';

import './gaming.css';

import remote from '../../assets/images/remo.png';
import pads from '../../assets/images/game-pads.png';
import frame from '../../assets/images/Frame.png';

import rect1 from '../../assets/images/rect-1.png';
import rect2 from '../../assets/images/rect-2.png';
import rect3 from '../../assets/images/rect-3.png';
import virtual from '../../assets/images/virtual.png';

const items = [
  {
    key: 1,
    src: rect1,
  },
  {
    key: 2,
    src: rect2,
  },
  {
    key: 3,
    src: rect3,
  },
];

function Nft() {
  return (
    <section id="gaming" className="section-wrapper">
      <Container>
        <div className="gaming-wrapper">
          <div className="gaming-header">
            <div className="gaming-title">
              <h2
                className="mt-4 wow fadeInUp "
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                Explore the largest nft market
              </h2>
              <h6
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.5s"
              >
                seamless and environmentally friendly experience for users
                looking to engage with the digital art world.
              </h6>
              <div className="get-sterted mt-5">
                <Link
                  className="btn btn-primary hero-btn btn-gradient btn-shadow"
                  to="/nfts"
                >
                  Explore
                </Link>
              </div>
            </div>
            <div className="gaming-header-right">
              <img className="frame" src={frame} alt="Gaming Frame" />
            </div>
          </div>
          <div className="gaming-images">
            <div className="left">
              <UncontrolledCarousel items={items} />
            </div>
            <div
              className="gaming-virtual  wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="2s"
            >
              <img src={virtual} alt="Virtual Games" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Nft;
