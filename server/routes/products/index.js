const express = require("express");
const User = require("./../../models/Users");
const controllerProduct = require("./../../controller/Product");
const multer = require("multer");
const store = multer.diskStorage({
  destination: "public/images",
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: store });
// var upload = multer({ dest: "./" });
// const Resize = require("./../../resize");

const route = express.Router();

const Get = async (id) => {
  return await User.findById(id, (err, data) => {
    Promise.resolve(data);
  });
};

route.get("/", controllerProduct.getData);
route.get("/getProductByLocation", controllerProduct.getProductByLocation);
route.get("/getProductRecommended", controllerProduct.getProductsRecommended);
route.get("/detail", controllerProduct.getDetailProduct);

module.exports = route;
