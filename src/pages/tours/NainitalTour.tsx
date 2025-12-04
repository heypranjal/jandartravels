import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import priyadarshiKinth from '../../assets/places/nanital/priyadarshi-kinth-V56BhBV_SCE-unsplash.jpg';
import abhishekRoyal from '../../assets/places/nanital/abhishek-royal-S0TUYf1vhg8-unsplash.jpg';
import anubhavRana from '../../assets/places/nanital/anubhav-rana-9qmTCba-oZE-unsplash.jpg';

const NainitalTour: React.FC = () => {
  return (
    <>
      <SEO
        title="Nainital Tour Package from Delhi - Lake City Trip"
        description="Book Nainital tour package from Delhi/Noida. Visit Naini Lake, Mall Road, Naina Devi Temple. 3-4 days trip. AC car. Call +91-9525853388"
        keywords="nainital tour package, nainital trip from delhi, uttarakhand tour, lake city tour, nainital sightseeing"
        canonicalUrl="/tours/nainital"
      />
      <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">NAINITAL TOUR</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the beauty of Nainital - the lake city of Uttarakhand.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={priyadarshiKinth} 
                  alt="Naini Lake, Nainital by Priyadarshi Kinth"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={abhishekRoyal} 
                    alt="Mall Road, Nainital by Abhishek Royal"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={anubhavRana} 
                    alt="Hills of Nainital by Anubhav Rana"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tour Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-clock text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Duration</h3>
                      <p className="text-gray-600">3-4 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 600 km (Delhi-Nainital-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹12,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Naini Lake</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Mall Road</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Snow View Point</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Naina Devi Temple</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Bhimtal</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Boat Rides</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Nainital Tour?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Experience the serene beauty of Nainital. Contact us now for booking and availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">
              Book Now
            </Link>
            <a href="tel:+919525853388" className="btn-primary">
              <i className="fas fa-phone mr-2"></i>
              Call +91- 95258 53388
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default NainitalTour; 