import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const TermsPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-8">Terms of Service</h1>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-surface border border-borderSoft rounded-2xl p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Commission Agreement</h2>
              <p className="text-textMuted">
                By commissioning artwork from us, you agree to these terms. The commission process begins once payment is received and confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Payment Terms</h2>
              <p className="text-textMuted">
                Payment is required before work begins. We accept PayPal and credit cards. For larger commissions, we may offer payment plans with 50% upfront and 50% upon completion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Revision Policy</h2>
              <p className="text-textMuted">
                Unlimited revisions are included during the sketch and lineart phases. Once coloring begins, minor adjustments are free, but major changes may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Refund Policy</h2>
              <p className="text-textMuted">
                We offer a 100% money-back guarantee at any stage. If you're not satisfied, contact us for a full refund. Refunds may take 5-10 business days to process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Usage Rights</h2>
              <p className="text-textMuted">
                You receive personal use rights to your commissioned artwork. You may use it for personal profiles, social media, and non-commercial purposes. Commercial use requires additional licensing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Artist Rights</h2>
              <p className="text-textMuted">
                We retain the right to display commissioned artwork in our portfolio and promotional materials unless otherwise agreed upon. We will not resell your character design.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Delivery Time</h2>
              <p className="text-textMuted">
                Typical delivery times range from 1-4 weeks depending on complexity and current workload. Rush orders may be available for an additional fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-textMuted">
                For questions about these terms, contact us through Discord or our commission form.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default TermsPage;

