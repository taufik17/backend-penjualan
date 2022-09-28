require("dotenv").config();
const modelJenis = require("../../model/jenis/modelJenis");

const getAddJenis = async (req, res) => {
  try {
    const { nama_jenis } = req.body;
    const addJenis = await modelJenis.addJenis({
      nama_jenis
    });

    if (addJenis) {
      res.send("Add Jenis Barang Successfully");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("ada yang error");
  }
};

const getDeleteJenis = async (req, res) => {
  try {
    const { id_jenis } = req.body;
    const deleteJenis = await modelJenis.doDeleteJenis(id_jenis);
    if (deleteJenis) {
      res.send("Delete Successfully");
    } else {
      res.status(400).send("Failed delete");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

const getEditJenis = async (req, res) => {
  try {
    const { id_jenis, nama_jenis } = req.body;
    const editJenis = await modelJenis.doEditJenis({
      id_jenis,
      nama_jenis,
    });
    if (editJenis) {
      res.send("Edit Successfully");
    } else {
      res.status(400).send("Failed Edit");
    }
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAddJenis,
  getDeleteJenis,
  getEditJenis,
};
