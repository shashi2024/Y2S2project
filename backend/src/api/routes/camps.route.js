import express from "express";
import CampShema from "../model/camps.model";

const router = express.Router();

// Create a new campaign
router.post("/createCampaign", (req, res) => {
  CampShema.create(req.body)
    .then(() => res.json({ msg: "New Campaign Added Successfully" }))
    .catch(err =>
      res
        .status(400)
        .json({ msg: "Failed to add new campaign", error: err.message })
    );
});

// Retrieve all campaigns
router.get("/getAllCampaign", (req, res) => {
  CampShema.find()
    .then(campaigns => res.json(campaigns))
    .catch(err =>
      res.status(400).json({ msg: "No Campaigns Found", error: err.message })
    );
});

// Retrieve a single campaign by ID
router.get("/getCampaign/:id", (req, res) => {
  CampShema.findById(req.params.id)
    .then(campaign => res.json(campaign))
    .catch(err =>
      res
        .status(404)
        .json({ msg: "Cannot find this campaign", error: err.message })
    );
});

// Update a campaign by ID
router.put("/updateCampaign/:id", (req, res) => {
  CampShema.findByIdAndUpdate(req.params.id, req.body, { new: true }) // { new: true } to return the updated document
    .then(updatedCampaign =>
      res.json({ msg: "Updated Successfully", updatedCampaign })
    )
    .catch(err =>
      res.status(400).json({ msg: "Update failed", error: err.message })
    );
});

// Delete a campaign by ID
router.delete("/deleteCampaign/:id", (req, res) => {
  CampShema.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "Deleted Successfully" }))
    .catch(err =>
      res.status(404).json({ msg: "Cannot delete", error: err.message })
    );
});

export default router;
