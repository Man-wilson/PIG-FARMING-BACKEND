const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.generateToken = (userId) => {
  const payload = { userId };
  const options = { expiresIn: '1h' };
  return jwt.sign(payload, config.jwtSecret, options);
};

exports.verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, config.jwtSecret);
    return decodedToken;
  } catch (error) {
    console.log(error);
    throw new Error('Invalid Token');
  }
};
