const db = require("../../db");

const addBarang = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO barang (nama_barang, stok, jenis_barang) VALUES ($1, $2, $3) RETURNING *",
      [props.nama_barang, props.stok, props.jenis],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const doDeleteBarang = (id) =>
  new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM barang WHERE id_barang = $1",
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

const doEditBarang = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      'UPDATE barang SET nama_barang = $1, stok = $2, jenis_barang = $3 WHERE id_barang = $4',
      [props.nama_barang, props.stok, props.jenis_barang, props.id_barang],
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
  addBarang,
  doDeleteBarang,
  doEditBarang,
};
