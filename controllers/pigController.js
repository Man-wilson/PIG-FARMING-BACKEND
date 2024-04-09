const pigService = require('../services/pigService');

exports.createPig = async (req, res, next) => {
  try {
    const pig = await pigService.createPig(req.body);
    res.status(201).json(pig);
  } catch (error) {
    next(error);
  }
};

exports.getPigById = async (req, res, next) => {
  try {
    const pig = await pigService.getPigById(req.params.id);
    if (!pig) {
      return res.status(404).json({ message: 'Pig not found' });
    }
    res.status(200).json(pig);
  } catch (error) {
    next(error);
  }
};

exports.updatePig = async (req, res, next) => {
  try {
    const pig = await pigService.updatePig(req.params.id, req.body);
    if (!pig) {
      return res.status(404).json({ message: 'Pig not found' });
    }
    res.status(200).json(pig);
  } catch (error) {
    next(error);
  }
};

exports.deletePig = async (req, res, next) => {
  try {
    await pigService.deletePig(req.params.id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

exports.getAllPigs = async (req, res, next) => {
  try {
    const pigs = await pigService.getAllPigs();
    res.status(200).json(pigs);
  } catch (error) {
    next(error);
  }
};

exports.getPigsByFarm = async (req, res, next) => {
  try {
    const pigs = await pigService.getPigsByFarm(req.params.farmId);
    res.status(200).json(pigs);
  } catch (error) {
    next(error);
  }
};

exports.getPigsByBreed = async (req, res, next) => {
  try {
    const pigs = await pigService.getPigsByBreed(req.params.breed);
    res.status(200).json(pigs);
  } catch (error) {
    next(error);
  }
};

exports.getPigsByGender = async (req, res, next) => {
  try {
    const pigs = await pigService.getPigsByGender(req.params.gender);
    res.status(200).json(pigs);
  } catch (error) {
    next(error);
  }
};

exports.getPigsByHealthStatus = async (req, res, next) => {
  try {
    const pigs = await pigService.getPigsByHealthStatus(req.params.healthStatus);
    res.status(200).json(pigs);
  } catch (error) {
    next(error);
  }
};

exports.updatePigFarm = async (req, res, next) => {
  try {
    const pig = await pigService.updatePigFarm(req.params.id, req.body.farmId);
    if (!pig) {
      return res.status(404).json({ message: 'Pig not found' });
    }
    res.status(200).json(pig);
  } catch (error) {
    next(error);
  }
};