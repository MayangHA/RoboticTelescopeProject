'use strict';

const { TABLE_NAME } = require('../utils/constant');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'proposalUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'introductoryUrl', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // revert to NOT NULL (if you want to force revert back)
    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'proposalUrl', {
      type: Sequelize.STRING,
      allowNull: false,
    });

    await queryInterface.changeColumn(TABLE_NAME.BORROWING, 'introductoryUrl', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },
};
