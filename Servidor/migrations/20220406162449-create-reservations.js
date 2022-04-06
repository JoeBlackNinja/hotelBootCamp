'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_type_room_fk: {
        type: Sequelize.INTEGER
      },
      reservation_date: {
        type: Sequelize.DATE
      },
      time: {
        type: Sequelize.TIME
      },
      ingres_date: {
        type: Sequelize.DATE
      },
      out_date: {
        type: Sequelize.DATE
      },
      cash: {
        type: Sequelize.NUMERIC
      },
      transaction_number: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.NUMERIC
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservations');
  }
};