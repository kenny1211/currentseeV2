'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('budgets', [
      {
        description: 'Income',
        date: 10/26/2018,
        amount: 2500,
        category: "Salary",
        income: true,
        savings: false,
        rollover: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Expense',
        date: 10/26/2018,
        amount: 500,
        category: "Expense",
        income: false,
        savings: false,
        rollover: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        description: 'Savings',
        date: 10/26/2018,
        amount: 500,
        category: "Savings",
        income: false,
        savings: true,
        rollover: false,
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

// USE currentsee_db;

// INSERT INTO 
//   budget (description, date, amount, category, income, savings, rollover)
// VALUES 
//   (Income, 10/26/2018, 2500, Salary, true, false, false),
//   (Expense, 10/26/2018, 500, Expense, false, false, false),
//   (Savings, 10/26/2018, 500, Savings, true, true, false);
 
// INSERT INTO wishlist (description, date, amount, category, income, savings) 
//   VALUES ('Amazon Alexa', 10/26/2018, 50, Electronics, false, false);

// INSERT INTO wishlist (description, date, amount, category, income, savings) 
//   VALUES ('Laptop', 10/26/2018, 500, Electronics, false, false);

