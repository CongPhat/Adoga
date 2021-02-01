const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: { type: String, required: true },
  street: { type: String, required: true },
  star: { type: Number, required: true },
  imageThumbnail: { type: String, required: true },
  rating: { type: Number, required: true },
  discount: { type: Number, required: true },
  only: { type: Number, default: 0 },
  productType: { type: String, required: false },
  productAbout: { type: String, required: false },
  benefits: { type: [String], required: false },
  locationId: { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
