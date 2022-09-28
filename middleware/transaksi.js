const modelTransaksi = require("../model/transaksi/modelTransaksi");

const checkParamAdd = async (req, res, next) => {
  try {
    const { id_barang, jumlah, tgl_transaksi } = req.body;
    const isValid = id_barang && jumlah && tgl_transaksi;
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

const processStok = async (req, res, next) => {
  try {
    const { id_barang, jumlah } = req.body;
    const isValid = id_barang && jumlah;
    if (isValid) {
      const cekStok = await modelTransaksi.cekStok(id_barang);
      if (cekStok.rows[0]?.stok - jumlah > 0) {
        const decrementStok = await modelTransaksi.decStok({
          id_barang,
          jumlah,
        });
        if (decrementStok) {
          next();
        } else {
          res.status(400).send("Error decrement Stok");
        }
      } else {
        res.status(400).send(`Stok Tidak Cukup, sisa ${cekStok.rows[0]?.stok}`);
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
  processStok,
};
