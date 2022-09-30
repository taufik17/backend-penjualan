require("dotenv").config();
const modelTransaksi = require("../../model/transaksi/modelTransaksi");

const getAddTransaksi = async (req, res) => {
  try {
    const { id_barang, jumlah, tgl_transaksi } = req.body;
    const addTransaksi = await modelTransaksi.addTransaksi({
      id_barang,
      jumlah,
      tgl_transaksi,
    });

    if (addTransaksi) {
      res.send("Transaksi Successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

const getTambahTransaksi = async (req, res) => {
  try {
    const { data } = req.body;
    const dataTransaksi = JSON.parse(data);

    const asyncRes = await Promise.all(
      dataTransaksi.map(async (x) => {
        await modelTransaksi.tambahTransaksi(
          x.id_barang,
          x.jumlah,
          x.tgl_transaksi,
        );
      })
    );

    if (asyncRes) {
      res.send("Transaksi Successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAddTransaksi,
  getTambahTransaksi,
};
