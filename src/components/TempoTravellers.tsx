import React from 'react';
import { Link } from 'react-router-dom';
import innovaImg from '../assets/vehicles/innova.jpeg';
import ertigaImg from '../assets/vehicles/ertiga.jpg';
import swiftImg from '../assets/vehicles/swift.avif';
import etiosImg from '../assets/vehicles/etios.jpg';
import breezaImg from '../assets/vehicles/breeza.jpg';
import busImg from '../assets/vehicles/bus.avif';

const TaxiFleet: React.FC = () => {
  const taxiFleet = [
    {
      id: 'innova-crysta',
      name: 'INNOVA CRYSTA',
      route: '/vehicles/innova-crysta',
      title: 'Premium Luxury Sedan',
      rating: 15,
      passengers: '7 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '7 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Premium',
      image: innovaImg,
      features: [
        'Seating : 7 Passenger + 1 Driver',
        'Made By : Toyota',
        'Premium Luxury Interior',
        'AC with Climate Control',
        'GPS Navigation System'
      ]
    },
    {
      id: 'innova-hybrid',
      name: 'INNOVA HYBRID',
      route: '/vehicles/innova-hybrid',
      title: 'Eco-Friendly Hybrid',
      rating: 10,
      passengers: '7 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '7 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Premium',
      image: innovaImg,
      features: [
        'Seating : 7 Passenger + 1 Driver',
        'Made By : Toyota',
        'Hybrid Engine Technology',
        'Fuel Efficient',
        'Environment Friendly'
      ]
    },
    {
      id: 'innova',
      name: 'INNOVA',
      route: '/vehicles/innova',
      title: 'Classic Innova',
      rating: 10,
      passengers: '7 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '7 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Standard',
      image: innovaImg,
      features: [
        'Seating : 7 Passenger + 1 Driver',
        'Made By : Toyota',
        'Spacious Interior',
        'AC Comfort',
        'Reliable Performance'
      ]
    },
    {
      id: 'ertiga',
      name: 'ERTIGA',
      route: '/vehicles/ertiga',
      title: 'Maruti Ertiga',
      rating: 9,
      passengers: '6 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '6 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Economical',
      image: ertigaImg,
      features: [
        'Seating : 6 Passenger + 1 Driver',
        'Made By : Maruti Suzuki',
        'Fuel Efficient',
        'AC Comfort',
        'Economical Choice'
      ]
    },
    {
      id: 'swift-dzire',
      name: 'Swift DZIRE',
      route: '/vehicles/swift-dzire',
      title: 'Compact Sedan',
      rating: 9,
      passengers: '4 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '4 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Economical',
      image: swiftImg,
      features: [
        'Seating : 4 Passenger + 1 Driver',
        'Made By : Maruti Suzuki',
        'Compact & Agile',
        'AC Comfort',
        'Perfect for City Travel'
      ]
    },
    {
      id: 'etios',
      name: 'Etios',
      route: '/vehicles/etios',
      title: 'Toyota Etios',
      rating: 9,
      passengers: '4 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '4 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Standard',
      image: etiosImg,
      features: [
        'Seating : 4 Passenger + 1 Driver',
        'Made By : Toyota',
        'Reliable Performance',
        'AC Comfort',
        'Good Mileage'
      ]
    },
    {
      id: 'brezza',
      name: 'BREZZA',
      route: '/vehicles/brezza',
      title: 'Maruti Brezza',
      rating: 9,
      passengers: '4 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '4 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Standard',
      image: breezaImg,
      features: [
        'Seating : 4 Passenger + 1 Driver',
        'Made By : Maruti Suzuki',
        'Compact SUV',
        'AC Comfort',
        'Good Ground Clearance'
      ]
    },
    {
      id: 'bus',
      name: 'Bus',
      route: '/vehicles/bus',
      title: 'Luxury Bus',
      rating: 9,
      passengers: '20+ Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '20+ Passenger + 1 Driver',
      madeBy: 'Multiple Brands',
      price: 'Group',
      image: busImg,
      features: [
        'Seating : 20+ Passenger + 1 Driver',
        'Made By : Multiple Brands',
        'Large Capacity',
        'AC Comfort',
        'Perfect for Group Tours'
      ]
    }
  ];

  return (
    <section id="taxi-fleet" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Premium Taxi Fleet
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Choose from our wide range of vehicles - from luxury Innova Crysta to economical Swift Dzire. All our vehicles are well-maintained and driven by professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {taxiFleet.map((taxi, index) => (
            <div
              key={index} className="card hover:scale-105 transition-transform duration-300 overflow-hidden relative group"
              style={{ zIndex: 0 }}
            >
              {/* Animated fill overlay */}
              <span
                className="absolute left-0 bottom-0 w-full h-0 group-hover:h-full transition-all duration-700 ease-in-out"
                style={{
                  background: 'rgb(210,140,40)',
                  zIndex: 1,
                  opacity: 0.85,
                  transitionProperty: 'height',
                }}
              ></span>
              <div className="relative z-10">
                <div className="relative h-40 sm:h-48 bg-gray-200 mb-3 sm:mb-4">
                  <img 
                    src={taxi.image} 
                    alt={taxi.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs sm:text-sm font-semibold">
                    {taxi.price}
                  </div>
                </div>
                
                <div className="p-3 sm:p-4">
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2 group-hover:text-white transition-colors duration-700 relative z-10">
                      {taxi.name}
                    </h3>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-white transition-colors duration-700 relative z-10">
                      {taxi.title}
                    </h4>
                    <div className="flex items-center justify-center mb-1 sm:mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fas fa-star text-xs sm:text-sm"></i>
                        ))}
                      </div>
                      <span className="ml-2 text-xs sm:text-sm text-gray-600">({taxi.rating})</span>
                      <span className="block text-xs sm:text-sm text-primary font-semibold mt-1">Contact to get information</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1 group-hover:text-white transition-colors duration-700 relative z-10">
                      {taxi.passengers}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white transition-colors duration-700 relative z-10">
                      {taxi.driver}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-700 group-hover:text-white transition-colors duration-700 relative z-10">
                      {taxi.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className="fas fa-check text-green-500 mr-2 mt-0.5 sm:mt-1 flex-shrink-0 text-xs"></i>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link to={taxi.route} className="btn-secondary text-center text-xs sm:text-sm py-2 sm:py-3">
                        View Details
                      </Link>
                      <Link to="/contact-us" className="btn-primary text-center text-xs sm:text-sm py-2 sm:py-3">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaxiFleet; 