const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {

    static associate(models) {
      // define association here
      Clients.hasMany(models.Users,{foreignKey: 'client_id'});
    }
  }
  Clients.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    company_name: {type: DataTypes.STRING, allowNull: false},
    cuit: {type: DataTypes.STRING,allowNull: false},
    status: DataTypes.TINYINT(1),
    client_hash: {type: DataTypes.STRING, allowNull: true}
  }, {
    sequelize,
    modelName: 'Clients',
  });

  Clients.beforeCreate((client) => {
    {
      client.client_hash = bcrypt.hashSync(client.client_hash, bcrypt.genSaltSync(10), null);
    }
});

  return Clients;
};
