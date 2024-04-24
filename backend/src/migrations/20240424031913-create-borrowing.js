const { TABLE_NAME } = require('../utils/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME.BORROWING, {
      borrowingId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: true,
        references: {
          model: TABLE_NAME.USER,
          key: 'userId',
        },
        onDelete: 'SET NULL',
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      occupation: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nimNip: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      rightAscescion: {
        allowNull: false,
        type: Sequelize.DECIMAL(25, 2),
      },
      declination: {
        allowNull: false,
        type: Sequelize.DECIMAL(25, 2),
      },
      magnitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(25, 2),
      },
      observationObject: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      objectType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telescopeType: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      proposalUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      introductoryUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      borrowingTime: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      priorityPoint: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME.BORROWING);
  },
};
