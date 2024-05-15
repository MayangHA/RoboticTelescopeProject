const { Router } = require('express');
const FileController = require('../controller/file');
const { authMw } = require('../middleware/auth');
const { upload } = require('../utils/storage');

const router = Router();
const fileController = new FileController();

router.post('/', authMw, upload.array('files', 1), fileController.upload);
router.get('/', fileController.list);
router.get('/stats', fileController.stats);

module.exports = router;
