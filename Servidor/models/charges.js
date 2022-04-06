'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class charges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  charges.init({
    id_client_fk: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    client_sign: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'charges',
    timestamps : false
  });
  return charges;
};