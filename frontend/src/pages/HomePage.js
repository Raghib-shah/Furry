import React from 'react';
import { Link } from 'react-router-dom';
import { usePopup } from '../context/PopupContext';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import HeroImg from "../assets/images/hero.png";

const HomePage = () => {
  const { openPopup } = usePopup();

  return (
    <div>
      {/* Top Sale Banner */}
      <div className="bg-warning text-bgMain text-center py-2 font-semibold">
        ALL COMMISSIONS UP TO 35% OFF!
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1d2340] via-bgMain to-bgMain py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Bring your fursona to life.
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-primary">
                  Safe, curated furry art commissions in one place.
                </h2>
                <p className="text-xl text-textMuted mb-6">
                  We help furries get high-quality ref sheets, drawings, icons and stickers with a simple, secure process and unlimited revisions.
                </p>
                <p className="text-lg text-textMuted mb-8">
                  Secure payments • Card & PayPal • Money-back guarantee
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => openPopup()}
                    className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
                  >
                    Commission now
                  </button>
                  <Link
                    to="/our-work"
                    className="bg-surface border border-borderSoft hover:border-primary text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors text-center"
                  >
                    View our work
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-2xl flex items-center justify-center text-textMuted shadow-2xl shadow-primary/20">
                 <img src={HeroImg} alt="Hero Art" className="w-full h-full object-cover rounded-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-surface border border-borderSoft rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Easy</h3>
                <p className="text-textMuted">Simple process from start to finish. No hassle, just art.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-surface border border-borderSoft rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Safe</h3>
                <p className="text-textMuted">Secure payments and money-back guarantee. Your peace of mind matters.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-surface border border-borderSoft rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality</h3>
                <p className="text-textMuted">High-quality art with unlimited revisions until you're happy.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedSection>
              <ServiceCard
                title="Reference Sheets"
                description="Complete character reference sheets for your fursona."
                link="/services/refsheets"
              />
            </AnimatedSection>
            <AnimatedSection>
              <ServiceCard
                title="Drawings"
                description="Custom artwork and illustrations of your character."
                link="/services/drawings"
              />
            </AnimatedSection>
            <AnimatedSection>
              <ServiceCard
                title="Icons"
                description="Profile pictures and avatar artwork."
                link="/services/icons"
              />
            </AnimatedSection>
            <AnimatedSection>
              <ServiceCard
                title="Stickers"
                description="Custom sticker designs for your character."
                link="/services/stickers"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Guarantee Strip */}
      <section className="py-8 px-4 bg-primary/10 border-y border-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-semibold">100% Money-back guarantee at any stage.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Why Furries Love Us</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection>
              <TestimonialCard
                quote="Amazing quality and the artist was so patient with all my revision requests!"
                name="Alex"
                type="Ref Sheet"
                stars={5}
              />
            </AnimatedSection>
            <AnimatedSection>
              <TestimonialCard
                quote="The process was so easy and the final result exceeded my expectations."
                name="Sam"
                type="Drawing"
                stars={5}
              />
            </AnimatedSection>
            <AnimatedSection>
              <TestimonialCard
                quote="Fast turnaround and beautiful art. Will definitely commission again!"
                name="Jordan"
                type="Icon"
                stars={5}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Inquire</h3>
                <p className="text-textMuted">Fill out our simple form and tell us about your fursona.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Sketch</h3>
                <p className="text-textMuted">We create initial sketches and work with you on revisions.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center">
                <div className="w-20 h-20 bg-warning rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold text-bgMain">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Perfect</h3>
                <p className="text-textMuted">Finalize your commission with unlimited revisions until perfect.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pricing + Payment */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-surface border border-borderSoft rounded-2xl p-8">
              <h2 className="text-4xl font-bold mb-6 text-center">Pricing & Payment</h2>
              <p className="text-textMuted mb-6 text-center">
                Our prices depend on the options you choose. Each commission is customized to your needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Card & PayPal supported</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Installments available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure checkout</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  onClick={() => openPopup()}
                  className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
                >
                  Start Your Commission
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to bring your fursona to life?</h2>
              <p className="text-xl text-textMuted mb-8">
                Start your commission today and get up to 35% off!
              </p>
              <button
                onClick={() => openPopup()}
                className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
              >
                Let's get started
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

