const express = require('express');
const router = express.Router();
const pigController = require('../controllers/pigController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateUser, pigController.createPig);
router.get('/:id', pigController.getPigById);
router.put('/:id', authMiddleware.authenticateUser, pigController.updatePig);
router.delete('/:id', authMiddleware.authenticateUser, pigController.deletePig);
router.get('/', pigController.getAllPigs);
router.get('/farm/:farmId', pigController.getPigsByFarm);
router.get('/breed/:breed', pigController.getPigsByBreed);
router.get('/gender/:gender', pigController.getPigsByGender);
router.get('/health/:healthStatus', pigController.getPigsByHealthStatus);
router.put('/:id/farm', authMiddleware.authenticateUser, pigController.updatePigFarm);

module.exports = router;