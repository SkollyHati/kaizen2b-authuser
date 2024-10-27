'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {

    static associate(models) {
      // define association here
      Clients.hasMany(models.Users);
    }
  }
  Clients.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    client_name: {type: DataTypes.STRING, allowNull: false},
    client_cuil: {type: DataTypes.STRING, primaryKey: true,allowNull: false},
    status: DataTypes.TINYINT(1),
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};
