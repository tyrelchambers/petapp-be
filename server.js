require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || "4000";
const app = express();

// routes
const qr = require("./api/qrcode");
const auth = require('./api/auth')
const user = require('./api/users')

app.use(cors());
app.use(express.json());

app.use("/api/qr", qr);
app.use('/api/auth', auth)
app.use('/api/users', user)

app.use(function (err, req, res, next) {
  console.error(err.message);
  res.status(500).send(err.message);
});

app.listen(port, () => console.log("App running on " + port));
