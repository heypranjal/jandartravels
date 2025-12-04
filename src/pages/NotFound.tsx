import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Jandar Travels</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Jandar Travels homepage for taxi booking and tour packages in Noida." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="pt-28 xs:pt-32 sm:pt-36 md:pt-40 min-h-screen bg-gray-50">
        <div className="container-custom px-3 xs:px-4 sm:px-6 py-8 xs:py-12 sm:py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-6 xs:mb-8 sm:mb-10">
              <div className="text-8xl xs:text-9xl sm:text-[12rem] font-bold text-primary opacity-20">
                404
              </div>
              <div className="relative -mt-12 xs:-mt-16 sm:-mt-20">
                <i className="fas fa-car text-4xl xs:text-5xl sm:text-6xl text-primary animate-bounce"></i>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">
              Oops! Page Not Found
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 xs:mb-8 sm:mb-10 px-2 xs:px-4">
              The page you're looking for seems to have taken a wrong turn.
              Don't worry, we'll help you get back on track!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center mb-8 xs:mb-10 sm:mb-12">
              <Link
                to="/"
                className="btn-primary text-sm xs:text-base sm:text-lg px-6 xs:px-8 py-3 xs:py-4 min-h-touch flex items-center justify-center"
              >
                <i className="fas fa-home mr-2"></i>
                Go to Homepage
              </Link>
              <Link
                to="/contact-us"
                className="btn-secondary text-sm xs:text-base sm:text-lg px-6 xs:px-8 py-3 xs:py-4 min-h-touch flex items-center justify-center"
              >
                <i className="fas fa-phone mr-2"></i>
                Contact Us
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-4 xs:p-6 sm:p-8">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-4 xs:mb-6">
                Popular Destinations
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-3 sm:gap-4">
                <Link
                  to="/tours/delhi-local"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  Delhi Local Tour
                </Link>
                <Link
                  to="/tours/same-day-agra"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  Same Day Agra
                </Link>
                <Link
                  to="/tours/shimla-manali"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  Shimla Manali
                </Link>
                <Link
                  to="/tours/golden-triangle"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  Golden Triangle
                </Link>
                <Link
                  to="/vehicles/innova-crysta"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  Innova Crysta
                </Link>
                <Link
                  to="/about-us"
                  className="bg-gray-100 hover:bg-primary hover:text-white rounded-lg p-2 xs:p-3 text-xs xs:text-sm sm:text-base transition-colors min-h-touch flex items-center justify-center"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 xs:mt-10 sm:mt-12 text-gray-600">
              <p className="text-sm xs:text-base mb-2">Need immediate assistance?</p>
              <a
                href="tel:+919525853388"
                className="text-primary hover:text-blue-700 font-semibold text-base xs:text-lg sm:text-xl inline-flex items-center min-h-touch"
              >
                <i className="fas fa-phone mr-2"></i>
                +91-9525853388
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
