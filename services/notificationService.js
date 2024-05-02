const { Notification, User, Pig, Farm, Location } = require('../models');

exports.createNotification = async (notificationData, senderId) => {
  const { message, recipientId, pigId } = notificationData;
  const notification = await Notification.create({
    message,
    senderId,
    recipientId,
    pigId,
  });
  return notification;
};

exports.getNotificationsByRecipient = async (recipientId) => {
  const notifications = await Notification.findAll({
    where: { recipientId },
    include: [
      { model: User, as: 'sender', attributes: ['id', 'username'] },
      {
        model: Pig,
        attributes: ['id', 'breed'],
        include: [
          {
            model: Farm,
            attributes: ['id', 'name'],
            include: [
              {
                model: Location,
                attributes: ['address', 'province', 'district', 'sector','zipCode'],
              },
              {
                model: User,
                attributes: ['phoneNumber'],
              },
            ],
          },
        ],
      },
    ],
  });
  return notifications;
};

exports.markNotificationAsRead = async (notificationId, recipientId) => {
  const notification = await Notification.findOne({
    where: { id: notificationId, recipientId },
  });
  if (!notification) {
    throw new Error('Notification not found');
  }
  await notification.update({ isRead: true });
};
