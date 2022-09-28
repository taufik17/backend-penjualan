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

module.exports = {
  allJenis,
};
