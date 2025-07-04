import React from 'react';
import { Link } from 'react-router-dom';
import breezaImg from '../../assets/vehicles/breeza.jpg';

const Brezza: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-green-900 to-blue-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">BREZZA</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Compact SUV with excellent ground clearance and modern features.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={breezaImg} 
                  alt="Maruti Brezza - Jandar Travels"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-users text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Seating Capacity</h3>
                      <p className="text-gray-600">4 Passengers + 1 Driver</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-car text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Vehicle Type</h3>
                      <p className="text-gray-600">Compact SUV</p>
                    </div>
                  </div>
                  {/* <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900"></h3>
                      <p className="text-gray-600"></p>
                    </div>
                  </div> */}
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Compact SUV</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>AC Comfort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Good Ground Clearance</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Modern Design</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fuel Efficient</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Professional Driver</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Information</h2>
            <p className="text-xl text-gray-600">Contact to get information</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Brezza?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Experience modern SUV comfort with our Brezza. Contact us now for booking and availability.</p>
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

export default Brezza; 