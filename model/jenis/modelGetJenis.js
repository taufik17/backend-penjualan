const db = require("../../db");

const allJenis = () =>
  new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM jenis ORDER BY jenis.id_jenis ASC",
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
      "SELECT * FROM jenis WHERE id_jenis = $1",
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
  allJenis,
  getByID,
};
