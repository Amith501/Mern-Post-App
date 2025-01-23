const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/User.model");

// CREATE
const createuser = async (req, res) => {
  console.log(req.body);
  const { Name, email, age } = req.body;
  try {
    const user = await User.create({ Name, email, age });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// READ (All Users)
const getuser = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ (Single User)
const singleuser = async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById(id); // Removed the unnecessary object wrapping
    if (!singleUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateuser = async (req, res) => {
  const { id } = req.params;
  console.log("get body", req.body);
  console.log("get id", id);
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(deletedUser);
    console.log(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createuser, getuser, singleuser, updateuser, deleteuser };
