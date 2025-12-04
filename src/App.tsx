import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

// Vehicle imports
import InnovaCrysta from './pages/vehicles/InnovaCrysta';
import InnovaHybrid from './pages/vehicles/InnovaHybrid';
import Innova from './pages/vehicles/Innova';
import Ertiga from './pages/vehicles/Ertiga';
import SwiftDzire from './pages/vehicles/SwiftDzire';
import Etios from './pages/vehicles/Etios';
import Brezza from './pages/vehicles/Brezza';
import Bus from './pages/vehicles/Bus';
import TempoTravellerDetails from './pages/vehicles/TempoTravellerDetails';

// Tour imports
import DelhiLocalTour from './pages/tours/DelhiLocalTour';
import SameDayAgraTour from './pages/tours/SameDayAgraTour';
import ShimlaManaliTour from './pages/tours/ShimlaManaliTour';
import JaipurTour from './pages/tours/JaipurTour';
import GoldenTriangleTour from './pages/tours/GoldenTriangleTour';
import NainitalTour from './pages/tours/NainitalTour';
import HaridwarRishikeshPilgrimage from './pages/tours/HaridwarRishikeshPilgrimage';
import HimachalTour from './pages/tours/HimachalTour';
import AmritsarTour from './pages/tours/AmritsarTour';
import ChandigarhTour from './pages/tours/ChandigarhTour';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />

            {/* Vehicle Routes */}
            <Route path="/vehicles/innova-crysta" element={<InnovaCrysta />} />
            <Route path="/vehicles/innova-hybrid" element={<InnovaHybrid />} />
            <Route path="/vehicles/innova" element={<Innova />} />
            <Route path="/vehicles/ertiga" element={<Ertiga />} />
            <Route path="/vehicles/swift-dzire" element={<SwiftDzire />} />
            <Route path="/vehicles/etios" element={<Etios />} />
            <Route path="/vehicles/brezza" element={<Brezza />} />
            <Route path="/vehicles/bus" element={<Bus />} />
            <Route path="/vehicles/tempo-traveller-details" element={<TempoTravellerDetails />} />

            {/* Tour Routes */}
            <Route path="/tours/delhi-local" element={<DelhiLocalTour />} />
            <Route path="/tours/same-day-agra" element={<SameDayAgraTour />} />
            <Route path="/tours/shimla-manali" element={<ShimlaManaliTour />} />
            <Route path="/tours/jaipur" element={<JaipurTour />} />
            <Route path="/tours/golden-triangle" element={<GoldenTriangleTour />} />
            <Route path="/tours/nainital" element={<NainitalTour />} />
            <Route path="/tours/haridwar-rishikesh" element={<HaridwarRishikeshPilgrimage />} />
            <Route path="/tours/himachal" element={<HimachalTour />} />
            <Route path="/tours/amritsar" element={<AmritsarTour />} />
            <Route path="/tours/chandigarh" element={<ChandigarhTour />} />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App; 