'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Devices', [
      {
        marca: 'Apple',
        modelo: 'iPhone 13',
        tipo: 'Smartphone',
        número_serie: 'ABC123XYZ',
        estado: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Samsung',
        modelo: 'Galaxy S21',
        tipo: 'Smartphone',
        número_serie: 'XYZ789ABC',
        estado: 'En reparación',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Google',
        modelo: 'Pixel 6',
        tipo: 'Smartphone',
        número_serie: 'PXL123456',
        estado: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Sony',
        modelo: 'PlayStation 5',
        tipo: 'Consola',
        número_serie: 'PS5123456',
        estado: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Dell',
        modelo: 'XPS 13',
        tipo: 'Laptop',
        número_serie: 'XPS9876543',
        estado: 'En reparación',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'HP',
        modelo: 'Spectre x360',
        tipo: 'Laptop',
        número_serie: 'HP1234X360',
        estado: 'Reparado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        marca: 'Lenovo',
        modelo: 'ThinkPad X1',
        tipo: 'Laptop',
        número_serie: 'TPX1987654',
        estado: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Devices', null, {});
  }
};
