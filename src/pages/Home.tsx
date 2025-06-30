import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TaxiFleet from '../components/TempoTravellers';
import Features from '../components/Features';
import Destinations from '../components/Destinations';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <TaxiFleet />
      <Features />
      <Destinations />
    </div>
  );
};

export default Home; 