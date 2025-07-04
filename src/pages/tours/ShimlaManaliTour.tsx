import React from 'react';
import { Link } from 'react-router-dom';
import alikGhosh from '../../assets/places/shimla manali/alik-ghosh-9yIO-zQe35g-unsplash.jpg';
import barbareKacharava from '../../assets/places/shimla manali/barbare-kacharava-lozEfheL82k-unsplash.jpg';
import shyamRaj from '../../assets/places/shimla manali/shyam-raj-vishwakarma-a8AdBuw41kQ-unsplash.jpg';

const ShimlaManaliTour: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-green-900 to-blue-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">SHIMLA MANALI TOUR</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Experience the beauty of Himachal Pradesh with our Shimla Manali tour package.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={alikGhosh} 
                  alt="Shimla Hills by Alik Ghosh"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={barbareKacharava} 
                    alt="Manali Valley by Barbare Kacharava"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={shyamRaj} 
                    alt="Himalayan Landscape by Shyam Raj Vishwakarma"
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
                      <p className="text-gray-600">5-7 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 1,200 km (Delhi-Shimla-Manali-Delhi)</p>
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
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Shimla Mall Road</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Kufri</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Manali Mall Road</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Solang Valley</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Hadimba Temple</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Mountain Views</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Shimla Manali Tour?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">Experience the beauty of the Himalayas. Contact us now for booking and availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">Book Now</Link>
            <a href="tel:+919525853388" className="btn-primary"><i className="fas fa-phone mr-2"></i>Call +91- 95258 53388</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShimlaManaliTour; 