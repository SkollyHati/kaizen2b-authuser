module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [
      {
        company_name: 'Pepsico S.A.',
        cuit: '30692327434',
        status: 1
      },
      {
        company_name: 'Pepsico S.A.',
        cuit: '30692327434',
        status: 1
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  },
};
