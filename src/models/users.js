'use strict'
const bcrypt =require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {
      Users.belongsTo(models.Clients, {
        as: 'Clients',
        foreignKey: 'client_id'
      })
      Users.belongsToMany(models.Roles, {through:'User_Roles'});
    }
  }
  Users.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true},
    username: {type: DataTypes.STRING, allowNull: false},
    firstname: {type: DataTypes.STRING, allowNull: false},
    lastname: {type: DataTypes.STRING, allowNull: false},
    cuil: {type: DataTypes.STRING(11), primaryKey: true},
    email: {type: DataTypes.STRING, allowNull: false},
    gender: {type:DataTypes.STRING.BINARY},
    status: DataTypes.TINYINT(1),
    password: {type: DataTypes.STRING, allowNull: false},
    user_hash: {type: DataTypes.UUIDV4, defaultValue: DataTypes.UUIDV4}
  }, {
    sequelize,
    modelName: 'Users',
  });

  Users.beforeSave((user) => {
    if (user.changed('password')) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
});

  return Users;
};
