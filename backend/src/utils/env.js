require('dotenv').config();
const { z } = require('zod');

exports.envSchema = z.object({
  DB_USER: z.string(),
  DB_PASS: z.string(),
  DB_NAME: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number().default(3306),
  PORT: z.coerce.number().default(3000),
  SALT_ROUNDS: z.coerce.number().default(10),
  JWT_SECRET: z.string().default('secret'),
});

exports.env = this.envSchema.parse(process.env);
