class Logger {
  static info(...args) {
    console.log(`\x1b[0m[LOG]  `, ...args);
  }

  static error(...args) {
    console.error(`\x1b[31m[ERROR]  `, ...args);
  }

  static warn(...args) {
    console.warn(`\x1b[33m[WARN]  `, ...args);
  }

  static debug(...args) {
    console.debug(`\x1b[34m[DEBUG]  `, ...args);
  }
}

module.exports = Logger;
