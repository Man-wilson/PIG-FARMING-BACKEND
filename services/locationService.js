const { Location } = require('../models');

exports.createLocation = async (locationData) => {
  try {
    const location = await Location.create(locationData);
    return location;
  } catch (error) {
    throw new Error('Failed to create location');
  }
};

exports.getLocationById = async (locationId) => {
  try {
    const location = await Location.findByPk(locationId);

    return location;
  } catch (error) {
    throw new Error('Failed to retrieve location!');
  }
};

exports.updateLocation = async (locationId, locationData) => {
  try {
    const location = await Location.findByPk(locationId);

    if (!location) {
      return null;
    }

    Object.assign(location, locationData);

    await location.save();
    return location;
  } catch (error) {
    throw new Error('Failed to update location!');
  }
};

exports.deleteLocation = async (locationId) => {
  try {
    const location = await Location.findByPk(locationId);

    if (!location) {
      throw new Error('Location not found!');
    }

    await location.destroy();
  } catch (error) {
    throw new Error('Failed to delete location');
  }
};

exports.getAllLocations = async () => {
  try {
    const locations = await Location.findAll();
    return locations;
  } catch (error) {
    throw new Error('Failed to retrieve locations!');
  }
};

exports.getLocationsByProvince = async (province) => {
  try {
    const locations = await Location.findAll({
      where: { province },
    });
    return locations;
  } catch (error) {
    throw new Error('Failed to retrieve locations!');
  }
};

exports.getLocationsByDistrict = async (district) => {
  try {
    const locations = await Location.findAll({ where: { district } });
    return locations;
  } catch (error) {
    throw new Error('Failed to retrieve locations!');
  }
};

exports.getLocationsBySector = async (sector) => {
  try {
    const locations = await Location.findAll({ where: { sector } });
    return locations;
  } catch (error) {
    throw new Error('Failed to retrieve locations!');
  }
};

exports.getLocationsByZipCode = async (zipcode) => {
  try {
    const locations = await Location.findAll({ where: { zipcode } });
    return locations;
  } catch (error) {
    throw new Error('Failed to retrieve locations!');
  }
};
