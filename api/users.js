const express = require('express');
const authHandler = require('../middleware/authHandler');
const db = require('../models');
const app = express.Router()

app.get('/v1/me', authHandler,async (req, res, next) => {
  try {
    const user = await db.models.User.findOne({
      where: {
        uuid: res.locals.userId
      }
    })

    res.send(user)
  } catch (error) {
    next(error)
  }
})

module.exports = app