'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employees.init({
    name: DataTypes.STRING,
    pass: DataTypes.STRING,
    last_name: DataTypes.STRING,
    area: DataTypes.STRING,
    ingres_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'employees',
    timestamps : false
  });
  return employees;
};