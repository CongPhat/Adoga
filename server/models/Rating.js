const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = mongoose.Schema({
  ratingName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Ratings", RatingSchema);
