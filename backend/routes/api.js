const express = require('express');
const router = express.Router();
const Enquiry = require('../models/Enquiry');
const Certificate = require('../models/Certificate');

// POST /api/enquiry
router.post('/enquiry', async (req, res) => {
  try {
    const { name, email, phone, reason, description } = req.body;
    
    // Basic validation
    if (!name || !email || !reason || !description) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    const newEnquiry = new Enquiry({
      name, email, phone, reason, description
    });

    await newEnquiry.save();
    return res.status(201).json({ message: 'Enquiry submitted successfully!', enquiry: newEnquiry });
  } catch (err) {
    console.error('Error saving enquiry:', err);
    return res.status(500).json({ error: 'Server error saving enquiry.' });
  }
});

// POST /api/verify
router.post('/verify', async (req, res) => {
  try {
    const { certificateId, email } = req.body;
    
    if (!certificateId || !email) {
      return res.status(400).json({ error: 'Please provide certificateId and email.' });
    }

    const cert = await Certificate.findOne({ certificateId, email });
    
    if (cert) {
      return res.status(200).json({ isValid: true, message: 'Certificate is valid.', certificate: cert });
    } else {
      return res.status(404).json({ isValid: false, message: 'Certificate not found or invalid email.' });
    }

  } catch (err) {
    console.error('Error verifying certificate:', err);
    return res.status(500).json({ error: 'Server error verifying certificate.' });
  }
});

module.exports = router;
