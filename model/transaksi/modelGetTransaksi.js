const db = require("../../db");

const allTransaksi = () =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM transaksi ORDER BY transaksi.id_transaksi ASC",
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
