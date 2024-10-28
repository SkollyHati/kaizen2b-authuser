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
    company_name: {type: DataTypes.STRING, allowNull: false},
    cuit: {type: DataTypes.STRING, primaryKey: true,allowNull: false},
    status: DataTypes.TINYINT(1),
    client_hash: {type: DataTypes.UUIDV4, defaultValue: DataTypes.UUIDV4}
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};
