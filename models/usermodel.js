import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  lastLogin: {
    type: Date,
    default: Date.now, 
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpiresAt: {
    type: Date,
    default: null,
  },
  verificationToken: {
    type: String,
    default: null,
  },
  verificationTokenExpiresAt: {
    type: Date,
    default: null,
  },
},{timestamps: true});

export const  User = mongoose.model('User', userSchema);
