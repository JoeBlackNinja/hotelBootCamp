'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('surveys', {
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
      satisfaction: {
        type: Sequelize.BOOLEAN
      },
      cleaning: {
        type: Sequelize.BOOLEAN
      },
      security: {
        type: Sequelize.BOOLEAN
      },
      facilities: {
        type: Sequelize.BOOLEAN
      },
      wifi: {
        type: Sequelize.BOOLEAN
      },
      score: {
        type: Sequelize.STRING
      },
      why: {
        type: Sequelize.STRING
      },
      comments: {
        type: Sequelize.STRING
      },
     
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('surveys');
  }
};