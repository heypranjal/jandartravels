import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import agraImg from '../../assets/places/agra/arun-geetha-viswanathan-8goGYCLzrLs-unsplash.jpg';
import delhiImg from '../../assets/places/delhi/brijender-dua-pRmAcSOP8Y0-unsplash.jpg';
import jaipurImg from '../../assets/places/jaipur/vg-bingi-Z9s5Tt0MHKg-unsplash.jpg';

const GoldenTriangleTour: React.FC = () => {
  return (
    <>
      <SEO
        title="Golden Triangle Tour - Delhi Agra Jaipur Package"
        description="Book Golden Triangle tour covering Delhi, Agra & Jaipur. 5-6 days package with Taj Mahal, Amber Fort visits. AC car, hotels. Call +91-9525853388"
        keywords="golden triangle tour, delhi agra jaipur tour, golden triangle package, india tour package, taj mahal amber fort tour"
        canonicalUrl="/tours/golden-triangle"
      />
      <div className="pt-28 sm:pt-32">
      <section className="bg-gradient-to-r from-yellow-900 to-orange-700 text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">GOLDEN TRIANGLE TOUR</h1>
            <p className="text-xl text-yellow-100 max-w-2xl mx-auto">Experience Delhi, Agra, and Jaipur - the golden triangle of India.</p>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={agraImg} 
                  alt="Taj Mahal, Agra by Arun Geetha Viswanathan"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={delhiImg} 
                    alt="Jama Masjid, Delhi by Brijender Dua"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={jaipurImg} 
                    alt="Hawa Mahal, Jaipur by VG Bingi"
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
                      <p className="text-gray-600">6-7 Days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-road text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Distance Covered</h3>
                      <p className="text-gray-600">Approx. 1,200 km (Delhi-Agra-Jaipur-Delhi)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-rupee-sign text-primary mr-3 text-xl"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">Starting Price</h3>
                      <p className="text-gray-600">₹18,000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Delhi: Red Fort, Qutub Minar</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Agra: Taj Mahal, Agra Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Jaipur: Hawa Mahal, Amber Fort</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Fatehpur Sikri</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Local Markets</li>
                  <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2"></i>Traditional Cuisine</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-yellow-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Golden Triangle Tour?</h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">Experience the best of North India. Contact us now for booking and availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us" className="btn-secondary">
              Book Now
            </Link>
            <a href="tel:+919525853388" className="btn-primary">
              <i className="fas fa-phone mr-2"></i>
              Call +91- 95258 53388
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default GoldenTriangleTour; 