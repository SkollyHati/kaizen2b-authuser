'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserTokens.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  }
  userTokens.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.TINYINT(1),
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Tokens',
  });
  return UserTokens;
};
