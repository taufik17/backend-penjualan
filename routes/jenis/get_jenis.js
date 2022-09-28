const Router = require("express").Router();
const controller = require("../../controllers/jenis/controllerGetJenis");

Router.get("/jenis", controller.getAllJenis);

module.exports = Router;
