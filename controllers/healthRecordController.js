const healthRecordService = require('../services/healthRecordService');

exports.createHealthRecord = async (req, res, next) => {
  try {
    const healthRecord = await healthRecordService.createHealthRecord(req.body, req.user.id);
    res.status(201).json(healthRecord);
  } catch (error) {
    next(error);
  }
};

exports.getHealthRecordsByPig = async (req, res, next) => {
  try {
    const healthRecords = await healthRecordService.getHealthRecordsByPig(req.params.pigId);
    res.status(200).json(healthRecords);
  } catch (error) {
    next(error);
  }
};