'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reservations.init({
    id_type_room_fk: DataTypes.INTEGER,
    reservation_date: DataTypes.DATE,
    time: DataTypes.TIME,
    ingres_date: DataTypes.DATE,
    out_date: DataTypes.DATE,
    cash: DataTypes.NUMERIC,
    transaction_number: DataTypes.STRING,
    total: DataTypes.NUMERIC
  }, {
    sequelize,
    modelName: 'reservations',
    timestamps : false
  });
  return reservations;
};