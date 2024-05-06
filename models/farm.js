const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Farm = sequelize.define(
    'Farm',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      size: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: true, createdAt: true, updatedAt: false }
  );

  Farm.associate = (models) => {
    Farm.belongsTo(models.User, { foreignKey: 'userId' });
    Farm.hasOne(models.Location, { foreignKey: 'farmId' });
    Farm.hasMany(models.Pig, { foreignKey: 'farmId' });
  };

  return Farm;
};
