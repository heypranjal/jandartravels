import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/contact-us');
  };

  const features = [
    {
      icon: 'fas fa-users',
      title: 'Ample Space',
      description: 'Explore our Tempo Travellers, ideal for groups of all sizes. With ample passenger space and luggage storage, our vehicles are perfect for family trips, friend outings, or large tour groups.'
    },
    {
      icon: 'fas fa-couch',
      title: 'Comfort and Convenience',
      description: 'Designed for a smooth and comfortable ride, our Tempo Travellers come equipped with features like air conditioning, comfortable seats with headrests, and spacious interiors.'
    },
    {
      icon: 'fas fa-user-tie',
      title: 'Experienced Drivers',
      description: 'We provide experienced and trained drivers who are well-versed in local routes and traffic conditions. Their expertise ensures a safe and stress-free travel experience.'
    },
    {
      icon: 'fas fa-clock',
      title: '24/7 Availability',
      description: 'We operate 24/7, providing round-the-clock availability for airport transfers, emergency travel needs, and last-minute bookings.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Benefits of Booking Tempo Traveller on Rent
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Discover the convenience and comfort of booking a Tempo Traveller for your travel needs. Our Tempo Travellers are designed to accommodate groups of all sizes, making them perfect for family vacations, group outings, corporate trips, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card text-center p-6 sm:p-8">
              <div className="text-4xl sm:text-5xl text-primary mb-4 sm:mb-6">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose Jandar Travels?
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Well-Maintained Fleet</h4>
                    <p className="text-gray-600 text-sm sm:text-base">All our vehicles are regularly serviced and maintained to ensure your safety and comfort.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">GPS Enabled</h4>
                    <p className="text-gray-600 text-sm sm:text-base">All our tempo travellers are equipped with GPS tracking for real-time monitoring and safety.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Sanitized Vehicles</h4>
                    <p className="text-gray-600 text-sm sm:text-base">We maintain high hygiene standards with regular sanitization of all our vehicles.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                    <i className="fas fa-check text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Competitive Pricing</h4>
                    <p className="text-gray-600 text-sm sm:text-base">We offer the best rates in the market without compromising on quality and service.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-6 sm:p-8 text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Book?</h4>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">Get in touch with us for the best tempo traveller rental experience in Delhi NCR.</p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-phone mr-3 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">+91-72900 00667</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">booking@jandartravels.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt mr-3 text-sm sm:text-base"></i>
                  <span className="text-sm sm:text-base">Noida Sector - 31, India</span>
                </div>
              </div>
              <button onClick={handleBookNow} className="btn-secondary w-full mt-4 sm:mt-6 text-sm sm:text-base py-3">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 