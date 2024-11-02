module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User_Roles', [
      {
        user_id:1,
        role_id:1,
        createdAt: '2024-11-01 00:00:00'
      },
      {
        user_id:1,
        role_id:1,
        createdAt: '2024-11-01 00:00:00'
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User_Roles', null, {});
  },
};
