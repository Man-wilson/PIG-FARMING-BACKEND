const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const models = {};

// Require and initialize each model
models.User = require('./user')(sequelize);
models.Role = require('./role')(sequelize);
models.Location = require('./location')(sequelize);
models.Farm = require('./farm')(sequelize);
models.Pig = require('./pig')(sequelize);
models.HealthRecord = require('./healthRecord')(sequelize);
models.Notification = require('./notification')(sequelize);
models.sequelize = sequelize;

// Call the associate function for each model
Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;
