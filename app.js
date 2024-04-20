const express = require('express');
const dotenv = require('dotenv').config();
const config = require('./config/config');
const models = require('./models');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const locationRoutes = require('./routes/locationRoutes');
const farmRoutes = require('./routes/farmRoutes');
const pigRoutes = require('./routes/pigRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const healthRecordRoutes = require('./routes/healthRecordRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
const PORT = config.port || 3000;

// Body-Parser Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/farms', farmRoutes);
app.use('/api/pigs', pigRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/healthRecords', healthRecordRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use(errorMiddleware);

models.sequelize
  .sync()
  .then(() => {
    console.log('Database connected and synced!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error connecting to the database: ${error}`);
  });
