import React from 'react';
import { Link } from 'react-router-dom';

const TempoTravellers: React.FC = () => {
  return (
    <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tempo Travellers</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">Choose from our range of Tempo Travellers, perfect for group travel, family trips, and tours. All vehicles come with a professional driver for a safe and comfortable journey.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-yellow-700 mb-4">Available Options</h2>
            <ul className="list-disc list-inside text-lg text-gray-800 mb-6">
              <li>9 + 1 Driver</li>
              <li>12 + 1 Driver</li>
              <li>15 + 1 Driver</li>
              <li>17 + 1 Driver</li>
              <li>20 + 1 Driver</li>
              <li>26 + 1 Driver</li>
              <li>और 1 ड्राइवर</li>
            </ul>
            <div className="text-center mt-8">
              <Link to="/contact-us" className="btn-primary text-lg px-8 py-3">Contact for Booking & Pricing</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TempoTravellers; 