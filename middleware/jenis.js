const modelGetJenis = require("../model/jenis/modelGetJenis");

const checkParamAdd = async (req, res, next) => {
  try {
    const { nama_jenis } = req.body;
    if (nama_jenis) {
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
    const { id_jenis } = req.body;
    if (id_jenis) {
      const checkJenis = await modelGetJenis.getByID(id_jenis);
      if (checkJenis.rowCount > 0) {
        next();
      } else {
        res.status(400).send("Jenis was not found");
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
    const { id_jenis, nama_jenis } = req.body;
    const isValid = id_jenis && nama_jenis;
    if (isValid) {
      const checkJenis = await modelGetJenis.getByID(id_jenis);
      if (checkJenis.rowCount > 0) {
        next();
      } else {
        res.status(400).send("Jenis was not found");
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
