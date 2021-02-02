const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AmenitiesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: { type: String, required: false },
  important: { type: Boolean, default: false },
});

module.exports = mongoose.model("Amenities", AmenitiesSchema);
