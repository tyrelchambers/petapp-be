const express = require("express");
const generateQRCode = require("../libs/generateQRCode");
const app = express.Router();
const authHandler = require("../middleware/authHandler");

app.post("/v1/generate", authHandler, async (req, res, next) => {
  try {
    const { uuid } = req.body;
    const qr = await generateQRCode(uuid);
  
    res.send({petId: uuid, qr});
  } catch (error) {
    next(error);
  }
});

module.exports = app;
