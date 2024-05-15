require('dotenv').config();

const expresss = require('express');
const root = require('./utils/root');
const { env } = require('./utils/env');
const mega = require('./utils/mega');
const Logger = require('./utils/Logger');

const port = env.PORT;

const app = expresss();

root(app);

app.listen(port, async () => {
  await mega.setup();
  Logger.info(`Listening on port ${port}`);
});
