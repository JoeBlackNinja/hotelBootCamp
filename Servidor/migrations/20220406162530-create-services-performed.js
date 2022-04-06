'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('services_performeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_client_fk: {
        type: Sequelize.INTEGER
      },
      id_services_fk: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('services_performeds');
  }
};