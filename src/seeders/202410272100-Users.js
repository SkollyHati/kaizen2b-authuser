const bcrypt =require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        firstname: 'Administrador',
        lastname: 'Kaizen2b-Intelligence',
        cuil: '20358603697',
        email: 'lucas.i.gutierrez@gmail.com',
        gender: 'M',
        status: 1,
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10), null),
        client_id: 1,
        user_hash:bcrypt.hashSync('20358603697 - lucas.i.gutierrez@gmail.com', bcrypt.genSaltSync(10), null),
        createdAt: '2024-11-01 00:00:00'
      },
      {
        username: 'demo',
        firstname: 'Cliente',
        lastname: 'Demo',
        cuil: '20358603697',
        email: 'notiene@notiene.com',
        gender: 'F',
        status: 1,
        password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10), null),
        client_id: 2,
        user_hash: bcrypt.hashSync('20358603697 - notiene@notiene.com', bcrypt.genSaltSync(10), null),
        createdAt: '2024-11-01 00:00:00'
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
