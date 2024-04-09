const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const HealthRecord = sequelize.define('HealthRecord', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    treatment: {
      type: DataTypes.TEXT,
    },
  });

  HealthRecord.associate = (models) => {
    HealthRecord.belongsTo(models.Pig, { foreignKey: 'pigId' });
    HealthRecord.belongsTo(models.User, { as: 'vet', foreignKey: 'vetId' });
  };

  return HealthRecord;
};
