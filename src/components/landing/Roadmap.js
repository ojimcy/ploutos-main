import React, { useState, useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import './roadmap.css';
import line2 from '../../assets/images/Line 2.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

SwiperCore.use([Navigation]);

function Roadmap() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesPerView = windowWidth > 768 ? 2 : 1;

  const goNext = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };

  const swiper = useRef(null);

  return (
    <section id='roadmap' className="section-wrapper">
      <Container>
        <div className="roadmap-wrapper">
          <div className="roadmap-header">
            <h4 className="roadmap-sup-title">Roadmap</h4>
            <h2 className="roadmap-title">Our journey ahead</h2>
            <h6 className="roadmap-sub-title">
              Explore our roadmap to understand the milestones we plan to
              achieve and the timeline for our project&apos;s development
            </h6>
          </div>
          <div className="roadmap-contents">
            <Swiper
              ref={swiper}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              pagination={{ clickable: true }}
              navigation={false}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="roadmap-card mt-3">
                  <div className="roadmap-card-inner">
                    <div className="roadmap-card-header text-center">
                      <h4 className="mt-3">
                        Phase 1: Foundation and launch (year 1)
                      </h4>
                    </div>
                    <img src={line2} className="line-border" alt="Line" />
                    <div className="content mt-3 text-center">
                      <div className="quarter">
                        <h4>Q1 - Q2</h4>
                        <ul>
                          <li>ploutos token development</li>
                          <li>smart contract audit</li>
                        </ul>
                      </div>
                      <div className="quarter qmt">
                        <h4>Q3</h4>
                        <ul>
                          <li>token persale</li>
                          <li>comprehensive marketing campaigns</li>
                        </ul>
                      </div>
                      <div className="quarter qmt">
                        <h4>Q4</h4>
                        <ul>
                          <li>official token launch on exchanges</li>
                          <li>Airdrops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="roadmap-card mt-3">
                  <div className="roadmap-card-inner">
                    <div className="roadmap-card-header text-center">
                      <h4 className="mt-3">
                        Phase 2: Ecosystem Development (Year 2)
                      </h4>
                    </div>
                    <img src={line2} className="line-border" alt="Line" />
                    <div className="content mt-3 text-center">
                      <div className="quarter">
                        <h4>Q1 - Q2</h4>
                        <ul>
                          <li>ploutos nft marketplace</li>
                          <li>
                            Develop and beta test PLOUTOS trading platform
                          </li>
                        </ul>
                      </div>
                      <div className="quarter qmt">
                        <h4>Q3 - 4</h4>
                        <ul>
                          <li>
                            tokintegrate ploutos into online games through
                            collaboration with gaming companies
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="roadmap-card mt-3">
                  <div className="roadmap-card-inner">
                    <div className="roadmap-card-header text-center">
                      <h4 className="mt-3">
                        Phase 3: Expansion and Adoption (Year 3)
                      </h4>
                    </div>
                    <img src={line2} className="line-border" alt="Line" />
                    <div className="content mt-3 text-center">
                      <div className="quarter">
                        <h4>Q1 - Q2</h4>
                        <ul>
                          <li>Launch PLOUTOS PAY app</li>
                        </ul>
                      </div>
                      <div className="quarter qmt">
                        <h4>Q3 - 4</h4>
                        <ul>
                          <li>
                            Expand global marketing efforts through partnerships
                            with celebrities and influencers.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="roadmap-card mt-3">
                  <div className="roadmap-card-inner">
                    <div className="roadmap-card-header text-center">
                      <h4 className="mt-3">
                        Phase 4: Continual Growth and Innovation
                      </h4>
                    </div>
                    <img src={line2} className="line-border" alt="Line" />
                    <div className="content mt-3 text-center">
                      <div className="quarter">
                        <h4>Betond Year 3:</h4>
                        <ul>
                          <li>
                            Partner with new businesses and explore new
                            technologies.
                          </li>
                          <li>Find new markets to use the Ploutos token.</li>
                          <li>
                            Keep interacting with the community to find new ways
                            to use the token.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div className="custom-navigation">
                <button className="prev" onClick={goPrev}>
                  <FaArrowLeft />
                </button>
                <button className="next" onClick={goNext}>
                  <FaArrowRight />
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Roadmap;
