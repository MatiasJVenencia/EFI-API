'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'password123',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tecnico',
        email: 'tecnico@tecnico.com',
        password: 'password123',
        role: 'tecnico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const hashedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        return { ...user, password: hashedPassword };
      })
    );

    await queryInterface.bulkInsert('Users', hashedUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
