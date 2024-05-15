const { z } = require('zod');

exports.fileListQuery = z
  .object({
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.startDate && data.endDate && data.endDate < data.startDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'endDate must be greater than startDate',
      });
    }

    if (data.endDate) return;

    // Automatically set the endDate to startDate if not exists
    data.endDate = data.startDate;
  });
