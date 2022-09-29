const model = require("../../model/barang/modelGetBarang");

const getAllBarang = async (req, res) => {
  try {
    const getData = await model.allBarang();
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getBarangById = async (req, res) => {
  try {
    const { id_barang } = req.body;
    const getData = await model.getByID(id_barang);
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAllBarang,
  getBarangById,
};
