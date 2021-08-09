const issueToken = async ({userId}) => {
 const token = await jwt.sign(
      { uuid: userId },
      config.development.secret,
      {
        expiresIn: "30d",
      }
    );

    return token
}

module.exports = issueToken