import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import './gaming.css';

import remote from '../../assets/images/remo.png';
import pads from '../../assets/images/game-pads.png';
import frame from '../../assets/images/Frame.png';

import rect1 from '../../assets/images/rect-1.png';
import rect2 from '../../assets/images/rect-2.png';
import rect3 from '../../assets/images/rect-3.png';
import pad from '../../assets/images/game-pad.png';
import virtual from '../../assets/images/virtual.png';

function Gaming() {
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
                Gaming Integrations
              </h2>
              <h6
                className="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="1.5s"
              >
                Level up your gaming experience with Plutos! Partnering with leading game companies, we&apos;re making gaming not only entertaining but also highly rewarding through in-game purchases, rewards, and transactions using Plutos tokens across your favorite games and virtual worlds. {' '}
              </h6>
              <div className="get-sterted mt-5">
                <Link
                  className="btn btn-primary hero-btn btn-gradient btn-shadow"
                  to="/gaming"
                >
                  Demo
                </Link>
                  <Link className=" more-btn" target="_blank">
                    Learn More
                  </Link>
              </div>
            </div>
            <div className="gaming-header-right">
              <img className="frame" src={frame} alt="Gaming Frame" />
              <img className="pads" src={pads} alt="Gaming pads" />
              <img className="remote" src={remote} alt="Gaming remote" />
            </div>
          </div>
          <div className="gaming-images">
            <div className="left">
              <div
                className="rect-1 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="1s"
              >
                <img src={rect1} alt="Games" />
              </div>
              <div
                className="rect-2 wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="1.5s"
              >
                <img src={rect2} alt="Games" />
              </div>
              <div
                className="rect-3 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay="3.5s"
              >
                <img src={rect3} alt="Games" />
                <img className="game-pad" src={pad} alt="Game Pad" />
              </div>
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

export default Gaming;
