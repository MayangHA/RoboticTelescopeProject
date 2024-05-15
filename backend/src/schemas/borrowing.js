const { z } = require('zod');
const {
  OCCUPATION,
  OBSERVATION_OBJECT,
  TELESCOPE_TYPE,
  BORROWING_STATUS,
} = require('../utils/constant');

exports.createBorrowingSchema = z.object({
  userId: z.number(),
  name: z.string(),
  email: z.string().email(),
  occupation: z.enum(Object.values(OCCUPATION)),
  nimNip: z.string(),
  rightAscescion: z.number(),
  declination: z.number(),
  magnitude: z.number(),
  observationObject: z.enum(Object.values(OBSERVATION_OBJECT)),
  objectType: z.string(),
  telescopeType: z.enum(Object.values(TELESCOPE_TYPE)),
  proposalUrl: z.string().url(),
  introductoryUrl: z.string().url(),
  borrowingTime: z.coerce.date(),
  borrowingTimeUntil: z.coerce.date(),
  status: z
    .enum(Object.values(BORROWING_STATUS))
    .default(BORROWING_STATUS.PENDING),
});

exports.updateBorrowingSchema = this.createBorrowingSchema.partial();
