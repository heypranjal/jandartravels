import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import swiftImg from '../../assets/vehicles/swift.avif';

const SwiftDzire: React.FC = () => {
  return (
    <>
      <SEO
        title="Swift Dzire on Rent - 4 Seater Sedan Car Hire Noida"
        description="Hire Maruti Swift Dzire in Noida for local & outstation travel. 4+1 seater, AC, fuel-efficient. Best rates for airport transfers. Call +91-9525853388"
        keywords="swift dzire on rent, dzire hire noida, sedan car rental, 4 seater car hire delhi, dzire booking"
        canonicalUrl="/vehicles/swift-dzire"
      />
      <div className="pt-28 sm:pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-orange-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              SWIFT DZIRE
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Compact and agile sedan perfect for city travel.
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
                  src={swiftImg} 
                  alt="Maruti Swift Dzire - Jandar Travels"
                  className="w-full h-64 object-cover"
                />
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
                      <p className="text-gray-600">4 Passengers + 1 Driver</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-car text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Vehicle Type</h3>
                      <p className="text-gray-600">Compact Sedan</p>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Compact & Agile</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>AC Comfort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Perfect for City Travel</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fuel Efficient</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Easy Parking</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Professional Driver</li>
                </ul>
              </div>

              <div className="bg-red-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Perfect For</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Small family trips
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Local travel
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Airport transfers
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    City tours
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-star mr-2"></i>
                    Business travel
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
            <p className="text-xl text-gray-600">Economical rates for efficient travel</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Travel</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">Contact to get information</p>
              <p className="text-gray-600 mb-4">Within city limits</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 4 hours</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outstation</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">Contact to get information</p>
              <p className="text-gray-600 mb-4">Long distance travel</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Minimum 200 km</li>
                <li>• Fuel included</li>
                <li>• Driver charges extra</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Airport Transfer</h3>
              <p className="text-3xl font-bold text-red-600 mb-4">Contact to get information</p>
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
      <section className="section-padding bg-red-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Swift Dzire?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Experience comfortable city travel with our Swift Dzire. Contact us now for booking and availability.
          </p>
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

export default SwiftDzire; 