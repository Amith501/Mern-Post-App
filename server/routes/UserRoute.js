const express = require("express");
const {
  createuser,
  getusers,
  updateusers,
  deleteusers,
} = require("../controller/user.controller.js");

const router = express.Router();

// Create a new user
router.post("/", createuser);

// Get all users
router.get("/", getusers);

// Update a user by ID
router.put("/:id", updateusers);

// Delete a user by ID
router.delete("/:id", deleteusers);

module.exports = router;
