import React from 'react';
import { Link } from 'react-router-dom';

const Breeza: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-yellow-700 to-yellow-500 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">BREEZA</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">Compact SUV with style, comfort, and efficiency</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-car text-6xl text-yellow-400 mb-4"></i>
                  <p className="text-gray-600">Main Vehicle Image</p>
                  <p className="text-sm text-gray-500 mt-2">Breeza Exterior</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-car-side text-4xl text-yellow-400 mb-2"></i>
                    <p className="text-sm text-gray-600">Side View</p>
                  </div>
                </div>
                <div className="bg-gray-200 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-car text-4xl text-yellow-400 mb-2"></i>
                    <p className="text-sm text-gray-600">Interior</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-car text-yellow-500 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Model</h3>
                      <p className="text-gray-600">Maruti Suzuki Breeza</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-users text-yellow-500 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Seating Capacity</h3>
                      <p className="text-gray-600">5 Passengers + 1 Driver</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-suitcase text-yellow-500 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Luggage Capacity</h3>
                      <p className="text-gray-600">Good boot space for 5 passengers</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-cog text-yellow-500 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Transmission</h3>
                      <p className="text-gray-600">Manual/Automatic options available</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-snowflake text-yellow-500 mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Air Conditioning</h3>
                      <p className="text-gray-600">Dual zone climate control</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Sporty design</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Comfortable seating</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Music system with USB</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Power windows</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Central locking</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Safety features (ABS, Airbags)</li>
                </ul>
              </div>
              <div className="bg-yellow-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-star mr-2"></i>Family trips</li>
                  <li className="flex items-center"><i className="fas fa-star mr-2"></i>Local travel</li>
                  <li className="flex items-center"><i className="fas fa-star mr-2"></i>Airport transfers</li>
                  <li className="flex items-center"><i className="fas fa-star mr-2"></i>City tours</li>
                  <li className="flex items-center"><i className="fas fa-star mr-2"></i>Business travel</li>
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
            <p className="text-xl text-gray-600">Affordable rates for stylish travel</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Travel</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-4">₹13/km</p>
              <p className="text-gray-600 mb-4">Within city limits</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 4 hours</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outstation</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-4">₹10/km</p>
              <p className="text-gray-600 mb-4">Long distance travel</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 200 km</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Transfer</h3>
              <p className="text-3xl font-bold text-yellow-600 mb-4">₹21/km</p>
              <p className="text-gray-600 mb-4">Airport pickup/drop</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Meet & greet service</li>
                <li>• Flight tracking</li>
                <li>• Waiting time included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-yellow-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Breeza?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">Travel in style and comfort with our Breeza. Contact us now for booking and availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">Book Now</Link>
            <a href="tel:+917290000667" className="btn-primary"><i className="fas fa-phone mr-2"></i>Call +91-72900 00667</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Breeza; 