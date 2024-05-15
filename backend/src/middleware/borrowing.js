const { asyncMw } = require('express-asyncmw');
const { Borrowing } = require('../models');
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
  const borrowing = await Borrowing.findOne({
    where: {
      borrowingId: +req.params.borrowingId,
    },
  });

  if (!borrowing) {
    return res.status(404).json({
      code: 404,
      message: 'Borrowing not found.',
    });
  }

  if (
    req.auth.role !== USER_ROLE.ADMIN ||
    req.auth.userId !== borrowing.dataValues.userId
  ) {
    return res.status(403).json({
      code: 403,
      message: 'Forbidden',
    });
  }

  return next();
});
