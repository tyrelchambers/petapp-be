const QRCode = require('qrcode')
module.exports = async uuid => {
  try {
    await QRCode.toDataURL(uuid)
  } catch (err) {
    console.error(err)
  }
}