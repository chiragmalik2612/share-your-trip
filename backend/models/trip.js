const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripTitle: {
    type: String,
    required: [true, "Please give a title to your trip"],
  },

  numberOfPeople: {
    type: Number,
    default: 1,
  },

  locationsVisited: [
    {
      name: {
        type: String,
        required: [true, "Please enter the name of the location you visited"],
      },
      locationLink: String,
      photos: [String],
      description: String,
      transportFacility: String,
      foodAvailability: String,
    },
  ],

  placeStayed: [
    {
      name: {
        type: String,
        required: [true, "Please enter the name of the hotel/place you stayed"],
      },
      locationLink: String,
      photos: [String],
      description: String,
      transportFacility: String,
      foodAvailability: String,
    },
  ],

  anySuggestion: String,

  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
