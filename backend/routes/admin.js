const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');
const Inquiry = require('../models/Inquiry');
const Payment = require('../models/Payment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password required' });
    }

    const admin = await AdminUser.findOne({ username });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error('Error in admin login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all inquiries (protected)
router.get('/inquiries', auth, async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { sonaName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { discord: { $regex: search, $options: 'i' } }
      ];
    }

    if (status) {
      query.status = status;
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
    res.json({ success: true, inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all payments (protected)
router.get('/payments', auth, async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = {};

    if (search) {
      const inquiries = await Inquiry.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { sonaName: { $regex: search, $options: 'i' } }
        ]
      });
      query.inquiryId = { $in: inquiries.map(i => i._id) };
    }

    if (status) {
      query.status = status;
    }

    const payments = await Payment.find(query)
      .populate('inquiryId')
      .sort({ createdAt: -1 });
    res.json({ success: true, payments });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get payment receipt
router.get('/payment/:id/receipt', auth, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment || !payment.receiptFilePath) {
      return res.status(404).json({ error: 'Receipt not found' });
    }

    res.download(payment.receiptFilePath);
  } catch (error) {
    console.error('Error fetching receipt:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

