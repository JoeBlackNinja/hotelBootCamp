'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class services_performed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  services_performed.init({
    id_client_fk: DataTypes.INTEGER,
    id_services_fk: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    sign_client: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'services_performed',
    timestamps : false
  });
  return services_performed;
};