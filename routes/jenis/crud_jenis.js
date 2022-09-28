const Router = require("express").Router();
const controller = require("../../controllers/jenis/controllerJenis");
const midJenis = require("../../middleware/jenis");

Router.post("/jenis/tambah", midJenis.checkParamAdd, controller.getAddJenis);
Router.patch("/jenis/edit", midJenis.checkParamEdit, controller.getEditJenis);
Router.delete("/jenis/delete", midJenis.checkParamDelete, controller.getDeleteJenis);

module.exports = Router;