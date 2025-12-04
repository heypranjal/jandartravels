import React from 'react';
import { Link } from 'react-router-dom';
import delhiImg from '../assets/places/delhi/brijender-dua-pRmAcSOP8Y0-unsplash.jpg';
import agraImg from '../assets/places/agra/arun-geetha-viswanathan-8goGYCLzrLs-unsplash.jpg';
import shimlaManaliImg from '../assets/places/shimla manali/alik-ghosh-9yIO-zQe35g-unsplash.jpg';
import jaipurImg from '../assets/places/jaipur/vg-bingi-Z9s5Tt0MHKg-unsplash.jpg';
import nainitalImg from '../assets/places/nanital/priyadarshi-kinth-V56BhBV_SCE-unsplash.jpg';
import haridwarRishikeshImg from '../assets/places/haridwar rishikesh/shreyashka-maharjan-tPXP7U4IA40-unsplash.jpg';
import himachalImg from '../assets/places/himanchal/yash-kumar-roy-Lt3q3KcAqj0-unsplash.jpg';
import amritsarImg from '../assets/places/amritsar/ravi-n-jha-aU9yXmIwfkw-unsplash.jpg';
import chandigarhImg from '../assets/places/chandigarh/arpan-goyal-TiHXNVTFYAU-unsplash.jpg';

const Destinations: React.FC = () => {
  const tourPackages = [
    {
      name: 'DELHI LOCAL TOUR',
      route: '/tours/delhi-local',
      image: delhiImg,
      description: 'Explore the capital city with our comprehensive Delhi local tour package.',
      duration: '1 Day',
      price: 'Starting from ₹2,000'
    },
    {
      name: 'SAME DAY AGRA TOUR PACKAGE',
      route: '/tours/same-day-agra',
      image: agraImg,
      description: 'Visit the iconic Taj Mahal and Agra Fort in a single day trip.',
      duration: '1 Day',
      price: 'Starting from ₹3,500'
    },
    {
      name: 'SHIMLA MANALI TOUR',
      route: '/tours/shimla-manali',
      image: shimlaManaliImg,
      description: 'Experience the beauty of Himachal Pradesh with Shimla and Manali tour.',
      duration: '5-7 Days',
      price: 'Starting from ₹15,000'
    },
    {
      name: 'JAIPUR TOUR PACKAGE',
      route: '/tours/jaipur',
      image: jaipurImg,
      description: 'Discover the Pink City with our comprehensive Jaipur tour package.',
      duration: '2-3 Days',
      price: 'Starting from ₹8,000'
    },
    {
      name: 'GOLDEN TRIANGLE TOUR',
      route: '/tours/golden-triangle',
      image: agraImg,
      description: 'Explore Delhi, Agra, and Jaipur in the classic Golden Triangle tour.',
      duration: '5-6 Days',
      price: 'Starting from ₹18,000'
    },
    {
      name: 'NAINITAL TOUR PACKAGE',
      route: '/tours/nainital',
      image: nainitalImg,
      description: 'Visit the beautiful lake city of Nainital in Uttarakhand.',
      duration: '3-4 Days',
      price: 'Starting from ₹10,000'
    },
    {
      name: 'HARIDWAR RISHIKESH PILGRIMAGE TOUR',
      route: '/tours/haridwar-rishikesh',
      image: haridwarRishikeshImg,
      description: 'Spiritual journey to the holy cities of Haridwar and Rishikesh.',
      duration: '3-4 Days',
      price: 'Starting from ₹12,000'
    },
    {
      name: 'HIMACHAL TOUR PACKAGE',
      route: '/tours/himachal',
      image: himachalImg,
      description: 'Comprehensive tour of Himachal Pradesh including multiple hill stations.',
      duration: '7-10 Days',
      price: 'Starting from ₹25,000'
    },
    {
      name: 'AMRITSAR TOUR PACKAGE',
      route: '/tours/amritsar',
      image: amritsarImg,
      description: 'Visit the holy city of Amritsar and the Golden Temple.',
      duration: '2-3 Days',
      price: 'Starting from ₹8,000'
    },
    {
      name: 'CHANDIGARH TOUR PACKAGE',
      route: '/tours/chandigarh',
      image: chandigarhImg,
      description: 'Visit the beautiful planned city of Chandigarh.',
      duration: '1-2 Days',
      price: 'Starting from ₹5,000'
    }
  ];

  const outstationDestinations = [
    'DELHI TO LUDHIYANA',
    'LUDHIYANA TO DELHI',
    'DELHI TO LUCKNOW',
    'LUCKNOW TO DELHI',
    'DELHI TO CHANDIGARH',
    'DELHI TO AMBALA',
    'DELHI TO JALANDHAR',
    'DELHI TO AMRITSAR',
    'DELHI TO BHATINDA',
    'DELHI TO PATIALA',
    'DELHI TO JAMMU',
    'DELHI TO SHIMLA',
    'Delhi TO Manali',
    'DELHI TO AGRA',
    'DELHI TO JAIPUR',
    'DELHI TO DEHRADUN',
    'DELHI TO RAJASTHAN',
    'DELHI TO KHANNA',
    'DELHI TO GURGAON',
    'TAXI FOR HIMACHALPRADESH',
    'TAXI FOR SHIMLA',
    'TAXI FOR NOIDA',
    'TAXI FOR MATHURA',
    'Taxi for Nainital',
    'Taxi FOR ROHTAK',
    'TAXI for PUNJAB',
    'TAXI FOR RISHIKESH',
    'TAXI FOR MUSSOORIE',
    'DELHI TO RUDRAPUR TAXI',
    'DELHI TO BANARASI TAXI SERVICE',
    'Ghaziabad TO Agra TAXI',
    'GURGAON TO GWALIOR TAXI',
    'DELHI TO HARIDWAR TAXI',
    'DELHI TO MATHURA TAXI',
    'DELHI TO RISHIKESH TAXI',
    'DELHI TO VRINDAVAN TAXI',
    'FARIDABAD TO AGRA',
    'GHAZIABAD TO AGRA TAXI',
    'GURGAON TO AGRA TAXI',
    'DELHI TO KANPUR TAXI',
    'DELHI TO LUCKNOW TAXI',
    'DELHI TO AJMER TAXI',
    'DELHI TO FIROZABAD TAXI'
  ];

  const otherRoutes = [
    'DELHI TO SHIMLA TAXI SERVICES',
    'DELHI TO MANALI TAXI SERVICES',
    'DELHI TO LEH LADAKH TAXI SERVICES',
    'DELHI TO MUSSOORIE TAXI SERVICES',
    'DELHI TO BAREILLY TAXI',
    'DELHI TO DEHRADUN',
    'DELHI TO ETAWAH',
    'DELHI TO FIROZABAD TAXI'
  ];

  const delhiLocalServices = [
    'RENTAL CAB',
    'NOIDA TO AIRPORT',
    'NOIDA TO RAILWAY STATION',
    'GRATER NOIDA TO AIRPORT',
    'GRATER NOIDA TO RAIWAY RAILWAY STATION',
    'GURGAON TO AIRPORT',
    'FARIDABAD TO AIRPORT',
    'GHAZIABAD TO AIRPORT'
  ];

  return (
    <section id="destinations" className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6 lg:px-8">
      <div className="container-custom">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">
            India Tour Package & Outstation Services
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 xs:px-4 sm:px-0">
            Jandar Travels offers comprehensive tour packages and outstation taxi services across India. From local Delhi tours to long-distance travel, we provide reliable and comfortable transportation solutions.
          </p>
        </div>

        {/* Tour Packages */}
        <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-4 xs:mb-6 sm:mb-8 text-center">Tour Packages</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {tourPackages.map((package_, index) => (
              <div
                key={index}
                className="card overflow-hidden group relative bg-white rounded-lg shadow-md"
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
                  <img
                    src={package_.image}
                    alt={package_.name}
                    className="w-full h-32 xs:h-36 sm:h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2 p-2 xs:p-3 sm:p-4">
                      <Link to={package_.route} className="btn-secondary text-xs py-1.5 xs:py-2 px-3 min-h-touch flex items-center justify-center">
                        View Details
                      </Link>
                      <Link to="/contact-us" className="btn-primary text-xs py-1.5 xs:py-2 px-3 min-h-touch flex items-center justify-center">
                        Book Tour
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-3 xs:p-4 sm:p-6">
                  <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 xs:mb-2 group-hover:text-white transition-colors duration-700 relative z-10 line-clamp-2">
                    {package_.name}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 mb-2 xs:mb-3 sm:mb-4 leading-relaxed group-hover:text-white transition-colors duration-700 relative z-10 line-clamp-3">
                    {package_.description}
                  </p>
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center text-xs sm:text-sm text-gray-500 mb-2 xs:mb-3 sm:mb-4 space-y-1 xs:space-y-0 group-hover:text-white transition-colors duration-700 relative z-10">
                    <span className="flex items-center">
                      <i className="fas fa-clock mr-1"></i>
                      {package_.duration}
                    </span>
                    <span className="font-semibold text-primary group-hover:text-white transition-colors duration-700">
                      Contact for pricing
                    </span>
                  </div>
                  <div className="flex flex-col xs:flex-row gap-2">
                    <Link to={package_.route} className="btn-secondary text-center text-xs py-2 xs:py-2.5 sm:py-3 group-hover:bg-white group-hover:text-primary transition-colors duration-700 relative z-10 min-h-touch flex items-center justify-center flex-1">
                      View Details
                    </Link>
                    <Link to="/contact-us" className="btn-primary text-center text-xs py-2 xs:py-2.5 sm:py-3 group-hover:bg-white group-hover:text-primary transition-colors duration-700 relative z-10 min-h-touch flex items-center justify-center flex-1">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outstation Destinations */}
        <div className="bg-secondary text-white rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6 text-center">
            Outstation Popular Destinations
          </h3>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xs:gap-3 sm:gap-4">
            {outstationDestinations.map((dest, index) => (
              <Link
                key={index}
                to="/contact-us"
                className="bg-white/20 rounded-lg p-2 xs:p-2.5 sm:p-3 text-center hover:bg-white/30 transition-colors cursor-pointer min-h-touch flex items-center justify-center"
              >
                <span className="font-semibold text-xs xs:text-xs sm:text-sm leading-tight break-words">{dest}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Routes */}
        <div className="bg-secondary text-white rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 text-center">Other Routes</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
            {otherRoutes.map((route, index) => (
              <Link
                key={index}
                to="/contact-us"
                className="bg-white/20 rounded-lg p-2.5 xs:p-3 sm:p-4 text-center hover:bg-white/30 transition-colors cursor-pointer min-h-touch flex items-center justify-center"
              >
                <span className="font-semibold text-white text-xs xs:text-sm sm:text-base leading-tight">{route}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Delhi Local Services */}
        <div className="bg-secondary text-white rounded-lg p-4 xs:p-5 sm:p-6 md:p-8">
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mb-3 xs:mb-4 sm:mb-6 text-center">Delhi Local Services</h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
            {delhiLocalServices.map((service, index) => (
              <Link
                key={index}
                to="/contact-us"
                className="bg-white/20 rounded-lg p-2.5 xs:p-3 sm:p-4 text-center hover:bg-white/30 transition-colors cursor-pointer min-h-touch flex items-center justify-center"
              >
                <span className="font-semibold text-xs xs:text-sm sm:text-base leading-tight">{service}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
