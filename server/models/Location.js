const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: { type: String, required: false },
  isTop: { type: Boolean, default: false },
  accommodations: { type: Number, default: 0 },
});

module.exports = mongoose.model("locations", LocationSchema);
