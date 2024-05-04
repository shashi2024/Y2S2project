const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback'); // Ensure this path correctly leads to your Feedback model

// POST endpoint for submitting feedback
router.post('/', async (req, res) => {
    try {
        const { rating, feedback } = req.body;
        const newFeedback = new Feedback({ rating, feedback });
        await newFeedback.save();
        res.status(201).send('Feedback received');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get all feedback
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


module.exports = router;
