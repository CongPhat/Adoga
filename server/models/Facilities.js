const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FacilitiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amenities: { type: [String], required: false },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Facilities", FacilitiesSchema);
