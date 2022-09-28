require("dotenv").config();
const modelBarang = require("../../model/barang/modelBarang");

const getAddBarang = async (req, res) => {
  try {
    const { nama_barang, stok, jenis } = req.body;
    const addBarang = await modelBarang.addBarang({
      nama_barang,
      stok,
      jenis,
    });

    if (addBarang) {
      res.send("Add Barang Successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

const getDeleteBarang = async (req, res) => {
  try {
    const { id_barang } = req.body;
    const deleteBarang = await modelBarang.doDeleteBarang(id_barang);
    if (deleteBarang) {
      res.send("Delete Successfully");
    } else {
      res.status(400).send("Failed delete");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getEditBarang = async (req, res) => {
  try {
    const { id_barang, nama_barang, stok, jenis_barang } = req.body;
    const editBarang = await modelBarang.doEditBarang({
      id_barang,
      nama_barang,
      stok,
      jenis_barang,
    });
    if (editBarang) {
      res.send("Edit Successfully");
    } else {
      res.status(400).send("Failed edit");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAddBarang,
  getDeleteBarang,
  getEditBarang,
};
