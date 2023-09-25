'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Sardar Vallabhbhai Patel International Airports',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Surat Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: '	Vadodara Airport',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: '	Rajkot International Airports',
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


  }
};
