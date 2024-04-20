const { Role } = require('../models');

exports.createRole = async (roleData) => {
  const { name } = roleData;

  // check if the role already exists
  const existingRole = await Role.findOne({ where: { name } });
  if (existingRole) {
    throw new Error('Role already exists');
  }

  const role = await Role.create({
    name,
  });

  return role;
};

exports.getRoleById = async (roleId) => {
  const role = await Role.findByPk(roleId);
  return role;
};

exports.updateRole = async (roleId, roleData) => {
  // find the role to be updated
  const role = await Role.findByPk(roleId);
  console.log(role);

  //if role to be updated is not found, return
  if (!role) {
    return null;
  }

  //Update the role fields
  Object.assign(role, roleData);
  await role.save();

  // Return the role
  return role;
};

exports.deleteRole = async (roleId) => {
  const role = await Role.findByPk(roleId);

  if (!role) {
    throw new Error('Role not found');
  }
  role.destroy();
};

exports.getAllRoles = async () => {
  const roles = await Role.findAll();

  return roles;
};
