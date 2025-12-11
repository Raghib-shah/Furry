import React from 'react';
import { usePopup } from '../../context/PopupContext';
import AnimatedSection from '../../components/AnimatedSection';
import TestimonialCard from '../../components/TestimonialCard';

const DrawingsPage = () => {
  const { openPopup } = usePopup();

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Drawings</h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Custom artwork and illustrations of your fursona in any style or pose you desire.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-surface border border-borderSoft rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">What's Included</h3>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Full-body or portrait options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Custom poses and expressions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Background options available</span>
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
                  <span>Profile pictures and avatars</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special occasions and events</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gifts for friends and partners</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

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

        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <TestimonialCard
              quote="Absolutely stunning artwork! The artist really understood my vision."
              name="Taylor"
              type="Drawing"
              stars={5}
            />
            <TestimonialCard
              quote="Fast turnaround and beautiful results. Highly recommend!"
              name="Avery"
              type="Drawing"
              stars={5}
            />
            <TestimonialCard
              quote="The pose and expression are exactly what I wanted. Perfect!"
              name="Quinn"
              type="Drawing"
              stars={5}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for your custom drawing?</h2>
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

export default DrawingsPage;

