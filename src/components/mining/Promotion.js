import React, { useState, useEffect } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';

import promo1 from '../../assets/images/promotion/promo1.jpg';
import promo2 from '../../assets/images/promotion/promo2.jpg';
import promo3 from '../../assets/images/promotion/promo3.jpg';
import promo4 from '../../assets/images/promotion/promo4.jpg';
import promo5 from '../../assets/images/promotion/promo5.jpg';
import promo6 from '../../assets/images/promotion/promo6.jpg';
import promo7 from '../../assets/images/promotion/promo7.jpg';
import promo8 from '../../assets/images/promotion/promo8.jpg';

const items = [
  {
    src: promo1,
    altText: 'Promo 1',
  },
  {
    src: promo2,
    altText: 'Promo 2',
  },
  {
    src: promo3,
    altText: 'Promo 3',
  },
  {
    src: promo4,
    altText: 'Promo 4',
  },
  {
    src: promo5,
    altText: 'Promo 5',
  },
  {
    src: promo6,
    altText: 'Promo 6',
  },
  {
    src: promo7,
    altText: 'Promo 7',
  },
  {
    src: promo8,
    altText: 'Promo 8',
  },
];

const PromotionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]); // Restart the interval whenever the active index changes

  const slides = items.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
      style={{ maxWidth: '380px' }}
    >
      <img src={item.src} alt={item.altText} />
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
    </Carousel>
  );
};

export default PromotionSlider;
