require('dotenv').config();

const expresss = require('express');
const root = require('./utils/root');
const { env } = require('./utils/env');

const port = env.PORT;

const app = expresss();

root(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
