const { Farm } = require('../models');

exports.createFarm = async (farmData) => {
  try {
    // check for existing Farm
    const existingFarm = await Farm.findOne({ where: { name: farmData.name } });

    if (existingFarm) {
      throw new Error('Farm already exists');
    }

    const farm = await Farm.create(farmData);
    return farm;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getFarmById = async (farmId) => {
  try {
    const farm = await Farm.findByPk(farmId);
    return farm;
  } catch (error) {
    throw new Error('Failed to retrieve farm');
  }
};

exports.updateFarm = async (farmId, farmData) => {
  try {
    const farm = await Farm.findByPk(farmId);
    if (!farm) {
      return null;
    }
    await farm.update(farmData);
    return farm;
  } catch (error) {
    throw new Error('Failed to update farm');
  }
};

exports.deleteFarm = async (farmId) => {
  try {
    const farm = await Farm.findByPk(farmId);
    if (!farm) {
      throw new Error('Farm not found');
    }
    await farm.destroy();
  } catch (error) {
    throw new Error('Failed to delete farm');
  }
};

exports.getAllFarms = async () => {
  try {
    const farms = await Farm.findAll();
    return farms;
  } catch (error) {
    throw new Error('Failed to retrieve farms');
  }
};

exports.getFarmsByUser = async (userId) => {
  try {
    const farms = await Farm.findAll({ where: { userId } });
    return farms;
  } catch (error) {
    throw new Error('Failed to retrieve farms by user');
  }
};

exports.getFarmsByLocation = async (locationId) => {
  try {
    const farms = await Farm.findAll({ where: { locationId } });
    return farms;
  } catch (error) {
    throw new Error('Failed to retrieve farms by location');
  }
};

exports.updateFarmLocation = async (farmId, locationId) => {
  try {
    const farm = await Farm.findByPk(farmId);
    if (!farm) {
      return null;
    }
    await farm.update({ locationId });
    return farm;
  } catch (error) {
    throw new Error('Failed to update farm location');
  }
};
