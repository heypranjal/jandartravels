import React from 'react';

const Services: React.FC = () => {
  const taxiServices = [
    {
      icon: 'fas fa-car',
      title: 'INNOVA CRYSTA',
      description: 'Premium luxury sedan with spacious interior and modern amenities for comfortable travel.',
      features: ['7 Seater', 'AC', 'GPS Navigation', 'Experienced Driver']
    },
    {
      icon: 'fas fa-car-side',
      title: 'INNOVA HYBRID',
      description: 'Eco-friendly hybrid vehicle offering excellent fuel efficiency and smooth ride.',
      features: ['7 Seater', 'Hybrid Engine', 'Fuel Efficient', 'Premium Comfort']
    },
    {
      icon: 'fas fa-car',
      title: 'Swift DZIRE',
      description: 'Compact sedan perfect for city travel and short distance trips.',
      features: ['5 Seater', 'AC', 'Economical', 'City Friendly']
    },
    {
      icon: 'fas fa-bus',
      title: 'Bus Services',
      description: 'Large capacity buses for group tours, corporate events, and family gatherings.',
      features: ['20+ Seater', 'AC', 'Luggage Space', 'Group Discounts']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Premium Taxi Services in Noida Sector-31
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Experience luxury travel with our premium fleet of vehicles. From Innova Crysta to Swift Dzire, we provide comfortable and reliable taxi services for all your travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {taxiServices.map((service, index) => (
            <div key={index} className="card card-fill-hover text-center p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl text-primary mb-4 sm:mb-6">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-left space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                    <i className="fas fa-check text-green-500 mr-2 flex-shrink-0"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-primary text-white rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Why Choose Jandar Travels?
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto px-4 sm:px-0">
            We are committed to providing the best taxi and tour services in Noida Sector-31. With our experienced drivers, well-maintained vehicles, and competitive pricing, we ensure a comfortable and memorable travel experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-white/10 rounded-lg p-4 sm:p-6">
              <i className="fas fa-user-tie text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="font-semibold text-sm sm:text-base">Professional Drivers</h4>
            </div>
            <div className="bg-white/10 rounded-lg p-4 sm:p-6">
              <i className="fas fa-rupee-sign text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="font-semibold text-sm sm:text-base">Best Prices</h4>
            </div>
            <div className="bg-white/10 rounded-lg p-4 sm:p-6">
              <i className="fas fa-shield-alt text-2xl sm:text-3xl mb-2 sm:mb-3"></i>
              <h4 className="font-semibold text-sm sm:text-base">Safe & Reliable</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 