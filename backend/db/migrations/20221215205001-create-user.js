'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.CHAR,
        allowNull: true,
        unique: false
      },
      firstName: {
        type: Sequelize.CHAR,
        allowNull: false,
      },
      lastName:{
        type: Sequelize.CHAR,
        allowNull: false
      },
      email: {
        type: Sequelize.CHAR,
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: Sequelize.CHAR,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      }
    },options);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users',options);
  }
};
