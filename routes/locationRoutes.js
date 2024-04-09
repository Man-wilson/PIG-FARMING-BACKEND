const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post(
  '/',
  authMiddleware.authenticateUser,
  authMiddleware.authorizeUser('admin'),
  locationController.createLocation
);
router.get('/:id', locationController.getLocationById);
router.put(
  '/:id',
  authMiddleware.authenticateUser,
  authMiddleware.authorizeUser('admin'),
  locationController.updateLocation
);
router.delete(
  '/:id',
  authMiddleware.authenticateUser,
  authMiddleware.authorizeUser('admin'),
  locationController.deleteLocation
);
router.get('/', locationController.getAllLocations);
router.get('/province/:province', locationController.getLocationsByProvince);
router.get('/district/:district', locationController.getLocationsByDistrict);
router.get('/sector/:sector', locationController.getLocationsBySector);
router.get('/zipcode/:zipcode', locationController.getLocationsByZipCode);

module.exports = router;
