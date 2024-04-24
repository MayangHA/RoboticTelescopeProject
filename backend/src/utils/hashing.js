const bcrypt = require('bcrypt');
const { env } = require('./env');

exports.hashText = async (text) => {
  const salt = await bcrypt.genSalt(env.SALT_ROUNDS);

  return bcrypt.hash(text, salt);
};

exports.compareText = async (text, originalText) => {
  const result = await bcrypt.compare(text, originalText);

  return result;
};
