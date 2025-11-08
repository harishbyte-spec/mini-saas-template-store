const express = require("express");
const router = express.Router();
const Template = require("../models/Template");
const User = require("../models/User");
const auth = require("../middleware/auth");


// ✅ GET all templates
router.get("/", async (req, res) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    console.error("Error getting templates:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Add to favorites
router.post("/favorites/:templateId", auth, async (req, res) => {
  try {
    const { templateId } = req.params;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Ensure template exists
    const template = await Template.findById(templateId);
    if (!template) {
      return res.status(404).json({ message: "Template not found" });
    }

    // Toggle favorite
    const alreadyFav = user.favorites.includes(templateId);
    if (alreadyFav) {
      user.favorites = user.favorites.filter((id) => id.toString() !== templateId);
    } else {
      user.favorites.push(templateId);
    }

    await user.save();
    res.json({ success: true, favorites: user.favorites });
  } catch (err) {
    console.error("Error in /favorites route:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all favorites
router.get("/favorites", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    console.error("Error getting favorites:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
