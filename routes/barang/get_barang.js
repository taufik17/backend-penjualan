const Router = require("express").Router();
const controller = require("../../controllers/barang/controllerGetBarang");

Router.get("/barang", controller.getAllBarang);

module.exports = Router;
