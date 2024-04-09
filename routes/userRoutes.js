const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', authMiddleware.authenticateUser, userController.updateUser);
router.delete('/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.deleteUser);
router.get('/', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.getAllUsers);
router.get('/username/:username', userController.getUserByUsername);
router.get('/email/:email', userController.getUserByEmail);
router.put('/:id/password', authMiddleware.authenticateUser, userController.updateUserPassword);
router.put('/:id/role', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), userController.updateUserRole);
router.put('/:id/location', authMiddleware.authenticateUser, userController.updateUserLocation);

module.exports = router;