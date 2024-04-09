const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateUser, notificationController.createNotification);
router.get('/', authMiddleware.authenticateUser, notificationController.getNotifications);
router.put('/:id/read', authMiddleware.authenticateUser, notificationController.markNotificationAsRead);

module.exports = router;