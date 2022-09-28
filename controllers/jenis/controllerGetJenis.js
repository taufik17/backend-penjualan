const model = require("../../model/jenis/modelGetJenis");

const getAllJenis = async (req, res) => {
  try {
    const getData = await model.allJenis();
    res.send({ data: getData.rows, jumlahData: getData.rowCount });
  } catch (error) {
    res.status(400).send("ada yang error");
  }
};

module.exports = {
  getAllJenis,
};
