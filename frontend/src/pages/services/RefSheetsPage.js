import React from 'react';
import { usePopup } from '../../context/PopupContext';
import AnimatedSection from '../../components/AnimatedSection';
import TestimonialCard from '../../components/TestimonialCard';

const RefSheetsPage = () => {
  const { openPopup } = usePopup();

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Reference Sheets</h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Complete character reference sheets for your fursona with all the details needed for future commissions.
            </p>
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface border border-borderSoft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Front and side views</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Color palette and markings</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Detailed character information</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>High-resolution digital file</span>
                </li>
              </ul>
            </div>
            <div className="bg-surface border border-borderSoft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Perfect For</h3>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>New fursonas needing a complete reference</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Updating existing character designs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Commissioning multiple artists</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Gallery */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted">
                Image Placeholder
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <TestimonialCard
              quote="My ref sheet came out perfect! The artist captured every detail I wanted."
              name="Casey"
              type="Ref Sheet"
              stars={5}
            />
            <TestimonialCard
              quote="Professional quality and great communication throughout the process."
              name="Riley"
              type="Ref Sheet"
              stars={5}
            />
            <TestimonialCard
              quote="Worth every penny. I use this ref sheet for all my future commissions."
              name="Morgan"
              type="Ref Sheet"
              stars={5}
            />
          </div>
        </AnimatedSection>

        {/* Process */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Process</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Submit Details</h3>
              <p className="text-textMuted">Tell us about your fursona and provide any references.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Review Sketches</h3>
              <p className="text-textMuted">We'll send you initial sketches for approval and revisions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-bgMain">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Final Delivery</h3>
              <p className="text-textMuted">Receive your completed ref sheet in high resolution.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to create your ref sheet?</h2>
            <button
              onClick={() => openPopup()}
              className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
            >
              Start Your Commission
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default RefSheetsPage;

