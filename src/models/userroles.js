'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userRoles.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      })
      userRoles.belongsTo(models.roles, {
        as: 'roles',
        foreignKey: 'role_id'
      })
    }
  }
  userRoles.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.TINYINT(1),
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userRoles',
  });
  return userRoles;
};
