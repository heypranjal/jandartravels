import React, { useState } from 'react';

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
      const response = await fetch('http://localhost:5050/api/contact', {
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
    <div className="pt-36 sm:pt-40">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 sm:py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto px-4 sm:px-0">
              Get in touch with Jandar Travels for all your taxi and tour booking needs. We're here to help you plan your perfect journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a Message</h2>
              
              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 border border-green-400 text-green-700' 
                    : 'bg-red-100 border border-red-400 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-base sm:text-lg py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 ${
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
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Jandar Travels<br />
                        Noida Sector - 31<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-phone text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                      <a href="tel:+919525853388" className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base">+91- 95258 53388</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-envelope text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                      <a href="mailto:dharmendrajandar9525@gmail.com" className="text-gray-600 hover:text-primary transition-colors text-sm sm:text-base">dharmendrajandar9525@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-primary text-white rounded-full p-2 mr-3 sm:mr-4 flex-shrink-0">
                      <i className="fas fa-clock text-sm sm:text-base"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Business Hours</h4>
                      <p className="text-gray-600 text-sm sm:text-base">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-lg p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Jandar Travels?</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">Professional and experienced drivers</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">Well-maintained and sanitized vehicles</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">Competitive pricing with no hidden charges</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">24/7 customer support</span>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-check-circle mr-3 mt-1 flex-shrink-0 text-sm sm:text-base"></i>
                    <span className="text-sm sm:text-base">GPS-enabled vehicles for safety</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
            <p className="text-gray-600">Visit our office in Noida Sector-31</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
  <iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.766173244969!2d77.3397349!3d28.576783400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce579ff2d5e1b%3A0xcfdffeacd969ec36!2sJandar%20Travels!5e0!3m2!1sen!2sin!4v1751384276723!5m2!1sen!2sin" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
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
  );
};

export default ContactUs; 