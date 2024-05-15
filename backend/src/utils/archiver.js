const archiver = require('archiver');
const { Writable } = require('stream');

/**
 * Archive the given buffer
 * @param {{name: string, buffer: Buffer}[]} buffer
 * @returns {Promise<Buffer>}
 */
exports.archiveToBuffer = async (buffer) => {
  const buffers = Array.isArray(buffer) ? buffer : [buffer];

  return new Promise((resolve, reject) => {
    const finalBuffers = [];
    const converter = new Writable();

    converter._write = (chunk, encoding, callback) => {
      finalBuffers.push(chunk);
      process.nextTick(callback);
    };

    converter.on('finish', () => {
      resolve(Buffer.concat(finalBuffers));
    });

    const archive = archiver('zip', {
      zlib: { level: 9 },
    });

    archive.on('error', (err) => {
      reject(err);
    });

    archive.pipe(converter);

    for (const file of buffers) {
      archive.append(file.buffer, { name: file.name });
    }

    archive.finalize();
  });
};
