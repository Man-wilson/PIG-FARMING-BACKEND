const notificationService = require('../services/notificationService');

exports.createNotification = async (req, res, next) => {
  try {
    const notification = await notificationService.createNotification(
      req.body,
      req.user.id
    );
    res.status(201).json(notification);
  } catch (error) {
    next(error);
  }
};

exports.getNotifications = async (req, res, next) => {
  try {
    const notifications = await notificationService.getNotificationsByRecipient(
      req.user.id
    );
    res.status(200).json(notifications);
  } catch (error) {
    next(error);
  }
};

exports.markNotificationAsRead = async (req, res, next) => {
  try {
    await notificationService.markNotificationAsRead(
      req.params.id,
      req.user.id
    );
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
