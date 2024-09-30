'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userTokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userTokens.belongsTo(models.users, {
        as: 'users',
        foreignKey: 'user_id'
      })
    }
  }
  userTokens.init({
    user_id: DataTypes.INTEGER,
    status: DataTypes.CHAR,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userTokens',
  });
  return userTokens;
};
