'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class anomalies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  anomalies.init({
    area: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'anomalies',
    timestamps : false
  });
  return anomalies;
};