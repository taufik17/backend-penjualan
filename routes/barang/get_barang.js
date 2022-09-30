const Router = require("express").Router();
const controller = require("../../controllers/barang/controllerGetBarang");

Router.get("/barang", controller.getAllBarang);
Router.post("/barang/id", controller.getBarangById);
Router.post('/barang/search', controller.getSearchBarang);

module.exports = Router;
