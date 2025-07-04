import React from 'react';
import { Link } from 'react-router-dom';
import arpanGoyal from '../../assets/places/chandigarh/arpan-goyal-TiHXNVTFYAU-unsplash.jpg';
import anasVillan from '../../assets/places/chandigarh/anas-villan-R_z8A9kYZKQ-unsplash.jpg';
import abhirajChahal from '../../assets/places/chandigarh/abhiraj-chahal-P9lVOw2QQwE-unsplash.jpg';

const ChandigarhTour: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-green-900 to-blue-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">CHANDIGARH TOUR</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Experience the modern planned city of Chandigarh with beautiful gardens.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={arpanGoyal} 
                  alt="Rock Garden, Chandigarh by Arpan Goyal"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={anasVillan} 
                    alt="Sukhna Lake by Anas Villan"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={abhirajChahal} 
                    alt="Rose Garden by Abhiraj Chahal"
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
                      <p className="text-gray-600">2-3 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 500 km (Delhi-Chandigarh-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-info-circle text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Pricing</h3>
                      <p className="text-gray-600">Contact to get information</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Rock Garden</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Sukhna Lake</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Rose Garden</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Le Corbusier Centre</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Government Museum</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Modern Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Chandigarh Tour?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Experience the beauty of the planned city. Contact us now for booking and availability.</p>
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
  );
};

export default ChandigarhTour; 