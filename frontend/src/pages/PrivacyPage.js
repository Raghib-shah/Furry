import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const PrivacyPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-surface border border-borderSoft rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-textMuted mb-2">
                We collect the following information when you commission artwork:
              </p>
              <ul className="list-disc list-inside text-textMuted space-y-1 ml-4">
                <li>Name and contact information (email, Discord username)</li>
                <li>Character information (fursona name, design details)</li>
                <li>Payment information (processed securely through PayPal)</li>
                <li>Commission preferences and communication history</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-textMuted">
                We use your information solely to process your commission, communicate with you about your artwork, and provide customer support. We do not sell or share your personal information with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
              <p className="text-textMuted">
                We implement appropriate security measures to protect your personal information. Payment information is processed securely through PayPal and is not stored on our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Retention</h2>
              <p className="text-textMuted">
                We retain your commission information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-textMuted mb-2">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-textMuted space-y-1 ml-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <p className="text-textMuted">
                We may use cookies to improve your experience on our website. You can disable cookies in your browser settings, though this may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
              <p className="text-textMuted">
                For privacy concerns or data requests, contact us through Discord or our commission form.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPage;

