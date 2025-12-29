import React from 'react';
import { usePopup } from '../context/PopupContext';
import AnimatedSection from '../components/AnimatedSection';
import FAQAccordion from '../components/FAQAccordion';

const FAQPage = () => {
  const { openPopup } = usePopup();
  const faqs = [
    {
      question: 'How much do commissions cost?',
      answer: 'Our prices depend on the type of commission and the options you choose. Reference sheets typically start at $X, drawings at $Y, icons at $Z, and stickers at $W. Prices may vary based on complexity, additional characters, backgrounds, and other customizations. Contact us for a personalized quote!'
    },
    {
      question: 'What is the commission process?',
      answer: 'The process is simple: 1) Fill out our commission form with your details and preferences, 2) We\'ll contact you on Discord to discuss your vision, 3) You\'ll receive initial sketches for review, 4) We work with you through revisions until you\'re happy, 5) Final payment and delivery of your high-resolution artwork.'
    },
    {
      question: 'How many revisions are included?',
      answer: 'We offer unlimited revisions during the sketch and lineart phases to ensure you\'re completely satisfied. Once we move to coloring, minor adjustments are still welcome, but major changes may require additional fees. Our goal is to make sure you love your final piece!'
    },
    {
      question: 'Do you offer a money-back guarantee?',
      answer: 'Yes! We offer a 100% money-back guarantee at any stage of the commission process. If you\'re not satisfied with the work or the process, we\'ll refund your payment. Your satisfaction is our top priority.'
    },
    {
      question: 'Can I pay in installments?',
      answer: 'Yes! We offer payment plans for larger commissions. Typically, we require 50% upfront to begin work, and the remaining 50% upon completion. For very large projects, we can arrange a custom payment schedule. Contact us to discuss options.'
    },
    {
      question: 'What is your NSFW policy?',
      answer: 'We do accept NSFW commissions, but with some guidelines. We require clear communication about the content before starting, and all NSFW work must be clearly marked. We reserve the right to decline any commission that makes us uncomfortable. Please discuss your needs during the initial inquiry.'
    }
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-textMuted">
              Everything you need to know about commissioning art from us.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index}>
              <FAQAccordion question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-12 bg-surface border border-borderSoft rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-textMuted mb-6">
              Feel free to reach out to us on Discord or through our commission form.
            </p>
            <button
              onClick={() => openPopup()}
              className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FAQPage;

