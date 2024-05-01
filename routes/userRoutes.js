const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', authMiddleware.authenticateUser, userController.updateUser);
router.delete('/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.deleteUser);
router.get('/', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.getAllUsers);

router.get('/role/:roleId', authMiddleware.authenticateUser, userController.getUsersByRole);

router.get('/username/:username', userController.getUserByUsername);
router.get('/email/:email', userController.getUserByEmail);
router.put('/password/:id', authMiddleware.authenticateUser, userController.updateUserPassword);
router.put('/role/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.updateUserRole);
router.put('/location/:id', authMiddleware.authenticateUser, userController.updateUserLocation);

module.exports = router;
