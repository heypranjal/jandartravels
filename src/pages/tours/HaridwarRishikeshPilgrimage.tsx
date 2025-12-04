import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import shreyashkaMaharjan from '../../assets/places/haridwar rishikesh/shreyashka-maharjan-tPXP7U4IA40-unsplash.jpg';
import jayanthMuppaneni from '../../assets/places/haridwar rishikesh/jayanth-muppaneni-fksv4IkwlVc-unsplash.jpg';
import sidharthKumar from '../../assets/places/haridwar rishikesh/sidharth-kumar-kwj1_4pZ9pw-unsplash.jpg';

const HaridwarRishikeshPilgrimage: React.FC = () => {
  return (
    <>
      <SEO
        title="Haridwar Rishikesh Tour - Pilgrimage Package from Delhi"
        description="Book Haridwar Rishikesh pilgrimage tour from Delhi/Noida. Ganga Aarti, Laxman Jhula, temples visit. 3-4 days. AC car. Call +91-9525853388"
        keywords="haridwar rishikesh tour, haridwar tour package, rishikesh trip, ganga aarti tour, pilgrimage tour delhi"
        canonicalUrl="/tours/haridwar-rishikesh"
      />
      <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-orange-900 to-yellow-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">HARIDWAR RISHIKESH PILGRIMAGE</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">Experience the spiritual journey to the holy cities of Haridwar and Rishikesh.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={shreyashkaMaharjan} 
                  alt="Ganga Aarti, Haridwar by Shreyashka Maharjan"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={jayanthMuppaneni} 
                    alt="Laxman Jhula, Rishikesh by Jayanth Muppaneni"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={sidharthKumar} 
                    alt="Har Ki Pauri, Haridwar by Sidharth Kumar"
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
                      <p className="text-gray-600">Approx. 500 km (Delhi-Haridwar-Rishikesh-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹10,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Har Ki Pauri</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Ganga Aarti</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Laxman Jhula</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Ram Jhula</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Triveni Ghat</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Yoga & Meditation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-orange-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Haridwar Rishikesh Pilgrimage?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Experience the spiritual journey to the holy cities. Contact us now for booking and availability.</p>
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

export default HaridwarRishikeshPilgrimage; 