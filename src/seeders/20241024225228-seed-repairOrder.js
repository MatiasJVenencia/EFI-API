'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('RepairOrders', [
      {
        fecha: new Date(),
        problema_reportado: 'Pantalla rota',
        id_dispositivo: 1, // Ajusta según los IDs de tus dispositivos
        id_usuario: 4, 
        costo_estimado: 150.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date(),
        problema_reportado: 'Problema con la batería',
        id_dispositivo: 2,
        id_usuario: 4,
        costo_estimado: 100.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date(),
        problema_reportado: 'Sobrecalentamiento',
        id_dispositivo: 3,
        id_usuario: 4,
        costo_estimado: 200.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fecha: new Date(),
        problema_reportado: 'Error en la placa base',
        id_dispositivo: 4,
        id_usuario: 4,
        costo_estimado: 300.00,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('RepairOrders', null, {});
  }
};
