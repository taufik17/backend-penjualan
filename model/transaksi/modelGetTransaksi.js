const db = require("../../db");

const allTransaksi = () =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM transaksi 
      INNER JOIN barang ON barang.id_barang = transaksi.id_barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      ORDER BY barang.nama_barang ASC`,
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const searchTransaksi = (keyword) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM transaksi 
      INNER JOIN barang ON barang.id_barang = transaksi.id_barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      WHERE LOWER(nama_barang) LIKE LOWER($1)
      ORDER BY barang.nama_barang ASC`,
      [`%${keyword}%`],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const transaksiTinggi = (awal, akhir) =>
  new Promise((resolve, reject) => {
    console.log(awal, akhir);
    db.query(
      `SELECT nama_jenis, SUM(jumlah) as jumlah FROM transaksi
      INNER JOIN barang ON barang.id_barang = transaksi.id_barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      WHERE (transaksi.tgl_transaksi >= $1 AND transaksi.tgl_transaksi <= $2)
      GROUP BY nama_jenis ORDER BY jumlah DESC`,
      [awal, akhir],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const transaksiRendah = (awal, akhir) =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT nama_jenis, SUM(jumlah) as jumlah FROM transaksi
      INNER JOIN barang ON barang.id_barang = transaksi.id_barang
      INNER JOIN jenis ON jenis.id_jenis = barang.jenis_barang
      WHERE (transaksi.tgl_transaksi >= $1 AND transaksi.tgl_transaksi <= $2)
      GROUP BY nama_jenis ORDER BY jumlah ASC`,
      [awal, akhir],
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
  searchTransaksi,
  transaksiTinggi,
  transaksiRendah,
};
