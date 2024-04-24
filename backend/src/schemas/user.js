const { z } = require('zod');
const { USER_ROLE } = require('../utils/constant');

exports.userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  role: z.enum([USER_ROLE.ADMIN, USER_ROLE.USER]).default(USER_ROLE.USER),
});

exports.userRegisterSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
});
