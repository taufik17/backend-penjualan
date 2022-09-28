const Router = require("express").Router();
const controller = require("../../controllers/transaksi/controllerGetTransaksi");

Router.get("/transaksi", controller.getAllTransaksi);

module.exports = Router;
