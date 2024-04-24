const { Router } = require('express');
const authMw = require('../../middleware/users/auth');

const router = Router();

router.post('/login', authMw.loginMw);
router.post('/register', authMw.registerMw);

module.exports = router;
