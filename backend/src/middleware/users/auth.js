const { asyncMw } = require('express-asyncmw');
const _ = require('lodash');
const { User } = require('../../models');
const { userLoginSchema, userRegisterSchema } = require('../../schemas/user');
const { compareText } = require('../../utils/hashing');
const { signJwtToken } = require('../../utils/jwt');

exports.loginMw = asyncMw(async (req, res) => {
  const body = userLoginSchema.safeParse(req.body);

  if (!body.success) {
    return res.status(400).json(body.error);
  }

  const user = await User.findOne({
    where: {
      email: body.data.email,
      role: body.data.role,
    },
  });

  if (!user) {
    return res.status(400).json({
      message: 'User not found',
    });
  }

  const isMatch = await compareText(body.data.password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      message: 'User not found',
    });
  }

  const token = signJwtToken(_.omit(user.dataValues, ['password']));

  return res.status(200).json({
    message: 'Login success',
    token,
  });
});

exports.registerMw = asyncMw(async (req, res) => {
  const body = userRegisterSchema.safeParse(req.body);

  if (!body.success) {
    return res.status(400).json(body.error);
  }

  const user = await User.create(body.data);

  return res.status(200).json({
    message: 'Register success',
    userId: user.dataValues.id,
  });
});
