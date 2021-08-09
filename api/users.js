const express = require('express');
const app = express.Router()

app.post('/v1/new', async (req, res, next) => {
  try {
   const {email, password} = req.body

    if (!email || !password) throw new Error("No email or password provided");

    const hashPassword = bcrypt.hashSync(password, 10);
    const existingUser = await User.findOne({
      where: {
        email,
      },
    }).then((res) => {
      if (res) {
        return res.dataValues;
      }
    });

    if (existingUser) throw new Error("User already exists");

    const user = await User.create({
      email,
      password: hashPassword,
      access_token,
      refresh_token,
      reddit_profile,
    });

    const token = jwt.sign(
      { uuid: user.uuid, email: user.email },
      config.development.secret,
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

module.exports = app