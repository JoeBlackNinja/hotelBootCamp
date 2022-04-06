'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class currency_transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  currency_transaction.init({
    id_client_fk: DataTypes.INTEGER,
    date: DataTypes.DATE,
    currency: DataTypes.STRING,
    c_ammount: DataTypes.NUMERIC,
    exchange_parity_mxn: DataTypes.NUMERIC,
    ammount_mxn: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'currency_transaction',
    timestamps : false
  });
  return currency_transaction;
};