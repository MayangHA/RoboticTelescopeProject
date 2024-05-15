const cors = require('cors');
const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const borrowings = require('../routes/borrowings');
const files = require('../routes/files');
const { onErrorMw } = require('../middleware/common');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: true }));
  app.use('/api/auth', auth);
  app.use('/api/users', users);
  app.use('/api/borrowings', borrowings);
  app.use('/api/files', files);

  app.use(onErrorMw);
};
