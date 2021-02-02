const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BenefitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("benefits", BenefitSchema);
