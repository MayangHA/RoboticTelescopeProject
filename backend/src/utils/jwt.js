const jwtToken = require('jsonwebtoken');
const { env } = require('./env');

const jwtSecret = env.JWT_SECRET;

exports.signJwtToken = (payload, options) => {
  return jwtToken.sign(payload, jwtSecret, options);
};

exports.verifyJwtToken = (token) => {
  return jwtToken.verify(token, jwtSecret);
};
