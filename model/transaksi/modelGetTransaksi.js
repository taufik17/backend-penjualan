const db = require("../../db");

const allTransaksi = () =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM transaksi 
      INNER JOIN barang ON barang.id_barang = transaksi.id_barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      ORDER BY transaksi.id_transaksi ASC`,
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

module.exports = {
  allTransaksi,
};
