const locationService = require('../services/locationService');

exports.createLocation = async (req, res, next) => {
  try {
    const location = await locationService.createLocation(req.body);

    res.status(201).json(location);
  } catch (error) {
    next(error);
  }
};

exports.getLocationById = async (req, res, next) => {
  try {
    const location = await locationService.getLocationById(req.params.id);

    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.status(200).json(location);
  } catch (error) {
    next(error);
  }
};

exports.updateLocation = async (req, res, next) => {
  try {
    const location = await locationService.updateLocation(
      req.params.id,
      req.body
    );

    if (!location) {
      return res.status(404).json({ message: 'No location found to update' });
    }

    return res.status(200).json(location);
  } catch (error) {
    next(error);
  }
};

exports.deleteLocation = async (req, res, next) => {
  try {
    await locationService.deleteLocation(req.params.id);
    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

exports.getAllLocations = async (req, res, next) => {
  try {
    const locations = await locationService.getAllLocations();
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};

exports.getLocationsByProvince = async (req, res, next) => {
  try {
    const locations = await locationService.getLocationsByProvince(req.params.province);
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};

exports.getLocationsByDistrict = async (req, res, next) => {
  try {
    const locations = await locationService.getLocationsByDistrict(
      req.params.district
    );
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};

exports.getLocationsBySector = async (req, res, next) => {
  try {
    const locations = await locationService.getLocationsBySector(
      req.params.sector
    );
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};

exports.getLocationsByZipCode = async (req, res, next) => {
  try {
    const locations = await locationService.getLocationsByZipCode(
      req.params.zipcode
    );
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};
