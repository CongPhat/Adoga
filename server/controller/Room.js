const ProductModel = require("../models/Product");
const BenefitModel = require("../models/Benefits");
const RoomModel = require("../models/Room");
const message = require("../helper/messageResponse");
const commonController = require("./common");
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

  getRoomByProduct: async (req, res, next) => {
    const { productId, pageSize, pageNumber } = req.query;

    const dataFind = await pagination(RoomModel, pageSize, pageNumber, {
      productId,
    });

    const result = await Promise.all(
      (dataSetBenifits = dataFind.map(async (x) => {
        const dataBenefit = await commonController.setBenefits(x);
        const dataFacilities = await commonController.setFacilities(
          x.facilities
        );

        const resultAmenities = await Promise.all(
          (dataSetBenifits = dataFacilities.map(async (x) => {
            const dataAmenities = await commonController.setAmenities(
              x.amenities
            );
            return {
              ...x._doc,
              amenities: dataAmenities,
            };
          }))
        );

        return {
          ...x._doc,
          benefits: dataBenefit,
          facilities: resultAmenities,
        };
      }))
    );

    res.send(messageSuccess("Get List Room By product Success", result));
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

    const dataBenefit = await setBenefits(dataProduct);
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
