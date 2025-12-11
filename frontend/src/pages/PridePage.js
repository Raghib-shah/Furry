import React from 'react';
import { usePopup } from '../context/PopupContext';
import AnimatedSection from '../components/AnimatedSection';

const PridePage = () => {
  const { openPopup } = usePopup();

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-pink-500/30 rounded-3xl p-12 text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              PRIDE YCH Special
            </h1>
            <p className="text-3xl font-semibold text-warning mb-4">Limited time offer!</p>
            <p className="text-xl text-textMuted max-w-3xl mx-auto">
              Celebrate Pride with our special YCH (Your Character Here) commissions featuring rainbow themes, pride flags, and LGBTQ+ inclusive artwork.
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
                  <span>Pride-themed YCH artwork</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rainbow and flag color schemes</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Special Pride discount pricing</span>
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
              <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
              <ul className="space-y-3 text-textMuted">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Choose your pride flag colors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple pose options available</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Add custom text or messages</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Background customization</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted">
                Image Placeholder
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 border border-pink-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to celebrate Pride with custom art?</h2>
            <p className="text-xl text-textMuted mb-8">
              Limited time offer - don't miss out on this special Pride YCH commission!
            </p>
            <button
              onClick={() => openPopup('pride')}
              className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
            >
              Start Your Pride Commission
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default PridePage;

