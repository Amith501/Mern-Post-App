const UserSchema = require("../model/user.model.js");
const mongoose = require("mongoose");

const createuser = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const data = await UserSchema.create({
      name: name,
      email: email,
      age: age,
    });
    await data.save();

    res.status(201).json({ sucess: true, data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: error.message });
  }
};

const getusers = async (req, res) => {
  try {
    const showdata = await UserSchema.find({});
    res.status(201).json(showdata);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error.message });
  }
};

const updateusers = async (req, res) => {
  const { name, email, age } = req.body;
  const { id } = req.params;
  try {
    const update = await UserSchema.findById({});
    console.log(id);
    res.status(200).json({ sucess: true, update });
  } catch (error) {
    Console(error);
    res.status(500).json({ Error: error.message });
  }
};
const deleteusers = async (req, res) => {
  const { id } = req.params; // Extract ID from params
  try {
    const deleteuser = await UserSchema.findByIdAndDelete(id); // Pass ID directly
    if (!deleteuser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" }); // Handle case where user is not found
    }
    console.log(`Deleted user ID: ${id}`);
    res
      .status(200)
      .json({ success: true, message: "User deleted", deleteuser });
  } catch (error) {
    console.error(error); // Corrected logging
    res.status;
  }
};

module.exports = { createuser, getusers, updateusers, deleteusers };
