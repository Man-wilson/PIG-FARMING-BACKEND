const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), roleController.createRole);
router.get('/:id', roleController.getRoleById);
router.put('/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), roleController.updateRole);
router.delete('/:id', authMiddleware.authenticateUser, authMiddleware.authorizeUser('admin'), roleController.deleteRole);
router.get('/', roleController.getAllRoles);

module.exports = router;
