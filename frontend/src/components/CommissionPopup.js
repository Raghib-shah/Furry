import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const CommissionPopup = ({ isOpen, onClose, campaign }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    sonaName: '',
    email: '',
    discord: '',
    campaign: campaign || null
  });
  const [errors, setErrors] = useState({});
  const [inquiryId, setInquiryId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(0);
      setFormData({ name: '', sonaName: '', email: '', discord: '', campaign: campaign || null });
      setErrors({});
      setInquiryId(null);
    }
  }, [isOpen, campaign]);

  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (/\d/.test(name)) return 'Name cannot contain numbers';
    if (!/^[a-zA-Z\s]+$/.test(name)) return 'Name can only contain letters';
    return null;
  };

  const validateSonaName = (sonaName) => {
    if (!sonaName.trim()) return 'Sona name is required';
    if (!/^[a-zA-Z\s]+$/.test(sonaName)) return 'Sona name can only contain letters';
    return null;
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    if (!email.includes('@')) return 'Email must contain @';
    const validDomains = ['@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com', '@icloud.com', '@proton.me'];
    const isValid = validDomains.some(domain => email.endsWith(domain));
    if (!isValid) return 'Email must end with @gmail.com, @hotmail.com, @outlook.com, @yahoo.com, @icloud.com, or @proton.me';
    return null;
  };

  const validateDiscord = (discord) => {
    if (!discord.trim()) return 'Discord username is required';
    return null;
  };

  const handleNext = () => {
    if (step === 1) {
      const error = validateName(formData.name);
      if (error) {
        setErrors({ name: error });
        return;
      }
    } else if (step === 2) {
      const error = validateSonaName(formData.sonaName);
      if (error) {
        setErrors({ sonaName: error });
        return;
      }
    } else if (step === 3) {
      const error = validateEmail(formData.email);
      if (error) {
        setErrors({ email: error });
        return;
      }
    } else if (step === 4) {
      const error = validateDiscord(formData.discord);
      if (error) {
        setErrors({ discord: error });
        return;
      }
    } else if (step === 5) {
      handlePayment();
      return;
    }
    setErrors({});
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const handlePayment = async () => {
    setIsSubmitting(true);
    try {
      // First create inquiry
      const inquiryResponse = await axios.post(`${API_BASE_URL}/api/inquiry/create`, formData);
      const inquiry = inquiryResponse.data.inquiry;
      setInquiryId(inquiry._id);

      // Then create payment
      const paymentResponse = await axios.post(`${API_BASE_URL}/api/payments/create`, {
        inquiryId: inquiry._id
      });

      // Redirect to PayPal
      window.location.href = paymentResponse.data.redirectUrl;
    } catch (error) {
      console.error('Payment error:', error);
      alert('Error processing payment. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && step > 0 && step < 6) {
      handleNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full h-full max-w-6xl max-h-[90vh] bg-bgMain rounded-3xl overflow-hidden flex"
      >
        {/* Left side - content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="text-center max-w-md"
              >
                <div className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted mb-6">
                  Image Placeholder
                </div>
                <h2 className="text-3xl font-bold mb-4">We're excited to bring your sona to life.</h2>
                <p className="text-xl text-warning mb-8 font-semibold">FLASH SALE — up to 35% OFF!</p>
                <button
                  onClick={handleNext}
                  className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
                >
                  I am so ready ^-^
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-2">What's your first name?</h2>
                <p className="text-textMuted mb-6">We'll use this to personalize your experience.</p>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary mb-2"
                  placeholder="Enter your first name"
                  autoFocus
                />
                {errors.name && <p className="text-pink-500 text-sm">{errors.name}</p>}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-2">What's your sona's name?</h2>
                <p className="text-textMuted mb-6">The name of your fursona character.</p>
                <input
                  type="text"
                  value={formData.sonaName}
                  onChange={(e) => handleInputChange('sonaName', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary mb-2"
                  placeholder="Enter your sona's name"
                  autoFocus
                />
                {errors.sonaName && <p className="text-pink-500 text-sm">{errors.sonaName}</p>}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-2">What's your email?</h2>
                <p className="text-textMuted mb-6">We'll send you updates about your commission.</p>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary mb-2"
                  placeholder="your.email@example.com"
                  autoFocus
                />
                {errors.email && <p className="text-pink-500 text-sm">{errors.email}</p>}
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-2">What's your Discord username?</h2>
                <p className="text-textMuted mb-6">We'll contact you here to discuss your commission.</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted">
                    Image Placeholder
                  </div>
                  <div className="w-full aspect-[1/1] bg-surface border border-borderSoft rounded-xl flex items-center justify-center text-textMuted">
                    Image Placeholder
                  </div>
                </div>
                <input
                  type="text"
                  value={formData.discord}
                  onChange={(e) => handleInputChange('discord', e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full bg-surface border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary mb-2"
                  placeholder="username#1234"
                  autoFocus
                />
                {errors.discord && <p className="text-pink-500 text-sm">{errors.discord}</p>}
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="w-full max-w-md"
              >
                <h2 className="text-3xl font-bold mb-6">PayPal Payment</h2>
                <div className="bg-surface border border-borderSoft rounded-2xl p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-textMuted">Name:</span>
                      <span className="font-semibold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textMuted">Sona Name:</span>
                      <span className="font-semibold">{formData.sonaName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textMuted">Email:</span>
                      <span className="font-semibold">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-textMuted">Discord:</span>
                      <span className="font-semibold">{formData.discord}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handlePayment}
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing...' : 'Pay with PayPal'}
                </button>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                className="text-center max-w-md"
              >
                <h2 className="text-3xl font-bold mb-4">Thank you! Welcome to the world of furry art!</h2>
                <p className="text-textMuted mb-8">
                  We've received your commission request. We'll contact you on Discord soon.
                </p>
                <button
                  onClick={onClose}
                  className="bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-8 py-4 text-lg transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation arrows */}
          {step > 0 && step < 6 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="w-12 h-12 rounded-full bg-surface border border-borderSoft flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-primary hover:bg-primarySoft flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right side - gradient */}
        <div className="hidden lg:block w-1/3 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-r-3xl" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/80 border border-borderSoft flex items-center justify-center hover:bg-surface transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </div>
  );
};

export default CommissionPopup;

