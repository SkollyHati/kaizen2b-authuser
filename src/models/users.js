'use strict'
const bcrypt =require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {

    static associate(models) {

    }
  }
  users.init({
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    cuil: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.TINYINT(1),
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });

  users.beforeSave((user) => {
    if (user.changed('password')) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
});

  return users;
};
