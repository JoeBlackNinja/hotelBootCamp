'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  survey.init({
    id_client_fk: DataTypes.INTEGER,
    date: DataTypes.DATE,
    satisfaction: DataTypes.BOOLEAN,
    cleaning: DataTypes.BOOLEAN,
    security: DataTypes.BOOLEAN,
    facilities: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    score: DataTypes.STRING,
    why: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'survey',
    timestamps : false
  });
  return survey;
};