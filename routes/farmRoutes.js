const express = require('express');
const router = express.Router();
const farmController = require('../controllers/farmController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware.authenticateUser, farmController.createFarm);
router.get('/:id', farmController.getFarmById);
router.put('/:id', authMiddleware.authenticateUser, farmController.updateFarm);
router.delete(
  '/:id',
  authMiddleware.authenticateUser,
  farmController.deleteFarm
);
router.get('/', farmController.getAllFarms);
router.get('/user/:userId', farmController.getFarmsByUser);
router.get('/location/:locationId', farmController.getFarmsByLocation);
router.put(
  '/:id/location',
  authMiddleware.authenticateUser,
  farmController.updateFarmLocation
);

module.exports = router;
