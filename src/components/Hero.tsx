import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);

  const handleBookNow = () => {
    navigate('/contact-us');
  };

  const carouselImages = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
      title: 'Desert Adventure',
      subtitle: 'Brown camel on open field, Rann of Kutch, India'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1599632740188-8a4f152a8342?w=1200&auto=format&fit=crop&q=80',
      title: 'Incredible India',
      subtitle: 'Travel moments across India'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1595419293062-457444d419b8?w=1200&auto=format&fit=crop&q=80',
      title: 'Scenic Journeys',
      subtitle: 'Explore the beauty of India with Jandar Travels'
    }
  ];

  // Splash screen effect - hide after 2.5 seconds
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(splashTimer);
  }, []);

  // Auto-slide every 5 seconds (only when splash is hidden)
  useEffect(() => {
    if (!showSplash) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [carouselImages.length, showSplash]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <>
      {/* Full Screen Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-4 animate-pulse">
              Welcome to Jandar Travels
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-white mx-auto animate-ping"></div>
          </div>
        </div>
      )}

      {/* Main Carousel Section */}
      <section id="home" className="pt-16 sm:pt-20 relative h-screen">
        {/* Carousel Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Carousel Slides */}
          <div 
            className="flex transition-transform duration-[2500ms] ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((slide, index) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                {/* Background Image */}
                <div className="w-full h-full relative flex items-center justify-center bg-black">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-contain object-center transition-all duration-500"
                    style={{ maxHeight: '100vh', maxWidth: '100vw' }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white z-10 max-w-4xl">
              <div className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4">
                Premium Travel Services
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                WELCOME TO
              </div>
              <div className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-4">
                JANDAR TRAVELS
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-6">
                NOIDA SECTOR - 31
              </div>
              <div className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8">
                PLEASE LET US KNOW HOW WE CAN HELP YOU
              </div>
              
              {/* Centered Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link to="/contact-us" className="btn-secondary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3">
                  Book Taxi
                </Link>
                <button onClick={handleBookNow} className="btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-2 sm:py-3">
                  Tour Packages
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
          >
            <i className="fas fa-chevron-right text-lg sm:text-xl"></i>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 