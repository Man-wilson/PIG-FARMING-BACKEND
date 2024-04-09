const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Notification = sequelize.define('Notification', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isRead: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Notification.associate = (models) => {
    Notification.belongsTo(models.User, { as: 'sender', foreignKey: 'senderId' });
    Notification.belongsTo(models.User, { as: 'recipient', foreignKey: 'recipientId' });
    Notification.belongsTo(models.Pig, { foreignKey: 'pigId' });
  };

  return Notification;
};