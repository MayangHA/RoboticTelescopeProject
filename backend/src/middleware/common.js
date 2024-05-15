const _ = require('lodash');
const { UniqueConstraintError, ValidationError } = require('sequelize');
const { ZodError } = require('zod');

// eslint-disable-next-line consistent-return, max-params
exports.onErrorMw = (err, req, res, next) => {
  if (!err) return next();

  if (
    err instanceof ZodError ||
    err instanceof UniqueConstraintError ||
    err instanceof ValidationError
  ) {
    return res.status(400).json({
      ..._.pick(err, ['name', 'errors']),
      code: 400,
    });
  }

  return res.status(500).json({
    code: 500,
    message: err.message,
  });
};
