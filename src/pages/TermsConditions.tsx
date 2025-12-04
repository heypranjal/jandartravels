import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsConditions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Jandar Travels | Service Agreement</title>
        <meta name="description" content="Read Jandar Travels terms and conditions. Understand our booking policies, cancellation rules, payment terms, and service agreements for taxi and tour services." />
        <meta name="keywords" content="terms conditions jandar travels, taxi booking terms, travel service agreement, cancellation policy, booking policy" />
        <link rel="canonical" href="https://jandartravels.com/terms-conditions" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-primary text-white py-12 sm:py-16 mt-16 sm:mt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Last Updated: December 2024</h2>
                <p className="text-gray-600 mb-6">
                  These Terms and Conditions ("Terms") govern your use of Jandar Travels' taxi and travel services. By using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Service Description</h3>
                <p className="text-gray-600 mb-4">
                  Jandar Travels provides taxi and travel services including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Local and outstation taxi services</li>
                  <li>Airport transfers</li>
                  <li>Tour packages and sightseeing</li>
                  <li>Corporate travel solutions</li>
                  <li>Wedding and event transportation</li>
                  <li>Luxury vehicle rentals</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. Booking and Reservations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Booking Process</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Bookings can be made via phone, website, or mobile app</li>
                      <li>Advance booking is recommended for guaranteed availability</li>
                      <li>All bookings are subject to vehicle and driver availability</li>
                      <li>We reserve the right to refuse service at our discretion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Cancellation Policy</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Free cancellation up to 2 hours before pickup time</li>
                      <li>50% charge for cancellations between 2 hours and 30 minutes before pickup</li>
                      <li>Full charge for cancellations within 30 minutes of pickup</li>
                      <li>No refund for no-shows</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Pricing and Payment</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Fare Structure</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Rates are calculated based on distance, time, and vehicle type</li>
                      <li>Additional charges may apply for waiting time, tolls, and parking</li>
                      <li>Night charges (10 PM to 6 AM) may apply</li>
                      <li>Outstation trips include driver allowance and fuel charges</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Payment Methods</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Cash payment to driver</li>
                      <li>Online payment via UPI, cards, or digital wallets</li>
                      <li>Corporate billing for business clients</li>
                      <li>Advance payment required for outstation trips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Customer Responsibilities</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate pickup and destination information</li>
                  <li>Be ready at the pickup location at the scheduled time</li>
                  <li>Treat drivers and vehicles with respect</li>
                  <li>Follow safety guidelines and wear seatbelts</li>
                  <li>Pay the agreed fare without dispute</li>
                  <li>Report any issues immediately to our customer service</li>
                  <li>Do not carry prohibited items or exceed passenger limits</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5. Driver and Vehicle Standards</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Driver Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Valid commercial driving license</li>
                      <li>Background verification and training</li>
                      <li>Professional conduct and customer service skills</li>
                      <li>Knowledge of local routes and traffic conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Vehicle Standards</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Regular maintenance and safety checks</li>
                      <li>Valid insurance and registration</li>
                      <li>Clean and well-maintained interiors</li>
                      <li>Functional air conditioning and amenities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">6. Safety and Liability</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    While we prioritize safety, we are not liable for:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Delays due to traffic, weather, or road conditions</li>
                    <li>Loss or damage to personal belongings left in vehicles</li>
                    <li>Injuries caused by customer negligence</li>
                    <li>Service disruptions due to force majeure events</li>
                    <li>Third-party actions or accidents</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Our liability is limited to the amount paid for the specific service.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">7. Prohibited Activities</h3>
                <p className="text-gray-600 mb-4">The following activities are strictly prohibited:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Smoking or consuming alcohol in vehicles</li>
                  <li>Carrying illegal substances or weapons</li>
                  <li>Damaging vehicle interiors or equipment</li>
                  <li>Harassing or threatening drivers</li>
                  <li>Exceeding maximum passenger capacity</li>
                  <li>Using vehicles for illegal activities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">8. Complaints and Disputes</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 mb-4">
                    We strive to provide excellent service. If you have concerns:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>Contact our customer service immediately</li>
                    <li>Provide booking details and specific issues</li>
                    <li>Allow reasonable time for investigation</li>
                    <li>We will respond within 24-48 hours</li>
                    <li>Disputes will be resolved through mutual discussion</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">9. Intellectual Property</h3>
                <p className="text-gray-600 mb-4">
                  All content on our website, mobile app, and marketing materials, including logos, text, images, and software, is the property of Jandar Travels and is protected by copyright laws.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">10. Privacy and Data Protection</h3>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">11. Force Majeure</h3>
                <p className="text-gray-600 mb-4">
                  We are not liable for any failure to perform our obligations due to circumstances beyond our control, including but not limited to natural disasters, government actions, strikes, or technical failures.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">12. Governing Law</h3>
                <p className="text-gray-600 mb-4">
                  These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Noida, Uttar Pradesh.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">13. Changes to Terms</h3>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">14. Contact Information</h3>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Jandar Travels</strong></p>
                  <p className="text-gray-600 mb-1">Phone: <a href="tel:+919525853388" className="text-primary hover:underline">+91-95258 53388</a></p>
                  <p className="text-gray-600 mb-1">Email: <a href="mailto:dharmendrajandar9525@gmail.com" className="text-primary hover:underline">dharmendrajandar9525@gmail.com</a></p>
                  <p className="text-gray-600">Address: Noida Sector-31, Uttar Pradesh, India</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                <p className="text-gray-700 font-semibold">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default TermsConditions; 