const ProductModel = require("../models/Product");
const BenefitModel = require("../models/Benefits");
const RoomModel = require("../models/Room");
const commonController = require("./common");
const message = require("../helper/messageResponse");
const { pagination } = require("../helper/pagination");
const { messageSuccess } = require("../helper/messageResponse");

const setRooms = async (dataProduct) => {
  const result = await Promise.all(
    dataProduct.rooms.splice(0, 1).map(async (item) => {
      const roomFind = await RoomModel.findOne({ _id: item });
      return roomFind;
    })
  );
  return result;
};

const controller = {
  getData: async (req, res, next) => {
    const dataFind = await ProductModel.find().sort({ date: "desc" });
    const result = Promise.all(
      dataFind.map(async (item) => {
        const userFind = await User.findOne({ _id: item.userId }, "image name");
        const commentFind = await Comment.find({
          postId: item._id,
          idCommentParrent: "",
        }).populate("user", "name");
        return {
          ...item._doc,
        };
      })
    );
    result.then((data) => {
      res.send(data);
    });
  },

  getProductByLocation: async (req, res, next) => {
    const { location, pageSize, pageNumber } = req.query;

    const dataFind = await pagination(ProductModel, pageSize, pageNumber, {
      locationId: location,
    });

    res.send(messageSuccess("Get List Product By Loction Success", dataFind));
    // const result = Promise.all(
    //   dataFind.map(async (item) => {
    //     const userFind = await User.findOne({ _id: item.userId }, "image name");
    //     const commentFind = await Comment.find({
    //       postId: item._id,
    //       idCommentParrent: "",
    //     }).populate("user", "name");
    //     return {
    //       ...item._doc,
    //     };
    //   })
    // );
    // result.then((data) => {
    //   res.send(data);
    // });
  },

  getDetailProduct: async (req, res, next) => {
    const { productId } = req.query;

    let dataProduct = await ProductModel.findOne({
      _id: productId,
    });

    const dataBenefit = await commonController.setBenefits(dataProduct);
    const dataRoom = await setRooms(dataProduct);
    const dataResult = {
      ...dataProduct._doc,
      benefits: dataBenefit,
      rooms: dataRoom,
    };
    res.send(messageSuccess("Get Detail Product Success", dataResult));

    // res.send(messageSuccess("Get List Product By Loction Success", dataFind));
    // const result = Promise.all(
    //   dataFind.map(async (item) => {
    //     const userFind = await User.findOne({ _id: item.userId }, "image name");
    //     const commentFind = await Comment.find({
    //       postId: item._id,
    //       idCommentParrent: "",
    //     }).populate("user", "name");
    //     return {
    //       ...item._doc,
    //     };
    //   })
    // );
    // result.then((data) => {
    //   res.send(data);
    // });
  },

  // res.send(messageSuccess("Get List Product By Loction Success", dataFind));
  // const result = Promise.all(
  //   dataFind.map(async (item) => {
  //     const userFind = await User.findOne({ _id: item.userId }, "image name");
  //     const commentFind = await Comment.find({
  //       postId: item._id,
  //       idCommentParrent: "",
  //     }).populate("user", "name");
  //     return {
  //       ...item._doc,
  //     };
  //   })
  // );
  // result.then((data) => {
  //   res.send(data);
  // });
};
module.exports = controller;