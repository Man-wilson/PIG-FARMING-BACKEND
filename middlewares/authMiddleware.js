const jwtUtils = require('../utils/jwtUtils');
const User = require('../models/user');
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

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed!' });
  }
};

exports.authorizeUser = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      res.status(403).json({ message: 'Access denied' });
    } else {
      next();
    }
  };
};
