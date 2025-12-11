const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');

// Create inquiry
router.post('/create', async (req, res) => {
  try {
    const { name, sonaName, email, discord, campaign } = req.body;

    // Validation
    if (!name || !sonaName || !email || !discord) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const inquiry = new Inquiry({
      name,
      sonaName,
      email,
      discord,
      campaign: campaign || null
    });

    await inquiry.save();
    res.status(201).json({ success: true, inquiry });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;

