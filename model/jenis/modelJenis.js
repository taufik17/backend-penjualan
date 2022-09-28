const db = require("../../db");

const addJenis = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO jenis (nama_jenis) VALUES ($1) RETURNING *",
      [props.nama_jenis],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });

const doDeleteJenis = (id) =>
  new Promise((resolve, reject) => {
    db.query(
      "DELETE FROM jenis WHERE id_jenis = $1",
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

const doEditJenis = (props) =>
  new Promise((resolve, reject) => {
    db.query(
      "UPDATE jenis SET nama_jenis = $1 WHERE id_jenis = $2",
      [props.nama_jenis, props.id_jenis],
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
  addJenis,
  doDeleteJenis,
  doEditJenis,
};
