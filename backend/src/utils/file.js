const dayjs = require('dayjs');

/**
 * Generate Date from start to end
 * @param {{startDate: import("moment").MomentInput; endDate: import("moment").MomentInput}} date
 * @param {string} prefix
 * @returns {string[]}
 */
exports.generateDate = (date, suffix) => {
  const startDate = dayjs(date.startDate);
  const endDate = dayjs(date.endDate);
  let currentDate = startDate.clone();

  const dates = [currentDate.format('YYYY-MM-DD')];

  while (currentDate.diff(endDate, 'days') < 0) {
    currentDate = currentDate.add(1, 'days');
    dates.push(currentDate.format('YYYY-MM-DD'));
  }

  if (suffix) {
    return dates.map((date) => `${date}${suffix}`);
  }

  return dates;
};

/**
 * Generate Date from start to end
 * @param {{startDate: import("moment").MomentInput; endDate: import("moment").MomentInput}} date
 * @returns {string}
 */
exports.generateArchiveName = (date) => {
  const startDate = dayjs(date.startDate).format('YYYY-MM-DD');
  const endDate = dayjs(date.endDate).format('YYYY-MM-DD');

  return `${startDate}-${endDate}.zip`;
};
