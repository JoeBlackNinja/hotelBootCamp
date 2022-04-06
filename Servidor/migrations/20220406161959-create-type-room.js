'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('type_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.NUMERIC
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('type_rooms');
  }
};