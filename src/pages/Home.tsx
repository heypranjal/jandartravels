import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import TaxiFleet from '../components/TempoTravellers';
import Features from '../components/Features';
import Destinations from '../components/Destinations';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jandar Travels - Premium Taxi & Tour Services in Noida Sector-31 | Book Online</title>
        <meta name="description" content="Jandar Travels offers premium taxi services and tour packages in Noida Sector-31. Book Innova Crysta, Innova Hybrid, Swift Dzire, Ertiga, Bus & Tempo Traveller. Delhi Local Tours, Agra, Shimla Manali, Jaipur packages available. Call +91-9525853388" />
        <meta name="keywords" content="taxi service noida, cab booking noida sector 31, innova crysta hire, tempo traveller booking, delhi agra tour, shimla manali tour package, golden triangle tour, airport taxi noida, outstation cab delhi, tour packages india" />
        <link rel="canonical" href="https://jandartravels.com/" />
        <meta property="og:title" content="Jandar Travels - Premium Taxi & Tour Services in Noida" />
        <meta property="og:description" content="Book premium taxi services and tour packages. Innova Crysta, Tempo Traveller, Bus hire. Delhi, Agra, Shimla Manali, Jaipur tours. 24/7 service." />
        <meta property="og:url" content="https://jandartravels.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jandar Travels - Premium Taxi & Tour Services" />
        <meta name="twitter:description" content="Book premium taxi services and tour packages in Noida. 24/7 availability." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Jandar Travels",
            "description": "Premium Taxi & Tour Services in Noida Sector-31",
            "url": "https://jandartravels.com",
            "telephone": "+91-9525853388",
            "email": "dharmendrajandar9525@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sector 31",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201301",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.5767834",
              "longitude": "77.3397349"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "$$",
            "serviceType": ["Taxi Service", "Tour Packages", "Airport Transfer", "Outstation Cab"]
          })}
        </script>
      </Helmet>
      <div>
        <Hero />
        <TaxiFleet />
        <Services />
        <Features />
        <Destinations />
      </div>
    </>
  );
};

export default Home; 