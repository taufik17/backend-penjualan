const model = require("../../model/transaksi/modelGetTransaksi");

const getAllTransaksi = async (req, res) => {
  try {
    const getData = await model.allTransaksi();
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getSearchTransaksi = async (req, res) => {
  try {
    const { keyword } = req.body;
    const getData = await model.searchTransaksi(keyword);
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getTransaksiTerendah = async (req, res) => {
  try {
    const { awal, akhir } = req.body;
    const getData = await model.transaksiRendah(awal, akhir);
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getTransaksiTertinggi = async (req, res) => {
  try {
    const { awal, akhir } = req.body;
    const getData = await model.transaksiTinggi(awal, akhir);
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAllTransaksi,
  getSearchTransaksi,
  getTransaksiTerendah,
  getTransaksiTertinggi,
};
