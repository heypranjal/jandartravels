import React from 'react';

const AboutUs: React.FC = () => {
  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '50+', label: 'Vehicles' },
    { number: '24/7', label: 'Support' },
    { number: '5+', label: 'Years Experience' }
  ];

  const services = [
    {
      icon: 'fas fa-car',
      title: 'Premium Taxi Services',
      description: 'We offer a wide range of vehicles from luxury Innova Crysta to economical Swift Dzire, ensuring comfort and reliability for all your travel needs.'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Tour Packages',
      description: 'Comprehensive tour packages across India including Delhi local tours, Golden Triangle, Himachal tours, and spiritual journeys.'
    },
    {
      icon: 'fas fa-plane',
      title: 'Airport Transfers',
      description: 'Reliable airport transfer services from Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad to all major airports.'
    },
    {
      icon: 'fas fa-users',
      title: 'Corporate Services',
      description: 'Dedicated corporate travel solutions with professional drivers and well-maintained vehicles for business requirements.'
    }
  ];

  const team = [
    {
      name: 'Professional Drivers',
      role: 'Experienced & Trained',
      description: 'Our drivers are well-trained professionals with years of experience in safe driving and customer service.'
    },
    {
      name: 'Customer Support',
      role: '24/7 Assistance',
      description: 'Round-the-clock customer support to assist you with bookings, queries, and emergency situations.'
    },
    {
      name: 'Quality Assurance',
      role: 'Maintained Fleet',
      description: 'Regular maintenance and quality checks ensure all our vehicles are in perfect condition for your safety.'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              About Jandar Travels
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4 sm:px-0">
              Your trusted partner for premium taxi services and unforgettable tour experiences in Noida Sector-31 and across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Jandar Travels was established with a vision to provide premium transportation services in Noida Sector-31. 
                We started as a small taxi service and have grown into a comprehensive travel solutions provider.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for 
                thousands of customers who trust us with their travel needs.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, we offer a wide range of services including luxury taxi rentals, tour packages, airport transfers, 
                and corporate travel solutions across India.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 sm:p-8">
              <div className="text-center">
                <i className="fas fa-car text-4xl sm:text-6xl text-primary mb-3 sm:mb-4"></i>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Premium Fleet</h3>
                <p className="text-sm sm:text-base text-gray-600">Well-maintained vehicles for your comfort and safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-blue-100 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Offer</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive travel solutions tailored to meet all your transportation and tour requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center p-6 sm:p-8">
                <div className="text-4xl sm:text-5xl text-primary mb-4 sm:mb-6">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-primary text-white rounded-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-base sm:text-lg text-blue-100 mb-4 sm:mb-6 leading-relaxed">
                To provide reliable, comfortable, and affordable transportation services while ensuring the highest 
                standards of safety and customer satisfaction.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-blue-100">
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Customer satisfaction is our top priority</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Maintain the highest safety standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Provide competitive pricing</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary text-white rounded-lg p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-base sm:text-lg text-yellow-100 mb-4 sm:mb-6 leading-relaxed">
                To become the leading travel service provider in Noida and surrounding areas, known for excellence, 
                reliability, and customer-centric approach.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-yellow-100">
                <li className="flex items-start">
                  <i className="fas fa-star mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Expand our fleet and services</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Build long-term customer relationships</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Embrace technology for better service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Dedicated professionals committed to providing you with the best travel experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center p-6 sm:p-8">
                <div className="bg-primary text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <i className="fas fa-user text-xl sm:text-2xl"></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base mb-3 sm:mb-4">
                  {member.role}
                </p>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Jandar Travels?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              We stand out from the competition with our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-shield-alt text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Safety First</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                All our vehicles are regularly maintained and our drivers are trained in safety protocols to ensure your journey is secure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-clock text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">24/7 Availability</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Round-the-clock service availability for emergency bookings, airport transfers, and last-minute travel needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
              <div className="bg-yellow-100 text-yellow-600 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-rupee-sign text-xl sm:text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Best Prices</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Competitive pricing with no hidden charges. We offer the best value for your money without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 