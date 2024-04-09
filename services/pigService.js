const Pig = require('../models/pig');

exports.createPig = async (pigData) => {
  try {
    const pig = await Pig.create(pigData);
    return pig;
  } catch (error) {
    throw new Error('Failed to create pig');
  }
};

exports.getPigById = async (pigId) => {
  try {
    const pig = await Pig.findByPk(pigId);
    return pig;
  } catch (error) {
    throw new Error('Failed to retrieve pig');
  }
};

exports.updatePig = async (pigId, pigData) => {
  try {
    const pig = await Pig.findByPk(pigId);
    if (!pig) {
      return null;
    }
    await pig.update(pigData);
    return pig;
  } catch (error) {
    throw new Error('Failed to update pig');
  }
};

exports.deletePig = async (pigId) => {
  try {
    const pig = await Pig.findByPk(pigId);
    if (!pig) {
      throw new Error('Pig not found');
    }
    await pig.destroy();
  } catch (error) {
    throw new Error('Failed to delete pig');
  }
};

exports.getAllPigs = async () => {
  try {
    const pigs = await Pig.findAll();
    return pigs;
  } catch (error) {
    throw new Error('Failed to retrieve pigs');
  }
};

exports.getPigsByFarm = async (farmId) => {
  try {
    const pigs = await Pig.findAll({ where: { farmId } });
    return pigs;
  } catch (error) {
    throw new Error('Failed to retrieve pigs by farm');
  }
};

exports.getPigsByBreed = async (breed) => {
  try {
    const pigs = await Pig.findAll({ where: { breed } });
    return pigs;
  } catch (error) {
    throw new Error('Failed to retrieve pigs by breed');
  }
};

exports.getPigsByGender = async (gender) => {
  try {
    const pigs = await Pig.findAll({ where: { gender } });
    return pigs;
  } catch (error) {
    throw new Error('Failed to retrieve pigs by gender');
  }
};

exports.getPigsByHealthStatus = async (healthStatus) => {
  try {
    const pigs = await Pig.findAll({ where: { healthStatus } });
    return pigs;
  } catch (error) {
    throw new Error('Failed to retrieve pigs by health status');
  }
};

exports.updatePigFarm = async (pigId, farmId) => {
  try {
    const pig = await Pig.findByPk(pigId);
    if (!pig) {
      return null;
    }
    await pig.update({ farmId });
    return pig;
  } catch (error) {
    throw new Error('Failed to update pig farm');
  }
};
