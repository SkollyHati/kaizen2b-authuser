const bcrypt =require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Clients', [
      {
        company_name: 'KAIZEN2B',
        cuit: '99999999999',
        status: 1,
        client_hash: bcrypt.hashSync('99999999999', bcrypt.genSaltSync(10), null)
      },
      {
        company_name: 'Pepsico S.A.',
        cuit: '30692327434',
        status: 1
        ,client_hash:bcrypt.hashSync('30692327434', bcrypt.genSaltSync(10), null)
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Clients', null, {});
  },
};
