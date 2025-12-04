import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const travellerOptions = [
  { seats: 9, description: 'Ideal for small groups and family outings. Comfortable seating and ample luggage space.' },
  { seats: 12, description: 'Perfect for medium-sized groups, school trips, or corporate outings.' },
  { seats: 15, description: 'Spacious and comfortable for larger groups, with modern amenities.' },
  { seats: 17, description: 'Great for big families or group tours, offering extra space and comfort.' },
  { seats: 20, description: 'Best for large group travel, events, and tours. Ensures a smooth journey.' },
  { seats: 26, description: 'Maximum capacity for very large groups, with all essential facilities.' },
  { seats: 'और', description: 'हर टेम्पो ट्रैवलर के साथ 1 अनुभवी ड्राइवर।' }
];

const TempoTravellerDetails: React.FC = () => {
  return (
    <>
      <SEO
        title="Tempo Traveller on Rent - 12-26 Seater Hire Noida"
        description="Hire Tempo Traveller in Noida for group trips & tours. 12, 17, 20, 26 seater options. AC, pushback seats. Best rates. Call +91-9525853388"
        keywords="tempo traveller on rent, tempo traveller hire noida, 12 seater tempo, 17 seater tempo, group travel noida"
        canonicalUrl="/vehicles/tempo-traveller-details"
      />
      <div className="pt-36 sm:pt-40">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tempo Traveller Options</h1>
          <p className="text-xl max-w-2xl mx-auto mb-6">Find the perfect Tempo Traveller for your group size. All vehicles come with a professional driver and modern amenities for a safe, comfortable journey.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom grid gap-8 max-w-4xl mx-auto">
          {travellerOptions.map((option, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-yellow-800 mb-2">
                  {option.seats === 'और' ? '1 Driver' : `${option.seats} Seater + 1 Driver`}
                </h2>
                <p className="text-gray-700 mb-3">{option.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>AC & Non-AC options</li>
                  <li>Comfortable pushback seats</li>
                  <li>Ample luggage space</li>
                  <li>Experienced, courteous driver</li>
                  <li>Clean & sanitized interiors</li>
                </ul>
                <Link to="/contact-us" className="btn-primary text-base px-6 py-2">Contact for Booking & Pricing</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </>
  );
};

export default TempoTravellerDetails; 