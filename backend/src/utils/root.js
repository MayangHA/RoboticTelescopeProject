const cors = require('cors');
const express = require('express');
const users = require('../routes/users');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/users', users);
};
