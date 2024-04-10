const { Op } = require('sequelize');
const { User, Role, Location } = require('../models');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');

exports.createUser = async (userData) => {
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    roleId,
    locationId,
  } = userData;

  // Check if the username or email already exists
  const existingUser = await User.findOne({
    where: { [Op.or]: [{ username }, { email }] },
  });

  if (existingUser) {
    return null;
  }

  // Hash the password
  const hashedPassword = await hashPassword(password);

  // Create a new user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    firstName,
    lastName,
    phoneNumber,
    roleId,
    locationId,
  });

  return user;
};

exports.getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    include: [
      { model: Role, attributes: ['id', 'name'] },
      {
        model: Location,
        attributes: ['id', 'address', 'province', 'district', 'sector', 'zipCode'],
      },
    ],
  });

  return user;
};

exports.updateUser = async (userId, userData) => {
  const user = await User.findByPK(userId);

  if (!user) {
    return null;
  }

  //update the user fields
  Object.assign(user, userData);
  await user.save();

  return user;
};

exports.deleteUser = async (userId) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error('User not found');
  }

  await user.destroy();
};

exports.getAllUsers = async () => {
  const users = await User.findAll({
    include: [
      { model: Role, attributes: ['id', 'name'] },
      {
        model: Location,
        attributes: ['id', 'address', 'city', 'state', 'country', 'zipCode'],
      },
    ],
  });
  return users;
};

exports.getUserByUsername = async (username) => {
  const user = await User.findOne({
    where: { username },
    include: [
      { model: Role, attributes: ['id', 'name'] },
      {
        model: Location,
        attributes: ['id', 'address', 'city', 'state', 'country', 'zipcode'],
      },
    ],
  });

  return user;
};

exports.getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    include: [
      { model: Role, attributes: ['id', 'name'] },
      {
        model: Location,
        attributes: ['id', 'address', 'city', 'state', 'country', 'zipCode'],
      },
    ],
  });

  return user;
};

exports.updateUserPassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findByPk(userId);

  if (!user) {
    throw new Error('User not found');
  }

  // check if the current password matches
  const isPasswordvalid = await comparePassword(currentPassword, user.password);

  if (!isPasswordvalid) {
    throw new Error('Invalid current password');
  }

  // Hash the new password
  const hashedPassword = await hashPassword(newPassword);

  // Update the user's password
  user.password = hashedPassword;
  await user.save();
};

exports.updateUserRole = async (userId, roleId) => {
  const user = await User.findByPk(userId);

  if (!user) {
    return null;
  }

  // Update the user's role
  user.roleId = roleId;
  await user.save();

  return user;
};

exports.updateUserLocation = async (userId, locationId) => {
  const user = await user.findByPk(userId);

  if (!user) {
    return null;
  }

  // update user's location
  user.locationId = locationId;
  await user.save();

  return user;
};
