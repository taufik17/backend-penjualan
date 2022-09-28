const Router = require("express").Router();
const controller = require("../../controllers/barang/controllerBarang");
const midBarang = require("../../middleware/barang");

Router.post("/barang/tambah", midBarang.checkParamAdd, controller.getAddBarang);
Router.patch("/barang/edit", midBarang.checkParamEdit, controller.getEditBarang);
Router.delete("/barang/delete", midBarang.checkParamDelete, controller.getDeleteBarang);

module.exports = Router;