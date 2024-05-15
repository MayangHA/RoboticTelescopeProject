const multer = require('multer');
const path = require('path');
const { FILE_EXTENSION } = require('./constant');

exports.storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'public');
  },
  filename(req, file, cb) {
    const originalFileName = file.originalname;
    const storedFileName = `${Date.now()}-${originalFileName}`;
    const mimeType = file.mimetype;

    req.uploaded = {
      storedFileName,
      originalFileName,
      mimeType,
      url: `/${storedFileName}`,
    };

    cb(null, storedFileName);
  },
});

exports.upload = multer({
  storage: this.storage,
  fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);
    const isAllowed = Object.values(FILE_EXTENSION).some((fe) =>
      ext.includes(fe)
    );

    if (!isAllowed) {
      return cb(
        new Error(
          `File extension is not allowed. (Only ${Object.values(FILE_EXTENSION).join(', ')} are allowed)`
        )
      );
    }

    cb(null, true);
  },
});
