const express = require('express');
const app = express.Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const db = require('../models/index')
require('dotenv').config()

app.post('/v1/register', async (req, res, next) => {
  try {
   const {email, password} = req.body

    if (!email || !password) throw new Error("No email or password provided");

    const hashPassword = bcrypt.hashSync(password, 10);
    const existingUser = await db.models.User.findOne({
      where: {
        email,
      },
    }).then((res) => {
      if (res) {
        return res.dataValues;
      }
    });

    if (existingUser) throw new Error("User already exists");

    const user = await db.models.User.create({
      email,
      password: hashPassword,
      
    });

    const token = jwt.sign(
      { uuid: user.uuid },
      process.env.SECRET,
      {
       expiresIn: "1w",      }
    );

    res.status(200).send({
      token,
      user,
    });
  } catch (error) {
    next(error)
  }
})

app.post('/v1/login', async (req, res, next) => {
  try {
    const {email, password} = req.body
    if (!password || !email) throw new Error("Missing email or password");

    const user = await db.models.User.findOne({
      where: {
        email: email,
      },
    })
    if (!user) throw new Error("User does not exist");

    const hashPassword = await bcrypt.compareSync(password, user.password);
    if (!hashPassword) throw new Error("Incorrect password");

    const token = jwt.sign(
      { uuid: user.uuid},
      process.env.SECRET,
      {
       expiresIn: "1w",    
      }
    );

    res.send({
      token,
      user,
    });
  } catch (error) {
    next(error)
  }
})
module.exports = app