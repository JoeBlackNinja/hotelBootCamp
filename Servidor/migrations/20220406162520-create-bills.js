'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_reservation_fk: {
        type: Sequelize.INTEGER
      },
      id_employees_fk: {
        type: Sequelize.INTEGER
      },
      id_client_fk: {
        type: Sequelize.INTEGER
      },
      date_bills: {
        type: Sequelize.DATE
      },
      services: {
        type: Sequelize.STRING
      },
      charges: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('bills');
  }
};