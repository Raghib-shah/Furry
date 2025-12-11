const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Inquiry = require('../models/Inquiry');
const { v4: uuidv4 } = require('uuid');

// Create payment
router.post('/create', async (req, res) => {
  try {
    const { inquiryId } = req.body;

    if (!inquiryId) {
      return res.status(400).json({ error: 'Inquiry ID is required' });
    }

    const inquiry = await Inquiry.findById(inquiryId);
    if (!inquiry) {
      return res.status(404).json({ error: 'Inquiry not found' });
    }

    const paymentId = uuidv4();
    const payment = new Payment({
      inquiryId,
      paymentId,
      status: 'PENDING'
    });

    await payment.save();

    // For now, return a manual PayPal link
    // In production, integrate PayPal SDK here
    const paypalLink = `https://www.paypal.com/paypalme/yourusername?amount=50.00&currency=USD`;

    res.json({
      success: true,
      payment,
      redirectUrl: paypalLink
    });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Verify payment (PayPal callback)
router.post('/verify', async (req, res) => {
  try {
    const { paymentId, paypalInfo } = req.body;

    const payment = await Payment.findOne({ paymentId });
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    payment.status = 'PAID';
    payment.paypalInfo = paypalInfo || {};
    await payment.save();

    // Update inquiry status
    await Inquiry.findByIdAndUpdate(payment.inquiryId, { status: 'paid' });

    res.json({ success: true, payment });
  } catch (error) {
    console.error('Error verifying payment:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

