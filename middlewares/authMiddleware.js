const jwtUtils = require('../utils/jwtUtils');
const { User, Role } = require('../models');
const tokenBlacklist = require('../config/tokenBlacklist');

exports.authenticateUser = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const token = req.headers.authorization.split(' ')[1];

    if (tokenBlacklist.contains(token)) {
      return res.status(401).json({ message: 'Token is blacklisted' });
    }
    const decodedToken = jwtUtils.verifyToken(token);
    const userId = decodedToken.userId;

    const user = await User.findByPk(userId, {
      include: [{ model: Role, attributes: ['id', 'name'] }],
    });
    // console.log(user.Role.dataValues.name);
    if (!user) {
      throw new Error('User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    if(error.name === 'TokenExpiredError'){
      res.status(401).json({message: 'Token Expired'})
    }
    console.log(error);
    res.status(401).json({ message: 'Authentication failed!' });
  }
};

exports.authorizeUser = (role) => {
  return (req, res, next) => {
    // console.log(`${req.user} ==> ${role}`);
    if (req.user.Role.dataValues.name !== role) {
      res.status(403).json({ message: 'Access denied' });
    } else {
      next();
    }
  };
};
