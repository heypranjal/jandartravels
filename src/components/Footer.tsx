import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container-custom py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-2 xs:mr-3 mt-1 flex-shrink-0 w-4"></i>
                <div>
                  <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                    Jandar Travels<br />
                    Noida Sector - 31<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <a href="tel:+919525853388" className="flex items-center text-gray-300 hover:text-white transition-colors min-h-touch py-1">
                <i className="fas fa-phone text-primary mr-2 xs:mr-3 flex-shrink-0 w-4"></i>
                <span className="text-xs xs:text-sm sm:text-base">+91-9525853388</span>
              </a>
              <a href="mailto:dharmendrajandar9525@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors min-h-touch py-1">
                <i className="fas fa-envelope text-primary mr-2 xs:mr-3 flex-shrink-0 w-4"></i>
                <span className="text-xs xs:text-sm sm:text-base truncate">dharmendrajandar9525@gmail.com</span>
              </a>
              <div className="flex items-center py-1">
                <i className="fas fa-globe text-primary mr-2 xs:mr-3 flex-shrink-0 w-4"></i>
                <span className="text-gray-300 text-xs xs:text-sm sm:text-base">www.jandartravels.com</span>
              </div>
            </div>
          </div>

          {/* Taxi Services */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Taxi Services</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3">
              <li><Link to="/vehicles/innova-crysta" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">INNOVA CRYSTA</Link></li>
              <li><Link to="/vehicles/innova-hybrid" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">INNOVA HYBRID</Link></li>
              <li><Link to="/vehicles/innova" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">INNOVA</Link></li>
              <li><Link to="/vehicles/ertiga" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">ERTIGA</Link></li>
              <li><Link to="/vehicles/swift-dzire" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">Swift DZIRE</Link></li>
              <li><Link to="/vehicles/etios" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">Etios</Link></li>
              <li><Link to="/vehicles/brezza" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">Brezza</Link></li>
              <li><Link to="/vehicles/bus" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">Bus</Link></li>
              <li><Link to="/vehicles/tempo-travellers" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">Tempo Travellers</Link></li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Tour Packages</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3">
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">DELHI LOCAL TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">SAME DAY AGRA TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">SHIMLA MANALI TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">JAIPUR TOUR PACKAGE</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">GOLDEN TRIANGLE TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">NANITAL TOUR PACKAGE</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">HARIDWAR RISHIKESH</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">HIMACHAL TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">MUSSOORIE TOUR</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">RAJASTHAN TOUR</Link></li>
            </ul>
          </div>

          {/* Local Services */}
          <div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Local Services</h3>
            <ul className="space-y-1 xs:space-y-2 sm:space-y-3">
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">RENTAL CAB</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">NOIDA TO AIRPORT</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">NOIDA TO RAILWAY</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">GREATER NOIDA TO AIRPORT</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">GURGAON TO AIRPORT</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">FARIDABAD TO AIRPORT</Link></li>
              <li><Link to="/contact-us" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 inline-block min-h-touch">GHAZIABAD TO AIRPORT</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 xs:mt-8 sm:mt-10 md:mt-12 pt-4 xs:pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 xs:space-y-4 sm:space-y-0">
            <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4 sm:space-x-6 text-center xs:text-left">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 min-h-touch inline-flex items-center justify-center xs:justify-start">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-gray-300 hover:text-white transition-colors text-xs xs:text-sm sm:text-base py-1 min-h-touch inline-flex items-center justify-center xs:justify-start">Terms And Conditions</Link>
            </div>
            <div className="text-gray-300 text-xs xs:text-sm sm:text-base text-center">
              Copyright @ 2025 Jandar Travels. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons - With safe area support */}
      <div className="fixed bottom-3 xs:bottom-4 sm:bottom-6 left-3 xs:left-4 sm:left-6 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <a
          href="tel:+919525853388"
          className="bg-primary text-white p-3 xs:p-3.5 sm:p-4 md:p-5 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center min-w-touch min-h-touch"
          aria-label="Call Jandar Travels"
        >
          <i className="fas fa-phone text-xl xs:text-2xl sm:text-3xl md:text-4xl"></i>
        </a>
      </div>
      <div className="fixed bottom-3 xs:bottom-4 sm:bottom-6 right-3 xs:right-4 sm:right-6 z-50" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        <a
          href="https://wa.me/919525853388"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 xs:p-3.5 sm:p-4 md:p-5 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center min-w-touch min-h-touch"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-xl xs:text-2xl sm:text-3xl md:text-4xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
