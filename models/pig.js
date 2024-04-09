const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pig = sequelize.define(
    'Pig',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      breed: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
      },
      weight: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      healthStatus: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  Pig.associate = (models) => {
    Pig.belongsTo(models.Farm, { foreignKey: 'farmId' });
  };

  return Pig;
};
