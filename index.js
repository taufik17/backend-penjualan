const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
const port = process.env.PORT || process.env.EXPRESS_PORT;
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');

const getBarang = require('./routes/barang/get_barang');
const crudBarang = require('./routes/barang/crud_barang');
const getJenis = require('./routes/jenis/get_jenis');
const crudJenis = require('./routes/jenis/crud_jenis');
const getTransaksi = require('./routes/transaksi/get_transaksi');
const crudTransaksi = require('./routes/transaksi/crud_transaksi');

app.use(helmet());
app.use(xss());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const allowlist = [
    'http://localhost:3000',
  ];
  const corsOptionsDelegate = function (req, callback) {
    let corsOption;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
      corsOption = { origin: true };
    } else {
      corsOption = { origin: false };
    }
    callback(null, corsOption);
  };

app.use('/', cors(corsOptionsDelegate), getBarang);
app.use('/', cors(corsOptionsDelegate), crudBarang);
app.use('/', cors(corsOptionsDelegate), getJenis);
app.use('/', cors(corsOptionsDelegate), crudJenis);
app.use('/', cors(corsOptionsDelegate), getTransaksi);
app.use('/', cors(corsOptionsDelegate), crudTransaksi);

app.use("*", (req, res) => {
  res.send("Sukses");
});

app.listen(port, () => {
  console.log(`Backend Penjualan app listening on port ${port}`);
});
