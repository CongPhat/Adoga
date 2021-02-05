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

  getDetailLocation: async (req, res, next) => {
    const { locationId } = req.query;
    let dataLocation;
    try {
      dataLocation = await LocationModel.findOne({
        _id: locationId,
      });
      if (!dataLocation) {
        res.status(400).send(message.messageError("Location not found", error));
      }
      res.send(
        message.messageSuccess("Get Detail Location Success", dataLocation)
      );
    } catch (error) {
      res.status(400).send(message.messageError("Error", error));
    }
  },
};
module.exports = controller;
