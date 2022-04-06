'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bills.init({
    id_reservation_fk: DataTypes.INTEGER,
    id_employees_fk: DataTypes.INTEGER,
    id_client_fk: DataTypes.INTEGER,
    date_bills: DataTypes.DATE,
    services: DataTypes.STRING,
    charges: DataTypes.STRING,
    cash: DataTypes.NUMERIC,
    transaction_number: DataTypes.STRING,
    total: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'bills',
    timestamps : false
  });
  return bills;
};