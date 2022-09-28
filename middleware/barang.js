const modelGetBarang = require("../model/barang/modelGetBarang");

const checkParamAdd = async (req, res, next) => {
  try {
    const { nama_barang, stok, jenis } = req.body;
    const isValid = nama_barang && stok && jenis;
    if (isValid) {
      next();
    } else {
      res.status(400).send("Error params");
      return;
    }
  } catch (error) {
    res.status(500).send("Found Error");
  }
};

const checkParamDelete = async (req, res, next) => {
  try {
    const { id_barang } = req.body;
    if (id_barang) {
      const checkBarang = await modelGetBarang.getByID(id_barang);
      if (checkBarang.rowCount > 0) {
        next();
      } else {
        res.status(400).send("Barang was not found");
      }
    } else {
      res.status(400).send("Error params");
      return;
    }
  } catch (error) {
    res.status(500).send("Found Error");
  }
};

const checkParamEdit = async (req, res, next) => {
  try {
    const { id_barang, nama_barang, stok, jenis_barang } = req.body;
    const isValid = id_barang && nama_barang && stok && jenis_barang;
    if (isValid) {
      const checkBarang = await modelGetBarang.getByID(id_barang);
      if (checkBarang.rowCount > 0) {
        next();
      } else {
        res.status(400).send("Barang was not found");
      }
    } else {
      res.status(400).send("Error params");
      return;
    }
  } catch (error) {
    res.status(500).send("Found Error");
  }
};

module.exports = {
  checkParamAdd,
  checkParamDelete,
  checkParamEdit,
};
