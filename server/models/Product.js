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
  images: {
    type: [
      {
        linkImage: String,
        title: String,
      },
    ],
    required: false,
  },
  rating: { type: Number, required: true },
  discount: { type: Number, required: true },
  only: { type: Number, default: 0 },
  productType: { type: String, required: false },
  productAbout: { type: String, required: false },
  benefits: [{ type: [Schema.Types.ObjectId], ref: "benefits" }],
  locationId: { type: String, required: true },
  rooms: [{ type: [Schema.Types.ObjectId], ref: "Rooms" }],
  ratingDetail: [
    {
      ratingId: { type: Schema.Types.ObjectId, ref: "Ratings" },
      ratingNumber: { type: Number, default: 0 },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
