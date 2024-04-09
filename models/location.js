const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Location = sequelize.define(
    'Location',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      latitude: {
        type: DataTypes.DECIMAL(10, 8),
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DECIMAL(11, 8),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      sector: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      zipCode: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Location.associate = (models) => {
    Location.hasMany(models.User, { foreignKey: 'locationId' });
    Location.hasOne(models.Farm, { foreignKey: 'locationId' });
  };

  return Location;
};
