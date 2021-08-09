const express = require("express");
const app = express.Router();
const QRCode = require("qrcode");
app.post("/v1/generate", async (req, res, next) => {
  try {
    QRCode.toString(
      "76hU-977h-h8g8hkj-987guk",
      { type: "terminal" },
      function (err, url) {
        console.log(url);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
