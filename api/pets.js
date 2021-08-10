const express = require('express');
const app = express.Router()

app.post('/v1/new', authHandler, async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

module.exports = app