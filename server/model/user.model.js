const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"], // Full Name is required
  },
  email: {
    type: String,
    required: [true, "Email Address is required"], // Email is required
    unique: true, // Email must be unique
    lowercase: true, // Convert email to lowercase
    trim: true, // Remove extra spaces
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"], // Validate email format
  },
  password: {
    type: String,
    required: [true, "Password is required"], // Password is required
    minlength: [8, "Password must be at least 8 characters long"], // Minimum length of 8 characters
  },
});

module.exports = mongoose.model("User", userSchema);