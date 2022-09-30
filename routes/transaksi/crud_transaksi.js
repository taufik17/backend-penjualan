const Router = require("express").Router();
const controller = require("../../controllers/transaksi/controllerTransaksi");
const midTransaksi = require("../../middleware/transaksi");

Router.post("/transaksi/add", midTransaksi.checkParamAdd, midTransaksi.processStok, controller.getAddTransaksi);
Router.post("/transaksi/tambah", midTransaksi.checkParamTambah, midTransaksi.processKurangStok, controller.getTambahTransaksi);

module.exports = Router;