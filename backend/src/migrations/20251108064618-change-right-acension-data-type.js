'use strict';
const { TABLE_NAME } = require('../utils/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'rightAscescion', {
          type: Sequelize.STRING,
          allowNull: false,
        });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'rightAscescion', {
          type: Sequelize.DECIMAL(25, 2),
          allowNull: false,
        });
      }
};
