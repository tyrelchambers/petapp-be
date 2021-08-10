require('dotenv').config()

const issueToken = async ({userId}) => {
 const token = await jwt.sign(
      { uuid: userId },
      process.env.SECRET,
      {
        expiresIn: "30d",
      }
    );

    return token
}

module.exports = issueToken