'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_type_room_fk: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
      }      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rooms');
  }
};