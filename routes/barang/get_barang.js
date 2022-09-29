const Router = require("express").Router();
const controller = require("../../controllers/barang/controllerGetBarang");

Router.get("/barang", controller.getAllBarang);
Router.get("/barang/id", controller.getBarangById);

module.exports = Router;
