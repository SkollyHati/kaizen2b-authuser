'use strict';
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Roles.belongsToMany(models.Users, {through: models.User_Roles, foreignKey: 'role_id'});
    }
  }
  Roles.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey:true},
    code: {type: DataTypes.STRING, allowNull: false},
    status: DataTypes.TINYINT(1),
    description: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'Roles',
  });
  return Roles;
};
