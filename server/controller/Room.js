const ProductModel = require("../models/Product");
const BenefitModel = require("../models/Benefits");
const RoomModel = require("../models/Room");
const message = require("../helper/messageResponse");
const commonController = require("./common");
const { pagination } = require("../helper/pagination");
const { messageSuccess } = require("../helper/messageResponse");
const Facilities = require("../models/Facilities");

const setRooms = async (dataProduct) => {
  const result = await Promise.all(
    dataProduct.rooms.splice(0, 1).map(async (item) => {
      const roomFind = await RoomModel.findOne({ _id: item });
      return roomFind;
    })
  );
  return result;
};

const setOptionsRoom = async (dataRoom) => {
  const test = await RoomModel.findOne({ _id: dataRoom._id }).populate([
    "benefits",
    "facilities",
  ]);

  const resultFacilities = await Promise.all(
    (dataSetAmenities = test.facilities.map(async (x) => {
      const test1 = await Facilities.findOne({ _id: x._id }).populate([
        "amenities",
      ]);
      return test1;
    }))
  );
  return {
    ...test._doc,
    facilities: resultFacilities,
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

  getRoomByProduct: async (req, res, next) => {
    const { productId, pageSize, pageNumber } = req.query;

    const dataFind = await pagination(RoomModel, pageSize, pageNumber, {
      productId,
    });

    const result = await Promise.all(
      (dataSetBenifits = dataFind.map(async (x) => {
        const dataOptions = await setOptionsRoom(x);

        return dataOptions;
      }))
    );

    res.send(messageSuccess("Get List Room By product Success", result));
  },

  getOneRoomLowestByProduct: async (req, res, next) => {
    const { productId } = req.query;

    const dataFindRoomd = await RoomModel.findOne({ productId });
    if (!dataFindRoomd) {
      //error
    }
    const result = await setOptionsRoom(dataFindRoomd);

    res.send(messageSuccess("Get Room Lowest By product Success", result));
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
  },
};
module.exports = controller;
