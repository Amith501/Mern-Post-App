const express = require("express");
const router = express.Router();
const {
  createuser,
  getuser,
  singleuser,
  updateuser,
  deleteuser,
} = require("../controller/User.js");

// Routes
router
  .post("/", createuser) // Create user
  .get("/", getuser) // Get all users
  .get("/:id", singleuser) // Get single user by ID
  .put("/edit/:id", updateuser) // Update user by ID (Fixed the route)
  .delete("/:id", deleteuser); // Delete user by ID

module.exports = router;
