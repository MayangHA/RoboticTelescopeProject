const { z } = require('zod');
const { USER_ROLE } = require('../utils/constant');

exports.userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([USER_ROLE.ADMIN, USER_ROLE.USER]).default(USER_ROLE.USER),
});

exports.userRegisterSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

exports.createUserSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum([USER_ROLE.ADMIN, USER_ROLE.USER]).default(USER_ROLE.USER),
});

exports.updateUserSchema = this.createUserSchema
  .omit({
    password: true,
  })
  .partial();

exports.updateUserPasswordSchema = z
  .object({
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Password and confirm password does not match.',
  });
