'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.TINYINT(1)
      },
      client_name: {
        type: Sequelize.STRING
      },
      client_cuil: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      client_hash: {
        type: DataTypes.UUID.V4,
        defaultValue: sql.uuidv4,
        allowNull:false}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clientsusers');
  }
};
