const express = require("express");
const app = express.Router();
const generateQRCode = require("../libs/generateQRCode");
app.post("/v1/generate", async (req, res, next) => {
  try {
    const {uuid}= req.body
    const code = generateQRCode(uuid)
    console.log(code);
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
});

module.exports = app;
