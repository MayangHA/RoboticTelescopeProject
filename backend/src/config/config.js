require('dotenv').config();
const mysql2 = require('mysql2');
const pg = require('pg');

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT || 'mysql',
  port: process.env.DB_PORT,
  dialectModule: mysql2,
};

if (config.dialect === 'postgres') {
  config.dialectModule = pg;

  delete config.port;

  config.dialectOptions = {
    ssl: {
      require: true,
    },
  };

  config.pool = {
    max: 5,
    min: 0,
    acquire: 15000,
    idle: 5000,
  };
}

module.exports = {
  development: config,
  test: config,
  production: config,
};