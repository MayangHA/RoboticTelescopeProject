// import { z } from 'zod';

// export const fileSchema = z.any().refine((files) => {
  
//   if (!Array.isArray(files) && !(files instanceof FileList)) return false;
//   if (files.length !== 1) return false;
  
//   if (!(files[0] instanceof File)) return false;

//   return true;
// }, 'Files are required');

// shared.js
import { z } from 'zod';

// ✅ This version allows optional files
export const fileSchema = z
  .any()
  .optional()
  .refine((files) => {
    // allow empty or undefined
    if (!files || files.length === 0) return true;
    if (!Array.isArray(files) && !(files instanceof FileList)) return false;
    if (files.length !== 1) return false;
    if (!(files[0] instanceof File)) return false;
    return true;
  }, 'Invalid file');

  // shared.js
export const createFileSchema = (isRequired = false) =>
  isRequired
    ? z
        .any()
        .refine((files) => {
          if (!Array.isArray(files) && !(files instanceof FileList)) return false;
          if (files.length !== 1) return false;
          if (!(files[0] instanceof File)) return false;
          return true;
        }, 'File is required')
    : z
        .any()
        .optional()
        .refine((files) => {
          if (!files || files.length === 0) return true;
          if (!Array.isArray(files) && !(files instanceof FileList)) return false;
          if (files.length !== 1) return false;
          if (!(files[0] instanceof File)) return false;
          return true;
        }, 'Invalid file');
