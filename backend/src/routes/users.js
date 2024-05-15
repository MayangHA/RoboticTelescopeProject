const { Router } = require('express');
const UserController = require('../controller/users');
const { authMw } = require('../middleware/auth');
const { adminOnlyMw, userOrAdminMw } = require('../middleware/user');

const router = Router();

const userController = new UserController();

router.post('/', authMw, adminOnlyMw, userController.create);
router.patch('/:userId', authMw, userOrAdminMw, userController.update);
router.post(
  '/:userId/change-password',
  authMw,
  userOrAdminMw,
  userController.updatePassword
);
router.get('/:userId', authMw, userOrAdminMw, userController.find);
router.get('/', authMw, adminOnlyMw, userController.list);
router.delete('/:userId', authMw, userOrAdminMw, userController.delete);

module.exports = router;
