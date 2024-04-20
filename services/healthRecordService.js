const { HealthRecord, Pig, User } = require('../models');

exports.createHealthRecord = async (healthRecordData, vetId) => {
  const { date, description, treatment, pigId } = healthRecordData;
  const healthRecord = await HealthRecord.create({
    date,
    description,
    treatment,
    pigId,
    vetId,
  });
  return healthRecord;
};

exports.getHealthRecordsByPig = async (pigId) => {
  const healthRecords = await HealthRecord.findAll({
    where: { pigId },
    include: [
      { model: Pig, attributes: ['id', 'breed'] },
      { model: User, as: 'vet', attributes: ['id', 'username'] },
    ],
  });
  return healthRecords;
};
