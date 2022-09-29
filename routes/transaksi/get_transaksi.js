const Router = require("express").Router();
const controller = require("../../controllers/transaksi/controllerGetTransaksi");

Router.post("/transaksi/tertinggi", controller.getTransaksiTertinggi);
Router.post("/transaksi/terendah", controller.getTransaksiTerendah);
Router.get("/transaksi", controller.getAllTransaksi);
Router.post('/transaksi/search', controller.getSearchTransaksi);

module.exports = Router;
