const { asyncMw } = require('express-asyncmw');
const mega = require('../utils/mega');
const { fileListQuery } = require('../schemas/file');
const { archiveToBuffer } = require('../utils/archiver');
const { generateDate, generateArchiveName } = require('../utils/file');

class FileController {
  constructor() {}

  upload = asyncMw(async (req, res) => {
    return res.status(200).json({
      code: 200,
      data: req.uploaded,
    });
  });

  list = asyncMw(async (req, res) => {
    const query = fileListQuery.parse(req.query);
    const archiveName = generateArchiveName(query);
    const dates = generateDate(query, '.txt');

    const buffers = await mega.downloadBuffers(dates);
    const archive = await archiveToBuffer(buffers);

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename=${archiveName}`);

    return res.status(200).send(archive);
  });

  stats = asyncMw(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${mega.latestFileName}`
    );

    return res.status(200).send(mega.latestFile);
  });
}

module.exports = FileController;
