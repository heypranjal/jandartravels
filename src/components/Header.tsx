import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/faviconLogo/jandarLogo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookNow = () => {
    navigate('/contact-us');
  };

  // Function to close mobile menu when navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Social profile links
  const instagramUrl = 'https://www.instagram.com/jandartravels/';
  const youtubeUrl = 'https://www.youtube.com/@jandartravels'; // Replace with your actual YouTube
  const facebookUrl = 'https://www.facebook.com/jandartravels'; // Replace with your actual Facebook

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      {/* Upper Division: Contact Info */}
      <div style={{ backgroundColor: 'rgb(233,162,59)' }} className="border-b border-gray-200">
        <div className="container-custom flex flex-col sm:flex-row justify-between items-center py-2" style={{ minHeight: '40px' }}>
          {/* Left: Phone & Email */}
          <div className="flex items-center text-xs sm:text-sm text-gray-800">
            <div className="flex items-center pr-3">
              <i className="fas fa-phone text-primary mr-1"></i>
              <a href="tel:+919525853388" className="hover:text-primary transition-colors">+91- 95258 53388</a>
            </div>
            <div className="h-5 border-l border-gray-300 mx-2 opacity-40"></div>
            <div className="flex items-center pl-3">
              <i className="fas fa-envelope text-primary mr-1"></i>
              <a href="mailto:dharmendrajandar9525@gmail.com" className="hover:text-primary transition-colors">dharmendrajandar9525@gmail.com</a>
            </div>
          </div>
          {/* Right: Social Icons */}
          <div className="flex items-center mt-2 sm:mt-0">
            <div className="h-5 border-l border-gray-300 mx-2 opacity-40"></div>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 flex items-center">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <div className="h-5 border-l border-gray-300 mx-2 opacity-40"></div>
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 flex items-center">
              <i className="fab fa-youtube text-lg"></i>
            </a>
            <div className="h-5 border-l border-gray-300 mx-2 opacity-40"></div>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 flex items-center">
              <i className="fab fa-instagram text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Lower Division: Main Navbar */}
      <div className="max-w-5xl mx-auto bg-white px-4 sm:px-6" style={{ minHeight: '80px' }}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center -ml-2 sm:-ml-4">
            <Link to="/" className="flex items-center" onClick={handleNavLinkClick}>
              <img src={logo} alt="Jandar Travels Logo" className="h-12 w-auto mr-2" />
              <span className="text-2xl font-bold text-primary">Jandar Travels</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-primary transition-colors font-medium">About Us</Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center font-medium">
                Taxi Services
                <i className="fas fa-chevron-down ml-1"></i>
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/vehicles/innova-crysta" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">INNOVA CRYSTA</Link>
                <Link to="/vehicles/innova-hybrid" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">INNOVA HYBRID</Link>
                <Link to="/vehicles/innova" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">INNOVA</Link>
                <Link to="/vehicles/ertiga" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">ERTIGA</Link>
                <Link to="/vehicles/swift-dzire" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Swift DZIRE</Link>
                <Link to="/vehicles/etios" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Etios</Link>
                <Link to="/vehicles/brezza" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Brezza</Link>
                <Link to="/vehicles/bus" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">Bus</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition-colors flex items-center font-medium">
                Tour Packages
                <i className="fas fa-chevron-down ml-1"></i>
              </button>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/tours/delhi-local" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">DELHI LOCAL TOUR</Link>
                <Link to="/tours/same-day-agra" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">SAME DAY AGRA TOUR</Link>
                <Link to="/tours/shimla-manali" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">SHIMLA MANALI TOUR</Link>
                <Link to="/tours/jaipur" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">JAIPUR TOUR PACKAGE</Link>
                <Link to="/tours/golden-triangle" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">GOLDEN TRIANGLE TOUR</Link>
                <Link to="/tours/nainital" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">NAINITAL TOUR PACKAGE</Link>
                <Link to="/tours/haridwar-rishikesh" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">HARIDWAR RISHIKESH PILGRIMAGE</Link>
                <Link to="/tours/himachal" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">HIMACHAL TOUR PACKAGE</Link>
                <Link to="/tours/amritsar" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">AMRITSAR TOUR PACKAGE</Link>
                <Link to="/tours/chandigarh" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors">CHANDIGARH TOUR PACKAGE</Link>
              </div>
            </div>
            <Link to="/contact-us" className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</Link>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block ml-6">
            <Link to="/contact-us" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMenu}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            {/* Contact Info - Mobile */}
            <div className="px-4 py-3 space-y-3 border-b border-gray-200">
              <div className="flex items-center py-2">
                <i className="fas fa-phone text-primary mr-3"></i>
                <a href="tel:+919525853388" className="text-sm hover:text-primary transition-colors">+91- 95258 53388</a>
              </div>
              <div className="flex items-center py-2">
                <i className="fas fa-envelope text-primary mr-3"></i>
                <a href="mailto:dharmendrajandar9525@gmail.com" className="text-sm hover:text-primary transition-colors">dharmendrajandar9525@gmail.com</a>
              </div>
              <div className="flex items-center py-2">
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 flex items-center mr-4">
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 flex items-center mr-4">
                  <i className="fab fa-youtube text-lg"></i>
                </a>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 flex items-center">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
              </div>
            </div>
            <nav className="px-4 py-6 space-y-6">
              <Link to="/" className="block text-gray-700 hover:text-primary font-medium" onClick={handleNavLinkClick}>Home</Link>
              <Link to="/about-us" className="block text-gray-700 hover:text-primary font-medium" onClick={handleNavLinkClick}>About Us</Link>
              {/* Mobile Taxi Services */}
              <div className="space-y-3">
                <div className="font-semibold text-gray-900 text-lg">Taxi Services</div>
                <Link to="/vehicles/innova-crysta" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• INNOVA CRYSTA</Link>
                <Link to="/vehicles/innova-hybrid" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• INNOVA HYBRID</Link>
                <Link to="/vehicles/innova" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• INNOVA</Link>
                <Link to="/vehicles/ertiga" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• ERTIGA</Link>
                <Link to="/vehicles/swift-dzire" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• Swift DZIRE</Link>
                <Link to="/vehicles/etios" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• Etios</Link>
                <Link to="/vehicles/brezza" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• Brezza</Link>
                <Link to="/vehicles/bus" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• Bus</Link>
              </div>
              {/* Mobile Tour Packages */}
              <div className="space-y-3">
                <div className="font-semibold text-gray-900 text-lg">Tour Packages</div>
                <Link to="/tours/delhi-local" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• DELHI LOCAL TOUR</Link>
                <Link to="/tours/same-day-agra" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• SAME DAY AGRA TOUR</Link>
                <Link to="/tours/shimla-manali" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• SHIMLA MANALI TOUR</Link>
                <Link to="/tours/jaipur" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• JAIPUR TOUR PACKAGE</Link>
                <Link to="/tours/golden-triangle" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• GOLDEN TRIANGLE TOUR</Link>
                <Link to="/tours/nainital" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• NAINITAL TOUR PACKAGE</Link>
                <Link to="/tours/haridwar-rishikesh" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• HARIDWAR RISHIKESH PILGRIMAGE</Link>
                <Link to="/tours/himachal" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• HIMACHAL TOUR PACKAGE</Link>
                <Link to="/tours/amritsar" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• AMRITSAR TOUR PACKAGE</Link>
                <Link to="/tours/chandigarh" className="block text-gray-700 hover:text-primary pl-4 py-2" onClick={handleNavLinkClick}>• CHANDIGARH TOUR PACKAGE</Link>
              </div>
              <Link to="/contact-us" className="block text-gray-700 hover:text-primary font-medium" onClick={handleNavLinkClick}>Contact</Link>
              <Link to="/contact-us" className="btn-primary w-full mt-6" onClick={handleNavLinkClick}>Book Now</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 