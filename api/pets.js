const express = require('express');
const db = require('../models/index')
const authHandler = require('../middleware/authHandler')
const app = express.Router()

app.post('/v1/new', authHandler, async (req, res, next) => {
  try {
    const {name, breed} = req.body
    const pet = await db.models.Pet.create({
      name,
      breed,
      userId: res.locals.userId
    })
    res.send(pet)
  } catch (error) {
    next(error)
  }
})
app.get('/v1/me', authHandler, async (req, res, next) => {
  try {
    const pets = await db.models.Pet.findAll({
      where: {
        userId: res.locals.userId
      }
    })

    res.send(pets)
  } catch (error) {
    next(error)
  }
})

app.put('/v1/:pet_id/update', authHandler, async (req, res, next) => {
  try {
    await db.models.Pet.update({...req.body}, {
      where:{ 
        uuid: req.params.pet_id,
        userId: res.locals.userId
      }
    })
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

module.exports = app