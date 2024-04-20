const roleService = require('../services/roleService');

exports.createRole = async (req, res, next) => {
  try {
    const role = await roleService.createRole(req.body);

    res.status(201).json(role);
  } catch (error) {
    next(error);
  }
};

exports.getRoleById = async (req, res, next) => {
  try {
    const role = await roleService.getRoleById(req.params.id);

    if (!role) {
      res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json(role);
  } catch (error) {
    next(error);
  }
};

exports.updateRole = async (req, res, next) => {
  try {
    const role = await roleService.updateRole(req.params.id, req.body);

    if (!role) {
      return res.status(404).json({ message: 'Role not found!' });
    }
    res.status(200).json(role);
  } catch (error) {
    next(error);
  }
};

exports.deleteRole = async (req, res, next) => {
  try {
    await roleService.deleteRole(req.params.id);
    res.status(200).json({ message: 'Role deleted successfully!' });
  } catch (error) {
    next(error);
  }
};

exports.getAllRoles = async (req, res, next) => {
    try{
        const roles = await roleService.getAllRoles();
        res.status(200).json(roles);
    }catch(error){
        next(error);
    }
}
