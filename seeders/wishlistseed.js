'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('wishlists', [
    {
      description: 'Amazon Alexa',
      date: 10/26/2018,
      amount: 50,
      category: "Electronics",
      income: false,
      savings: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'Laptop',
      date: 10/26/2018,
      amount: 500,
      category: "Electronics",
      income: false,
      savings: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'TV',
      date: 10/26/2018,
      amount: 500,
      category: "Electronics",
      income: false,
      savings: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
