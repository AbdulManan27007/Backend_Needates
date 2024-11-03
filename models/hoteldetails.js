import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Hotel name"],
    },
    address: {
      type: String,
      required: [true, "Please enter your Address"],
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: Number,
      required: [true, "Please enter Zipcode"],
    },
    personName: {
      type: String,
      required: [true, "Please enter your Name"],
    },
    personContact: {
      type: String,
      required: [true, "Please enter your Phone Number"],
    },
    picture: {
      type: String,
      required: [true, "Please upload a picture"], 
    },
  },
  { timestamps: true }
);

export const HotelDetails = mongoose.model("HotelDetails", hotelSchema);
