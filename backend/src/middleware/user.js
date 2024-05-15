const { asyncMw } = require('express-asyncmw');
const { USER_ROLE } = require('../utils/constant');

exports.adminOnlyMw = asyncMw(async (req, res, next) => {
  if (req.auth.role !== USER_ROLE.ADMIN) {
    return res.status(403).json({
      code: 403,
      message: 'Forbidden',
    });
  }

  return next();
});

exports.userOnlyMw = asyncMw(async (req, res, next) => {
  if (req.auth.role !== USER_ROLE.USER) {
    return res.status(403).json({
      code: 403,
      message: 'Forbidden',
    });
  }

  if (req.params.userId && +req.params.userId !== req.auth.userId) {
    return res.status(403).json({
      code: 403,
      message: 'Forbidden',
    });
  }

  return next();
});

exports.userOrAdminMw = asyncMw(async (req, res, next) => {
  if (
    req.auth.role !== USER_ROLE.ADMIN ||
    req.auth.userId !== +req.params.userId
  ) {
    return res.status(403).json({
      code: 403,
      message: 'Forbidden',
    });
  }

  return next();
});
