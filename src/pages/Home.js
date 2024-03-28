import React from 'react';
import Hero from '../components/landing/Hero';
import About from '../components/landing/About';
import Partner from '../components/landing/Partners';
import Tokenomics from '../components/landing/Tokenomics';
import Features from '../components/landing/Features';
import Roadmap from '../components/landing/Roadmap';
import Gaming from '../components/landing/Gaming';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Partner />
      <Tokenomics />
      <Features />
      <Gaming />
      <Roadmap />
    </>
  );
}
