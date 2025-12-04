import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Jandar Travels | Book Taxi in Noida | +91-9525853388</title>
        <meta name="description" content="Contact Jandar Travels for taxi booking, tour packages, and travel inquiries. Call +91-9525853388 or visit us at Noida Sector-31. 24/7 customer support available." />
        <meta name="keywords" content="contact jandar travels, taxi booking noida, book cab noida sector 31, travel inquiry, tour booking contact, airport taxi booking" />
        <link rel="canonical" href="https://jandartravels.com/contact-us" />
        <meta property="og:title" content="Contact Jandar Travels - Book Taxi in Noida" />
        <meta property="og:description" content="Book taxi services and tour packages. Call +91-9525853388. 24/7 customer support." />
        <meta property="og:url" content="https://jandartravels.com/contact-us" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="pt-28 xs:pt-32 sm:pt-36 md:pt-40">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 xs:py-10 sm:py-12 md:py-16">
          <div className="container-custom px-3 xs:px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 xs:mb-3 sm:mb-4">
                Contact Us
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-2 xs:px-4 sm:px-0">
              Get in touch with Jandar Travels for all your taxi and tour booking needs. We're here to help you plan your perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 xs:p-5 sm:p-6 md:p-8">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Send us a Message</h2>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`mb-3 xs:mb-4 sm:mb-6 p-2.5 xs:p-3 sm:p-4 rounded-lg text-xs xs:text-sm sm:text-base ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 border border-green-400 text-green-700'
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 xs:py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm min-h-touch"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 py-2.5 xs:py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm min-h-touch"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2.5 xs:py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm min-h-touch"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 py-2.5 xs:py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm min-h-touch"
                  >
                    <option value="">Select a subject</option>
                    <option value="taxi-booking">Taxi Booking</option>
                    <option value="tour-package">Tour Package</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="corporate-booking">Corporate Booking</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={4}
                    className="w-full px-3 py-2.5 xs:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-sm xs:text-base sm:text-lg py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 min-h-touch ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-4 xs:p-5 sm:p-6 md:p-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-3 xs:mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-3 xs:space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-2 xs:p-2.5 sm:p-3 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0 mt-0.5">
                      <i className="fas fa-map-marker-alt text-xs xs:text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 text-xs xs:text-sm sm:text-base">
                        Jandar Travels<br />
                        Noida Sector - 31<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                  <a href="tel:+919525853388" className="flex items-center min-h-touch py-1 hover:bg-gray-50 rounded-lg -mx-2 px-2 transition-colors">
                    <div className="bg-primary text-white rounded-full p-2 xs:p-2.5 sm:p-3 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-xs xs:text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base">Phone</h4>
                      <span className="text-gray-600 hover:text-primary transition-colors text-xs xs:text-sm sm:text-base">+91-9525853388</span>
                    </div>
                  </a>
                  <a href="mailto:dharmendrajandar9525@gmail.com" className="flex items-center min-h-touch py-1 hover:bg-gray-50 rounded-lg -mx-2 px-2 transition-colors">
                    <div className="bg-primary text-white rounded-full p-2 xs:p-2.5 sm:p-3 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-xs xs:text-sm sm:text-base"></i>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base">Email</h4>
                      <span className="text-gray-600 hover:text-primary transition-colors text-xs xs:text-sm sm:text-base truncate block">dharmendrajandar9525@gmail.com</span>
                    </div>
                  </a>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full p-2 xs:p-2.5 sm:p-3 mr-2 xs:mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-xs xs:text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-xs xs:text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-xs xs:text-sm sm:text-base">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-4 xs:p-5 sm:p-6 md:p-8 text-white">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 sm:mb-6">Why Choose Jandar Travels?</h3>
                <div className="space-y-2 xs:space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                    <span className="text-xs xs:text-sm sm:text-base">Professional and experienced drivers</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                    <span className="text-xs xs:text-sm sm:text-base">Well-maintained and sanitized vehicles</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                    <span className="text-xs xs:text-sm sm:text-base">Competitive pricing with no hidden charges</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                    <span className="text-xs xs:text-sm sm:text-base">24/7 customer support</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-2 xs:mr-3 mt-0.5 flex-shrink-0 text-xs xs:text-sm sm:text-base"></i>
                    <span className="text-xs xs:text-sm sm:text-base">GPS-enabled vehicles for safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-8 xs:py-10 sm:py-12 md:py-16 px-3 xs:px-4 sm:px-6">
        <div className="container-custom">
          <div className="text-center mb-4 xs:mb-6 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4">Find Us on Map</h2>
            <p className="text-gray-600 text-sm xs:text-base">Visit our office in Noida Sector-31</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-2 xs:p-3 sm:p-4">
            <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.766173244969!2d77.3397349!3d28.576783400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce579ff2d5e1b%3A0xcfdffeacd969ec36!2sJandar%20Travels!5e0!3m2!1sen!2sin!4v1751384276723!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, minHeight: '250px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jandar Travels Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default ContactUs;
