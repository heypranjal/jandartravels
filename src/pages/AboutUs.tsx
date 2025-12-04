import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    <>
      <Helmet>
        <title>About Us - Jandar Travels | Trusted Taxi Service in Noida Since Years</title>
        <meta name="description" content="Learn about Jandar Travels - Noida's trusted taxi and tour service provider. Professional drivers, well-maintained vehicles, 24/7 customer support. Located in Noida Sector-31. 1000+ happy customers." />
        <meta name="keywords" content="about jandar travels, taxi company noida, travel agency noida sector 31, trusted cab service, professional drivers noida, car rental company india" />
        <link rel="canonical" href="https://jandartravels.com/about-us" />
        <meta property="og:title" content="About Jandar Travels - Trusted Taxi Service in Noida" />
        <meta property="og:description" content="Professional taxi and tour services in Noida. 5+ years of experience, 24/7 support, well-maintained vehicles." />
        <meta property="og:url" content="https://jandartravels.com/about-us" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="pt-28 xs:pt-32 sm:pt-36 md:pt-40">
        {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 xs:py-10 sm:py-12 md:py-16">
        <div className="container-custom px-3 xs:px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4">
              About Jandar Travels
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-2 xs:px-4 sm:px-0">
              Your trusted partner for premium taxi services and unforgettable tour experiences in Noida Sector-31 and across India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Our Story</h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                Jandar Travels was established with a vision to provide premium transportation services in Noida Sector-31.
                We started as a small taxi service and have grown into a comprehensive travel solutions provider.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for
                thousands of customers who trust us with their travel needs.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed">
                Today, we offer a wide range of services including luxury taxi rentals, tour packages, airport transfers,
                and corporate travel solutions across India.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
              <div className="text-center">
                <i className="fas fa-car text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-primary mb-2 xs:mb-3 sm:mb-4"></i>
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1 xs:mb-2">Premium Fleet</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600">Well-maintained vehicles for your comfort and safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-2 xs:p-3 sm:p-4">
                <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-0.5 xs:mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-blue-100 text-xs xs:text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-gray-50 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">What We Offer</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 xs:px-4 sm:px-0">
              Comprehensive travel solutions tailored to meet all your transportation and tour requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {services.map((service, index) => (
              <div key={index} className="card text-center p-4 xs:p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
                <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-primary mb-3 xs:mb-4 sm:mb-6">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 lg:gap-12">
            <div className="bg-primary text-white rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6">Our Mission</h3>
              <p className="text-sm xs:text-base sm:text-lg text-blue-100 mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                To provide reliable, comfortable, and affordable transportation services while ensuring the highest
                standards of safety and customer satisfaction.
              </p>
              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 text-blue-100">
                <li className="flex items-start">
                  <i className="fas fa-check mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Customer satisfaction is our top priority</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Maintain the highest safety standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Provide competitive pricing</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary text-white rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6">Our Vision</h3>
              <p className="text-sm xs:text-base sm:text-lg text-yellow-100 mb-3 xs:mb-4 sm:mb-6 leading-relaxed">
                To become the leading travel service provider in Noida and surrounding areas, known for excellence,
                reliability, and customer-centric approach.
              </p>
              <ul className="space-y-2 xs:space-y-2.5 sm:space-y-3 text-yellow-100">
                <li className="flex items-start">
                  <i className="fas fa-star mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Expand our fleet and services</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Build long-term customer relationships</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                  <span className="text-xs xs:text-sm sm:text-base">Embrace technology for better service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-gray-50 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">Our Team</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 xs:px-4 sm:px-0">
              Dedicated professionals committed to providing you with the best travel experience.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center p-4 xs:p-5 sm:p-6 md:p-8 bg-white rounded-lg shadow-md">
                <div className="bg-primary text-white rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                  <i className="fas fa-user text-base xs:text-lg sm:text-xl md:text-2xl"></i>
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 xs:mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-xs xs:text-sm sm:text-base mb-2 xs:mb-3 sm:mb-4">
                  {member.role}
                </p>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">Why Choose Jandar Travels?</h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 xs:px-4 sm:px-0">
              We stand out from the competition with our commitment to excellence and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-lg p-4 xs:p-5 sm:p-6 md:p-8 text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                <i className="fas fa-shield-alt text-base xs:text-lg sm:text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">Safety First</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                All our vehicles are regularly maintained and our drivers are trained in safety protocols to ensure your journey is secure.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 xs:p-5 sm:p-6 md:p-8 text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                <i className="fas fa-clock text-base xs:text-lg sm:text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">24/7 Availability</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                Round-the-clock service availability for emergency bookings, airport transfers, and last-minute travel needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 xs:p-5 sm:p-6 md:p-8 text-center xs:col-span-2 lg:col-span-1">
              <div className="bg-yellow-100 text-yellow-600 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center mx-auto mb-3 xs:mb-4 sm:mb-6">
                <i className="fas fa-rupee-sign text-base xs:text-lg sm:text-xl md:text-2xl"></i>
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">Best Prices</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">
                Competitive pricing with no hidden charges. We offer the best value for your money without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AboutUs;
