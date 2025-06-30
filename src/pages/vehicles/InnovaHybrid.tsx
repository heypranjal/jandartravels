import React from 'react';
import { Link } from 'react-router-dom';

const InnovaHybrid: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-blue-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              INNOVA HYBRID
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Eco-friendly hybrid technology for sustainable luxury travel.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vehicle Images */}
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Innova Hybrid"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Innova Hybrid Dashboard"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Innova Hybrid Exterior"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Vehicle Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-users text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Seating Capacity</h3>
                      <p className="text-gray-600">7 Passengers + 1 Driver</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-leaf text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Vehicle Type</h3>
                      <p className="text-gray-600">Hybrid MPV</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹12 per km</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Hybrid Engine Technology</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fuel Efficient</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Environment Friendly</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>AC with Climate Control</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>GPS Navigation System</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Professional Driver</li>
                </ul>
              </div>

              <div className="bg-green-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Eco-conscious travelers
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Corporate travel
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Airport transfers
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Long distance travel
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Family vacations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Information</h2>
            <p className="text-xl text-gray-600">Eco-friendly travel at competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Travel</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹16/km</p>
              <p className="text-gray-600 mb-4">Within city limits</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 4 hours</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outstation</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹13/km</p>
              <p className="text-gray-600 mb-4">Long distance travel</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 200 km</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Transfer</h3>
              <p className="text-3xl font-bold text-green-600 mb-4">₹26/km</p>
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

      {/* CTA Section */}
      <section className="section-padding bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Innova Hybrid?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience eco-friendly luxury travel with our Innova Hybrid. Contact us now for booking and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">
              Book Now
            </Link>
            <a href="tel:+917290000667" className="btn-primary">
              <i className="fas fa-phone mr-2"></i>
              Call +91-72900 00667
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovaHybrid; 