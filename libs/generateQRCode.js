const QRCode = require('qrcode')
const generateQRCode = async (uuid) => {
  return await QRCode.toDataURL(uuid)
}

module.exports = generateQRCode