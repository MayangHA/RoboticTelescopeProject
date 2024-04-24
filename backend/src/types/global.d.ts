import { envSchema } from '../utils/env';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Zod.infer<typeof envSchema> {}
  }
}

export {};
