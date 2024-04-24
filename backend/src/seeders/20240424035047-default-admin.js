const { TABLE_NAME, USER_ROLE } = require('../utils/constant');
const { hashText } = require('../utils/hashing');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const timestamp = new Date();

    await queryInterface.bulkInsert(TABLE_NAME.USER, [
      {
        fullName: 'Example Admin',
        email: 'admin@example.com',
        password: await hashText('admin123'),
        role: USER_ROLE.ADMIN,
        createdAt: timestamp,
        updatedAt: timestamp,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
