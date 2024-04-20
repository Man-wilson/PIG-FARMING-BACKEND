module.exports = {
  port: process.env.APP_PORT || 4040,
  jwtSecret: process.env.JWT_SECRET || 'working_secret',
  database: {
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PWD || 'cmua',
    name: process.env.PG_DB || 'pig_farm',
  },
};
