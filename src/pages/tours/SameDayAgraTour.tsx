import React from 'react';
import { Link } from 'react-router-dom';
import arunGeetha from '../../assets/places/agra/arun-geetha-viswanathan-8goGYCLzrLs-unsplash.jpg';
import shreshthGupta from '../../assets/places/agra/shreshth-gupta-7-RDFPniALI-unsplash.jpg';
import vatraVoda from '../../assets/places/agra/vatra-voda-_P5F9l4XNMA-unsplash.jpg';

const SameDayAgraTour: React.FC = () => {
  return (
    <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-blue-900 to-purple-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SAME DAY AGRA TOUR</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the wonder of Taj Mahal with our same day Agra tour package.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={arunGeetha} 
                  alt="Taj Mahal, Agra, India by Arun Geetha Viswanathan"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={shreshthGupta} 
                    alt="Agra Fort by Shreshth Gupta"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={vatraVoda} 
                    alt="Fatehpur Sikri by Vatra Voda"
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
                      <p className="text-gray-600">1 Day (12-14 Hours)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 400 km (Delhi-Agra-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹4,500</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Taj Mahal</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Agra Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fatehpur Sikri</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Itmad-ud-Daulah</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Local Markets</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Traditional Cuisine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Same Day Agra Tour?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Witness the beauty of Taj Mahal in a day. Contact us now for booking and availability.</p>
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

export default SameDayAgraTour; 