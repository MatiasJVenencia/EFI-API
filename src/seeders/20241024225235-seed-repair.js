'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Repairs', [
      {
        id_orden: 1, 
        fecha_inicio: new Date(),
        costo_real: 140.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_orden: 2,
        fecha_inicio: new Date(),
        costo_real: 95.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Repairs', null, {});
  }
};
