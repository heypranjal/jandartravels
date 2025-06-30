import React from 'react';
import { Link } from 'react-router-dom';

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
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      rating: 12,
      passengers: '7 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '7 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Premium',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
      rating: 8,
      passengers: '7 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '7 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Economical',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Seating : 7 Passenger + 1 Driver',
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
      passengers: '5 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '5 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Economical',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Seating : 5 Passenger + 1 Driver',
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
      rating: 7,
      passengers: '5 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '5 Passenger + 1 Driver',
      madeBy: 'Toyota',
      price: 'Standard',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Seating : 5 Passenger + 1 Driver',
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
      rating: 8,
      passengers: '5 Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '5 Passenger + 1 Driver',
      madeBy: 'Maruti Suzuki',
      price: 'Standard',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      features: [
        'Seating : 5 Passenger + 1 Driver',
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
      rating: 6,
      passengers: '20+ Passengers + 1 Driver',
      driver: 'Professional Driver',
      seating: '20+ Passenger + 1 Driver',
      madeBy: 'Multiple Brands',
      price: 'Group',
      perKm: 'Rate',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
            <div key={index} className="card hover:scale-105 transition-transform duration-300 overflow-hidden">
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
                  <h3 className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">
                    {taxi.name}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {taxi.title}
                  </h4>
                  <div className="flex items-center justify-center mb-1 sm:mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star text-xs sm:text-sm"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-xs sm:text-sm text-gray-600">({taxi.rating})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-0.5 sm:mb-1">
                    {taxi.passengers}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {taxi.driver}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-700">
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
                    <button className="btn-primary text-xs sm:text-sm py-2 sm:py-3">
                      Book Now
                    </button>
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