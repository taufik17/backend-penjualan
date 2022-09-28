const model = require("../../model/transaksi/modelGetTransaksi");

const getAllTransaksi = async (req, res) => {
  try {
    const getData = await model.allTransaksi();
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAllTransaksi,
};
