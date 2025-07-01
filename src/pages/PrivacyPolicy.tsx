import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12 sm:py-16 mt-16 sm:mt-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  Jandar Travels ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our taxi and travel services.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Name and contact information (phone number, email address)</li>
                      <li>Pickup and destination addresses</li>
                      <li>Travel dates and times</li>
                      <li>Payment information</li>
                      <li>Emergency contact details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Usage Information</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Service history and preferences</li>
                      <li>Device information and IP address</li>
                      <li>Location data (with your consent)</li>
                      <li>Communication records</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>To provide and manage our taxi and travel services</li>
                  <li>To process bookings and payments</li>
                  <li>To communicate with you about your trips</li>
                  <li>To send service updates and promotional offers</li>
                  <li>To improve our services and customer experience</li>
                  <li>To comply with legal obligations</li>
                  <li>To ensure safety and security</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">3. Information Sharing</h3>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With our drivers and service providers to fulfill your bookings</li>
                  <li>With payment processors to complete transactions</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">4. Data Security</h3>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of sensitive data</li>
                  <li>Secure servers and networks</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">5. Your Rights</h3>
                <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and review your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with relevant authorities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h3>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar technologies to enhance your experience on our website and mobile app:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand usage patterns</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for personalized content</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">7. Third-Party Services</h3>
                <p className="text-gray-600 mb-4">
                  Our services may include links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">8. Data Retention</h3>
                <p className="text-gray-600 mb-4">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Typically, this includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Booking records: 7 years for tax purposes</li>
                  <li>Customer accounts: Until account deletion</li>
                  <li>Communication records: 2 years</li>
                  <li>Payment information: As required by payment processors</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">9. Children's Privacy</h3>
                <p className="text-gray-600 mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h3>
                <p className="text-gray-600 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">11. Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Jandar Travels</strong></p>
                  <p className="text-gray-600 mb-1">Phone: <a href="tel:+919525853388" className="text-primary hover:underline">+91-95258 53388</a></p>
                  <p className="text-gray-600 mb-1">Email: <a href="mailto:dharmendrajandar9525@gmail.com" className="text-primary hover:underline">dharmendrajandar9525@gmail.com</a></p>
                  <p className="text-gray-600">Address: Noida Sector-31, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 