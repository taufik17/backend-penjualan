const Router = require("express").Router();
const controller = require("../../controllers/transaksi/controllerTransaksi");
const midTransaksi = require("../../middleware/transaksi");

Router.post("/transaksi/add", midTransaksi.checkParamAdd, midTransaksi.processStok, controller.getAddTransaksi);

module.exports = Router;