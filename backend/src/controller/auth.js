const _ = require('lodash');
const { asyncMw } = require('express-asyncmw');
const { User } = require('../models');
const { compareText, hashText } = require('../utils/hashing');
const { signJwtToken } = require('../utils/jwt');
const { userLoginSchema, userRegisterSchema } = require('../schemas/user');

class AuthController {
  constructor() {}

  login = asyncMw(async (req, res) => {
    const body = userLoginSchema.parse(req.body);

    const user = await User.findOne({
      where: {
        email: body.email,
        role: body.role,
      },
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        message: 'User not found.',
      });
    }

    const isMatch = await compareText(body.password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        code: 404,
        message: 'User not found.',
      });
    }

    const token = signJwtToken(_.omit(user.dataValues, ['password']));

    return res.status(200).json({
      code: 200,
      data: token,
    });
  });

  register = asyncMw(async (req, res) => {
    const body = userRegisterSchema.parse(req.body);
    body.password = await hashText(body.password);

    const user = await User.create(body);

    return res.status(200).json({
      code: 200,
      data: user,
    });
  });
}

module.exports = AuthController;
