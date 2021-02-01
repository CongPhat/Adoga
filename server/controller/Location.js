const LocationModel = require("../models/Location");
const message = require("../helper/messageResponse");

const controller = {
  getData: async (req, res, next) => {
    const dataFind = await LocationModel.find();
    res.send(message.messageSuccess("Get Location Success", dataFind));
  },

  getDataIsTop: async (req, res, next) => {
    const dataFind = await LocationModel.find({ isTop: true });
    res.send(message.messageSuccess("Get Location Top Success", dataFind));
  },
};
module.exports = controller;
