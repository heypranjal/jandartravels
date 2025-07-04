import React from 'react';
import { Link } from 'react-router-dom';
import vgBingi from '../../assets/places/jaipur/vg-bingi-Z9s5Tt0MHKg-unsplash.jpg';
import adityaSiva1 from '../../assets/places/jaipur/aditya-siva-3P1G67zNyCI-unsplash.jpg';
import adityaSiva2 from '../../assets/places/jaipur/aditya-siva-6rDbvXzIVpQ-unsplash.jpg';

const JaipurTour: React.FC = () => {
  return (
    <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-pink-900 to-orange-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">JAIPUR TOUR PACKAGE</h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">Discover the Pink City with our comprehensive Jaipur tour package.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={vgBingi} 
                  alt="Hawa Mahal, Jaipur by VG Bingi"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={adityaSiva1} 
                    alt="Amber Fort by Aditya Siva"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={adityaSiva2} 
                    alt="City Palace by Aditya Siva"
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
                      <p className="text-gray-600">Approx. 600 km (Delhi-Jaipur-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹8,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Hawa Mahal</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Amber Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>City Palace</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Jantar Mantar</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Nahargarh Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Local Markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-pink-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Jaipur Tour?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">Experience the royal heritage of Jaipur. Contact us now for booking and availability.</p>
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

export default JaipurTour; 