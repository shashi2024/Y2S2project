const express = require('express');
const router = express.Router();
const Campaigns = require("../models/camp");

// Test route to confirm the campaign routes are working
router.get("/test", (req, res) => res.send("Campaign routes are working"));

// Create a new campaign
router.post("/createCampaign", (req, res) => {
    Campaigns.create(req.body)
        .then(() => res.json({ msg: "New Campaign Added Successfully" }))
        .catch((err) => res.status(400).json({ msg: "Failed to add new campaign", error: err.message }));
});

// Retrieve all campaigns
router.get("/getAllCampaign", (req, res) => {
    Campaigns.find()
        .then(campaigns => res.json(campaigns))
        .catch(err => res.status(400).json({ msg: "No Campaigns Found", error: err.message }));
});

// Retrieve a single campaign by ID
router.get("/getCampaign/:id", (req, res) => {
    Campaigns.findById(req.params.id)
        .then(campaign => res.json(campaign))
        .catch(err => res.status(404).json({ msg: "Cannot find this campaign", error: err.message }));
});

// Update a campaign by ID
router.put("/updateCampaign/:id", (req, res) => {
    Campaigns.findByIdAndUpdate(req.params.id, req.body, { new: true }) // { new: true } to return the updated document
        .then(updatedCampaign => res.json({ msg: "Updated Successfully", updatedCampaign }))
        .catch(err => res.status(400).json({ msg: "Update failed", error: err.message }));
});

// Delete a campaign by ID
router.delete("/deleteCampaign/:id", (req, res) => {
    Campaigns.findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Deleted Successfully" }))
        .catch(err => res.status(404).json({ msg: "Cannot delete", error: err.message }));
});

// Updated Search API in campaigns.js
router.get("/search", (req, res) => {
    const { platform, budgetMin, budgetMax } = req.query;
    let query = {};

    if (platform && platform !== "Any") {
        query.platform = platform;
    }
    if (budgetMin && budgetMax) {
        query.budget = { $gte: budgetMin, $lte: budgetMax };
    }

    Campaigns.find(query)
        .then(campaigns => res.json(campaigns))
        .catch(err => res.status(400).json({ msg: "Error fetching campaigns", error: err.message }));
});



module.exports = router;
