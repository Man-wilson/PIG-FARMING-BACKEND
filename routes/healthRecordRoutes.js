const express = require('express');
const router = express.Router();
const healthRecordController = require('../controllers/healthRecordController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateUser, healthRecordController.createHealthRecord);
router.get(
  '/pig/:pigId',
  authMiddleware.authenticateUser,
  healthRecordController.getHealthRecordsByPig
);

module.exports = router;
