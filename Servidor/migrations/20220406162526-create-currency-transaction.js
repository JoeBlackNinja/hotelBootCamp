'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('currency_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client_fk: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      currency: {
        type: Sequelize.STRING
      },
      c_ammount: {
        type: Sequelize.NUMERIC
      },
      exchange_parity_mxn: {
        type: Sequelize.NUMERIC
      },
      ammount_mxn: {
        type: Sequelize.NUMERIC
      },
      
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('currency_transactions');
  }
};