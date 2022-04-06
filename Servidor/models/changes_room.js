'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class changes_room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  changes_room.init({
    id_client_fk: DataTypes.INTEGER,
    id_reservation_fk: DataTypes.INTEGER,
    id_type_room_fk: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    time: DataTypes.TIME,
    sign_client: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'changes_room',
    timestamps : false
  });
  return changes_room;
};