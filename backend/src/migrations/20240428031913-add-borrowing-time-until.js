const { TABLE_NAME } = require('../utils/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TABLE_NAME.BORROWING, 'borrowingTimeUntil', {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      TABLE_NAME.BORROWING,
      'borrowingTimeUntil'
    );
  },
};
