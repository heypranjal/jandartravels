import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-primary mr-3 mt-1 flex-shrink-0"></i>
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Jandar Travels<br />
                    Noida Sector - 31<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-primary mr-3 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base">+91-72900 00667</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary mr-3 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base">booking@jandartravels.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-globe text-primary mr-3 flex-shrink-0"></i>
                <span className="text-gray-300 text-sm sm:text-base">www.jandartravels.com</span>
              </div>
            </div>
          </div>

          {/* Taxi Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Taxi Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#innova-crysta" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">INNOVA CRYSTA</a></li>
              <li><a href="#innova-hybrid" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">INNOVA HYBRID</a></li>
              <li><a href="#innova" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">INNOVA</a></li>
              <li><a href="#ertiga" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">ERTIGA</a></li>
              <li><a href="#swift-dzire" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Swift DZIRE</a></li>
              <li><a href="#etios" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Etios</a></li>
              <li><a href="#breeza" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Brezza</a></li>
              <li><a href="#bus" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Bus</a></li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Tour Packages</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#delhi-local" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">DELHI LOCAL TOUR</a></li>
              <li><a href="#agra-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">SAME DAY AGRA TOUR</a></li>
              <li><a href="#shimla-manali" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">SHIMLA MANALI TOUR</a></li>
              <li><a href="#jaipur-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">JAIPUR TOUR PACKAGE</a></li>
              <li><a href="#golden-triangle" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">GOLDEN TRIANGLE TOUR</a></li>
              <li><a href="#nainital-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">NANITAL TOUR PACKAGE</a></li>
              <li><a href="#haridwar-rishikesh" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">HARIDWAR RISHIKESH PILGRIMAGE</a></li>
              <li><a href="#himachal-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">HIMACHAL TOUR PACKAGE</a></li>
              <li><a href="#mussoorie-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">MUSSOORIE TOUR PACKAGE</a></li>
              <li><a href="#rajasthan-tour" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">RAJASTHAN GRAND TOUR</a></li>
            </ul>
          </div>

          {/* Local Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Local Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#rental-cab" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">RENTAL CAB</a></li>
              <li><a href="#airport-transfer" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">NOIDA TO AIRPORT</a></li>
              <li><a href="#railway-transfer" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">NOIDA TO RAILWAY STATION</a></li>
              <li><a href="#greater-noida" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">GRATER NOIDA TO AIRPORT</a></li>
              <li><a href="#gurgaon-airport" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">GURGAON TO AIRPORT</a></li>
              <li><a href="#faridabad-airport" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">FARIDABAD TO AIRPORT</a></li>
              <li><a href="#ghaziabad-airport" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">GHAZIABAD TO AIRPORT</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Terms And Conditions</Link>
            </div>
            <div className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              Copyright @ 2024 Jandar Travels All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col space-y-2 sm:space-y-3 z-50">
        <a
          href="https://wa.me/919525853388"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp text-lg sm:text-xl"></i>
        </a>
        <a
          href="tel:+917290000667"
          className="bg-primary text-white p-2.5 sm:p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
          aria-label="Call Jandar Travels"
        >
          <i className="fas fa-phone text-lg sm:text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer; 