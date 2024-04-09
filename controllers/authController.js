const authService = require('../services/authService');

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const { token, user } = await authService.login(username, password);

    if (!token && !user) {
      return res.status(401).json({ message: 'Access Denied' });
    }

    return res.status(200).json({ token, user });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    await authService.logout(req.user);
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    const token = await authService.refreshToken(refreshToken);

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
