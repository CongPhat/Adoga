const express = require("express");
const controllerRoom = require("./../controller/Room");
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

route.get("/", controllerRoom.getData);
route.get("/getRoomByProduct", controllerRoom.getRoomByProduct);
route.get("/getRoomLowestByProduct", controllerRoom.getOneRoomLowestByProduct);
route.get("/getDetailRoom", controllerRoom.getDetailRoom);

module.exports = route;
