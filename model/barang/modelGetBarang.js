const db = require("../../db");

const allBarang = () =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      ORDER BY barang.id_barang ASC`,
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const getByID = (id) =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM barang WHERE id_barang = $1",
      [id],
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
  allBarang,
  getByID,
};
