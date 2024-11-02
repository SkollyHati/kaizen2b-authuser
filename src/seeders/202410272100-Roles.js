module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        code: 'ADM',
        status: 1,
        description: 'Administrador de sistema',
        createdAt: '2024-11-01 00:00:00'
      },
      {
        code: 'CLI',
        status: 1,
        description: 'Cliente base',
        createdAt: '2024-11-01 00:00:00'
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
