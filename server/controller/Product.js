const ProductModel = require("../models/Product");
const BenefitModel = require("../models/Benefits");
const RoomModel = require("../models/Room");
const RatingModel = require("../models/Rating");
const commonController = require("./common");
const message = require("../helper/messageResponse");
const { pagination } = require("../helper/pagination");
const { messageSuccess } = require("../helper/messageResponse");

const setOptionRooms = async (
  dataProduct,
  isRoom = false,
  isRating = false
) => {
  let resultRooms;
  let resultRating;
  const resultBenefits = await Promise.all(
    dataProduct.benefits.map(async (x) => {
      const dataBenefit = await BenefitModel.findOne({
        _id: x,
      }).populate(["benefits"]);
      return dataBenefit;
    })
  );

  if (isRoom) {
    resultRooms = await Promise.all(
      dataProduct.rooms.map(async (x) => {
        const dataRooms = await RoomModel.findOne({
          _id: x,
        }).populate(["rooms"]);
        return dataRooms;
      })
    );
  }

  if (isRating) {
    resultRating = await Promise.all(
      dataProduct.ratingDetail.map(async (x) => {
        const dataRating = await RatingModel.findOne({
          _id: x.ratingId,
        }).populate("ratingDetail.ratingId");
        return {
          ...x._doc,
          ...dataRating._doc,
        };
      })
    );
  }

  return {
    ...dataProduct._doc,
    benefits: resultBenefits,
    rooms: resultRooms,
    productRatingDetail: resultRating,
  };
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

    const result = await Promise.all(
      dataFind.map(async (item) => {
        const dataResult = await setOptionRooms(item);
        return dataResult;
      })
    );

    res.send(messageSuccess("Get List Product By Loction Success", result));
  },

  getProductsRecommended: async (req, res, next) => {
    const { pageSize, pageNumber, rating = 3, discount = 50 } = req.query;

    const dataFind = await pagination(ProductModel, pageSize, pageNumber, {
      rating: { $gt: rating },
      discount: { $gt: discount },
    });

    const result = await Promise.all(
      dataFind.map(async (item) => {
        const dataResult = await setOptionRooms(item);
        return dataResult;
      })
    );

    res.send(messageSuccess("Get Product Recommended Success", result));
  },

  getDetailProduct: async (req, res, next) => {
    const { productId } = req.query;

    let dataProduct = await ProductModel.findOne({
      _id: productId,
    });

    const dataResult = await setOptionRooms(dataProduct, true, true);

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
