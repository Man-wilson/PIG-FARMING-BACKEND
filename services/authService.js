const User = require('../models/user');
const { generateToken, verifyToken } = require('../utils/jwtUtils');
const { comparePassword } = require('../utils/passwordUtils');

exports.login = async (username, password) => {
  try {
    // find the user
    const user = await User.findOne({ where: { username } });

    // if user not found
    if (!user) {
      return null;
    }

    // check the password
    if (!(await comparePassword(password, user.password))) {
      return null;
    }

    // user successfully verified, generate token
    token = generateToken(user.id);
    return { token, user };
  } catch (error) {
    throw new Error('Login failed');
  }
};

exports.logout = async (user) => {
  try {
    // Get the user's current token
    const token = user.token;

    // Invalidate the token by adding it to a blacklist or revoking it
    await invalidateToken(token);

    // Return a success message or any other relevant data
    return { message: 'Logout successful' };
  } catch (error) {
    throw new Error('Logout failed');
  }
};

// Helper function to invalidate a token
const invalidateToken = async (token) => {
  // Implement your token invalidation logic here
  // For example, you can add the token to a blacklist in a database or cache
  // Or, if using JWT, you can add the token to a token blacklist

  // Example implementation using a token blacklist in memory (not suitable for production)
  const tokenBlacklist = require('../config/tokenBlacklist');
  tokenBlacklist.add(token);
};

exports.refreshToken = async (refreshToken) => {
  try {
    const decoded = verifyToken(refreshToken);
    const userId = decoded.userId;

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('user not found');
    }

    const token = generateToken(user.id);
    return token;
  } catch {
    throw new Error('Invalid refresh token');
  }
};
