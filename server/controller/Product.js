const ProductModel = require("../models/Product");
const User = require("../models/Users");
const Comment = require("../models/Comments");
const message = require("../helper/messageResponse");

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
};
module.exports = controller;
