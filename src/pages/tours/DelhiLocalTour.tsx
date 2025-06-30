import React from 'react';
import { Link } from 'react-router-dom';

const DelhiLocalTour: React.FC = () => {
  return (
    <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-red-900 to-orange-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DELHI LOCAL TOUR</h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">Explore the heart of India with our comprehensive Delhi local tour.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                  alt="Delhi Local Tour"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80" 
                    alt="Red Fort"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Qutub Minar"
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
                      <p className="text-gray-600">1 Day (8-10 Hours)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 80-100 km within Delhi</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹2,500</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Red Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Qutub Minar</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>India Gate</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Humayun's Tomb</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Lotus Temple</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Chandni Chowk</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-red-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Delhi Local Tour?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">Experience the rich history and culture of Delhi. Contact us now for booking and availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">Book Now</Link>
            <a href="tel:+917290000667" className="btn-primary"><i className="fas fa-phone mr-2"></i>Call +91-72900 00667</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DelhiLocalTour; 