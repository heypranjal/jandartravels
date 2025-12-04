import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu when navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Social profile links
  const instagramUrl = 'https://www.instagram.com/dharmendrajandar/';
  const youtubeUrl = 'https://www.youtube.com/@dharmendrajandarvlogs9223';
  const facebookUrl = 'https://www.facebook.com/dharmendrajandar/';

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Upper Division: Contact Info */}
      <div style={{ backgroundColor: 'rgb(233,162,59)' }} className="border-b border-gray-200">
        <div className="container-custom flex flex-col xs:flex-row justify-between items-center py-1 xs:py-2 px-2 xs:px-4" style={{ minHeight: '36px' }}>
          {/* Left: Phone & Email */}
          <div className="flex items-center text-xs text-gray-800 flex-wrap justify-center xs:justify-start">
            <a href="tel:+919525853388" className="hover:text-primary transition-colors flex items-center min-h-touch py-1 px-2">
              <i className="fas fa-phone text-primary mr-1"></i>
              <span>+91-9525853388</span>
            </a>
            <div className="hidden xs:block h-4 border-l border-gray-300 mx-1 opacity-40"></div>
            <a href="mailto:dharmendrajandar9525@gmail.com" className="hover:text-primary transition-colors flex items-center min-h-touch py-1 px-2 truncate max-w-[200px] xs:max-w-none">
              <i className="fas fa-envelope text-primary mr-1"></i>
              <span className="truncate">dharmendrajandar9525@gmail.com</span>
            </a>
          </div>
          {/* Right: Social Icons */}
          <div className="flex items-center mt-1 xs:mt-0">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 flex items-center justify-center min-w-touch min-h-touch p-2">
              <i className="fab fa-facebook-f text-base xs:text-lg"></i>
            </a>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 flex items-center justify-center min-w-touch min-h-touch p-2">
              <i className="fab fa-youtube text-base xs:text-lg"></i>
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 flex items-center justify-center min-w-touch min-h-touch p-2">
              <i className="fab fa-instagram text-base xs:text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Lower Division: Main Navbar */}
      <div className="bg-white px-2 xs:px-4 sm:px-6" style={{ minHeight: '70px' }}>
        <div className="flex justify-between items-center py-2 xs:py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={handleNavLinkClick}>
              <img
                src="https://i.ibb.co/ZzQdFnx9/Whats-App-Image-2025-12-05-at-03-37-13.jpg"
                alt="Jandar Travels Logo"
                className="h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full object-cover"
              />
              <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-primary ml-2 xs:ml-3">Jandar Travels</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base">About Us</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center font-medium text-sm xl:text-base min-h-touch">
                Taxi Services
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 xl:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/vehicles/innova-crysta" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">INNOVA CRYSTA</Link>
                <Link to="/vehicles/innova-hybrid" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">INNOVA HYBRID</Link>
                <Link to="/vehicles/innova" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">INNOVA</Link>
                <Link to="/vehicles/ertiga" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">ERTIGA</Link>
                <Link to="/vehicles/swift-dzire" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">Swift DZIRE</Link>
                <Link to="/vehicles/etios" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">Etios</Link>
                <Link to="/vehicles/brezza" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">Brezza</Link>
                <Link to="/vehicles/bus" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">Bus</Link>
                <Link to="/vehicles/tempo-traveller-details" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">Tempo Travellers</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center font-medium text-sm xl:text-base min-h-touch">
                Tour Packages
                <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 xl:w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link to="/tours/delhi-local" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">DELHI LOCAL TOUR</Link>
                <Link to="/tours/same-day-agra" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">SAME DAY AGRA TOUR</Link>
                <Link to="/tours/shimla-manali" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">SHIMLA MANALI TOUR</Link>
                <Link to="/tours/jaipur" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">JAIPUR TOUR PACKAGE</Link>
                <Link to="/tours/golden-triangle" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">GOLDEN TRIANGLE TOUR</Link>
                <Link to="/tours/nainital" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">NAINITAL TOUR PACKAGE</Link>
                <Link to="/tours/haridwar-rishikesh" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">HARIDWAR RISHIKESH PILGRIMAGE</Link>
                <Link to="/tours/himachal" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">HIMACHAL TOUR PACKAGE</Link>
                <Link to="/tours/amritsar" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">AMRITSAR TOUR PACKAGE</Link>
                <Link to="/tours/chandigarh" className="block px-4 py-2 xl:py-3 text-gray-700 hover:bg-gray-100 transition-colors text-sm">CHANDIGARH TOUR PACKAGE</Link>
              </div>
            </div>
            <Link to="/contact-us" className="text-gray-700 hover:text-primary transition-colors font-medium text-sm xl:text-base">Contact</Link>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block ml-4 lg:ml-6">
            <Link to="/contact-us" className="btn-primary text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-3">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 min-w-touch min-h-touch flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t max-h-[70vh] overflow-y-auto">
            {/* Contact Info - Mobile */}
            <div className="px-3 xs:px-4 py-3 space-y-2 border-b border-gray-200">
              <a href="tel:+919525853388" className="flex items-center py-2 min-h-touch hover:text-primary transition-colors">
                <i className="fas fa-phone text-primary mr-3 w-5"></i>
                <span className="text-sm">+91-9525853388</span>
              </a>
              <a href="mailto:dharmendrajandar9525@gmail.com" className="flex items-center py-2 min-h-touch hover:text-primary transition-colors">
                <i className="fas fa-envelope text-primary mr-3 w-5"></i>
                <span className="text-sm truncate">dharmendrajandar9525@gmail.com</span>
              </a>
              <div className="flex items-center py-2 space-x-2">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 flex items-center justify-center min-w-touch min-h-touch p-2">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 flex items-center justify-center min-w-touch min-h-touch p-2">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 flex items-center justify-center min-w-touch min-h-touch p-2">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            <nav className="px-3 xs:px-4 py-4 space-y-1">
              <Link to="/" className="block text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-2 rounded min-h-touch" onClick={handleNavLinkClick}>Home</Link>
              <Link to="/about-us" className="block text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-2 rounded min-h-touch" onClick={handleNavLinkClick}>About Us</Link>

              {/* Mobile Taxi Services */}
              <div className="py-2">
                <div className="font-semibold text-gray-900 text-base px-2 py-2">Taxi Services</div>
                <div className="space-y-1 pl-2">
                  <Link to="/vehicles/innova-crysta" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>INNOVA CRYSTA</Link>
                  <Link to="/vehicles/innova-hybrid" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>INNOVA HYBRID</Link>
                  <Link to="/vehicles/innova" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>INNOVA</Link>
                  <Link to="/vehicles/ertiga" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>ERTIGA</Link>
                  <Link to="/vehicles/swift-dzire" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>Swift DZIRE</Link>
                  <Link to="/vehicles/etios" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>Etios</Link>
                  <Link to="/vehicles/brezza" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>Brezza</Link>
                  <Link to="/vehicles/bus" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>Bus</Link>
                  <Link to="/vehicles/tempo-traveller-details" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>Tempo Travellers</Link>
                </div>
              </div>

              {/* Mobile Tour Packages */}
              <div className="py-2">
                <div className="font-semibold text-gray-900 text-base px-2 py-2">Tour Packages</div>
                <div className="space-y-1 pl-2">
                  <Link to="/tours/delhi-local" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>DELHI LOCAL TOUR</Link>
                  <Link to="/tours/same-day-agra" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>SAME DAY AGRA TOUR</Link>
                  <Link to="/tours/shimla-manali" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>SHIMLA MANALI TOUR</Link>
                  <Link to="/tours/jaipur" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>JAIPUR TOUR PACKAGE</Link>
                  <Link to="/tours/golden-triangle" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>GOLDEN TRIANGLE TOUR</Link>
                  <Link to="/tours/nainital" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>NAINITAL TOUR PACKAGE</Link>
                  <Link to="/tours/haridwar-rishikesh" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>HARIDWAR RISHIKESH PILGRIMAGE</Link>
                  <Link to="/tours/himachal" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>HIMACHAL TOUR PACKAGE</Link>
                  <Link to="/tours/amritsar" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>AMRITSAR TOUR PACKAGE</Link>
                  <Link to="/tours/chandigarh" className="block text-gray-700 hover:text-primary hover:bg-gray-50 py-2 px-3 rounded text-sm min-h-touch flex items-center" onClick={handleNavLinkClick}>CHANDIGARH TOUR PACKAGE</Link>
                </div>
              </div>

              <Link to="/contact-us" className="block text-gray-700 hover:text-primary hover:bg-gray-50 font-medium py-3 px-2 rounded min-h-touch" onClick={handleNavLinkClick}>Contact</Link>
              <Link to="/contact-us" className="btn-primary w-full mt-4 text-center py-3" onClick={handleNavLinkClick}>Book Now</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
