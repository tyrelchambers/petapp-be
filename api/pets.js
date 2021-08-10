const express = require('express');
const db = require('../models/index')
const authHandler = require('../middleware/authHandler')
const app = express.Router()
app.post('/v1/new', authHandler, async (req, res, next) => {
  try {
    const {name, breed} = req.body
    const pet = await db.models.Pet.create({
      name,
      breed
    })
    res.send(pet)
  } catch (error) {
    next(error)
  }
})

module.exports = app