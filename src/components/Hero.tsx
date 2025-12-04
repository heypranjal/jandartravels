import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import splashImage from '../assets/faviconLogo/splashJandar.jpeg';
import heroImg1 from '../assets/hero/pexels-hpchothe93-3858790.jpg';
import heroImg2 from '../assets/hero/pexels-subrata-deb-1282362-4334157.jpg';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSplash, setShowSplash] = useState(true);
  const [imgError, setImgError] = useState<{ [key: number]: boolean }>({});

  const handleBookNow = () => {
    navigate('/contact-us');
  };

  const carouselImages = [
    {
      id: 1,
      image: heroImg1,
      title: 'Beautiful Road',
      subtitle: 'Scenic road for your next journey'
    },
    {
      id: 2,
      image: heroImg2,
      title: 'Mountain Adventure',
      subtitle: 'Explore the mountains with Jandar Travels'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      title: 'Taj Mahal, Agra',
      subtitle: 'Iconic Taj Mahal in Agra, India'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1599632740188-8a4f152a8342?w=1200&auto=format&fit=crop&q=80',
      title: 'Incredible India',
      subtitle: 'Travel moments across India'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1595419293062-457444d419b8?w=1200&auto=format&fit=crop&q=80',
      title: 'Scenic Journeys',
      subtitle: 'Explore the beauty of India with Jandar Travels'
    }
  ];

  // Splash screen effect - hide after 1 second
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
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

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  // Handle image load error
  const handleImgError = (id: number) => {
    setImgError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {/* Full Screen Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <img
            src={splashImage}
            alt="Jandar Travels Splash"
            className="h-48 w-48 xs:h-64 xs:w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[32rem] lg:w-[32rem] rounded-full object-cover animate-pulse shadow-2xl border-4 border-white"
          />
        </div>
      )}
      <section id="home" className="pt-28 xs:pt-32 sm:pt-36 md:pt-40 relative min-h-screen">
        <div className="relative w-full h-[calc(100vh-7rem)] xs:h-[calc(100vh-8rem)] sm:h-[calc(100vh-9rem)] overflow-hidden">
          <div
            className="flex transition-transform duration-[2500ms] ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                <div className="w-full h-full relative flex items-center justify-center bg-black">
                  {imgError[slide.id] ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-base sm:text-xl">
                      Image not found
                    </div>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] transition-all duration-500"
                      style={{ objectPosition: 'center 60%' }}
                      onError={() => handleImgError(slide.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40" style={{ backgroundColor: '#222' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white z-10 max-w-4xl w-full">
              <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-1 xs:mb-2 sm:mb-4">
                Premium Travel Services
              </div>
              <div className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 xs:mb-2 sm:mb-4">
                WELCOME TO
              </div>
              <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 xs:mb-2 sm:mb-4">
                JANDAR TRAVELS
              </div>
              <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 xs:mb-3 sm:mb-6">
                NOIDA SECTOR - 31
              </div>
              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 justify-center px-4 xs:px-0">
                <Link to="/contact-us" className="btn-secondary text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 min-h-touch">
                  Book Taxi
                </Link>
                <button onClick={handleBookNow} className="btn-primary text-xs xs:text-sm sm:text-base md:text-lg px-4 xs:px-6 sm:px-8 py-2 xs:py-2.5 sm:py-3 min-h-touch">
                  Tour Packages
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={goToNext}
            className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white min-w-touch min-h-touch p-2 xs:p-2.5 sm:p-3 rounded-full transition-all duration-300 flex items-center justify-center"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-base xs:text-lg sm:text-xl"></i>
          </button>
          <div className="absolute bottom-3 xs:bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 xs:space-x-2.5 sm:space-x-3">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
