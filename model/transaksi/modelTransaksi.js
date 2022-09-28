const db = require("../../db");

const addTransaksi = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO transaksi (tgl_transaksi, jumlah, id_barang) VALUES ($1, $2, $3) RETURNING *",
      [props.tgl_transaksi, props.jumlah, props.id_barang],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const decStok = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      "UPDATE barang SET stok = (stok - $1) WHERE id_barang = $2",
      [props.jumlah, props.id_barang],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const cekStok = (id) =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT stok FROM barang WHERE id_barang = $1",
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
  addTransaksi,
  decStok,
  cekStok,
};
