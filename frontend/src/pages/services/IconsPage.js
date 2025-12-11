import React from 'react';
import { usePopup } from '../../context/PopupContext';
import AnimatedSection from '../../components/AnimatedSection';
import TestimonialCard from '../../components/TestimonialCard';

const IconsPage = () => {
  const { openPopup } = usePopup();

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Icons</h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Profile pictures and avatar artwork perfect for social media, Discord, and more.
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
                  <span>Square format optimized for profiles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Various expression options</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple size formats included</span>
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
                  <span>Discord, Twitter, and social media</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Forum signatures and avatars</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Gaming profiles and usernames</span>
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
              quote="Perfect for my Discord server! Everyone loves my new icon."
              name="Blake"
              type="Icon"
              stars={5}
            />
            <TestimonialCard
              quote="Quick and affordable. Great quality for the price!"
              name="Cameron"
              type="Icon"
              stars={5}
            />
            <TestimonialCard
              quote="The expression is so cute! Exactly what I wanted."
              name="Dakota"
              type="Icon"
              stars={5}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for your new icon?</h2>
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

export default IconsPage;

