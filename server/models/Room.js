const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: { type: String, required: true },
  productId: { type: String, required: true },
  size: { type: String, required: true },
  people: { type: Number, required: true },
  beds: { type: Number, required: true },
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
  benefits: [{ type: Schema.Types.ObjectId, ref: "benefits" }],
  facilities: [{ type: Schema.Types.ObjectId, ref: "Facilities" }],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Rooms", RoomSchema);
