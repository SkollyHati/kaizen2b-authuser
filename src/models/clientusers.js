'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientsUsers extends Model {

    static associate(models) {
      // define association here
      clientsUsers.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  }
  clientsUsers.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.TINYINT(1),
    client_id: DataTypes.INTEGER,
    client_name: DataTypes.STRING,
    client_cuil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientsUsers',
  });
  return clientsUsers;
};
