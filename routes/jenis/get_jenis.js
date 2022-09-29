const Router = require("express").Router();
const controller = require("../../controllers/jenis/controllerGetJenis");

Router.get("/jenis", controller.getAllJenis);
Router.post("/jenis/id", controller.getJenisById);

module.exports = Router;
