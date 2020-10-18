'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('PetTypes', [
    { type: 'Bird', createdAt: new Date(), updatedAt: new Date() },
    { type: 'Cat', createdAt: new Date(), updatedAt: new Date() },
    { type: 'Dog', createdAt: new Date(), updatedAt: new Date() },
    { type: 'Elephant', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   await queryInterface.bulkDelete('PetTypes', {
    type: ['Bird', 'Cat', 'Dog', 'Elephant']
    })

  }
};
