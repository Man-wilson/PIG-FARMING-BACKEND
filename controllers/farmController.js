const farmService = require('../services/farmService');

exports.createFarm = async (req, res, next) => {
  try {
    const farm = await farmService.createFarm(req.body);
    res.status(201).json(farm);
  } catch (error) {
    next(error);
  }
};

exports.getFarmById = async (req, res, next) => {
  try {
    const farm = await farmService.getFarmById(req.params.id);
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }
    res.status(200).json(farm);
  } catch (error) {
    next(error);
  }
};

exports.updateFarm = async (req, res, next) => {
  try {
    const farm = await farmService.updateFarm(req.params.id, req.body);
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }
    res.status(200).json(farm);
  } catch (error) {
    next(error);
  }
};

exports.deleteFarm = async (req, res, next) => {
  try {
    await farmService.deleteFarm(req.params.id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

exports.getAllFarms = async (req, res, next) => {
  try {
    const farms = await farmService.getAllFarms();
    res.status(200).json(farms);
  } catch (error) {
    next(error);
  }
};

exports.getFarmsByUser = async (req, res, next) => {
  try {
    const farms = await farmService.getFarmsByUser(req.params.userId);
    res.status(200).json(farms);
  } catch (error) {
    next(error);
  }
};

exports.getFarmsByLocation = async (req, res, next) => {
  try {
    const farms = await farmService.getFarmsByLocation(req.params.locationId);
    res.status(200).json(farms);
  } catch (error) {
    next(error);
  }
};

exports.updateFarmLocation = async (req, res, next) => {
  try {
    const farm = await farmService.updateFarmLocation(req.params.id, req.body.locationId);
    if (!farm) {
      return res.status(404).json({ message: 'Farm not found' });
    }
    res.status(200).json(farm);
  } catch (error) {
    next(error);
  }
};
