'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('changes_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client_fk: {
        type: Sequelize.INTEGER
      },
      id_reservation_fk: {
        type: Sequelize.INTEGER
      },
      id_type_room_fk: {
        type: Sequelize.INTEGER
      },
      reason: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.TIME
      },
      sign_client: {
        type: Sequelize.STRING
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('changes_rooms');
  }
};