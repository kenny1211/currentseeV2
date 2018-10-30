$(document).ready(function() {
const moment = require('moment');
const income = $("#income").val().trim();
const travel = $("#travel").val().trim();
const home = $("#home").val().trim();
const utilities = $("#utilities").val().trim();
const health = $("#health-fitness").val().trim();

$(document).on("submit", "#introquestSubmit", handleIntroSubmit);

// create array of objects for input
// objects in array should have key values similar to MySQL schema
// array create 6 inputs to post to database (bulk create - sequelize)
const inputArray = []

bulkInput = (userData, incomeBoolean, savingsBoolean) => {
  for (let i = 0; i < 6; i++) {
    inputArray.push({
      description: userData.data, //output jquery id
      date: date, //moment conversion with below function
      amount: userData,
      category: userData.data,
      income: incomeBoolean,
      savings: savingsBoolean,
      rollover: false
    })
  }
}



// moment.addRealMonth = function addRealMonth(d) {
//   var fm = moment(d).add(1, 'M');
//   var fmEnd = moment(fm).endOf('month');
//   return d.date() != fm.date() && fm.isSame(fmEnd.format('YYYY-MM-DD')) ? fm.add(1, 'd') : fm;  
// }

// var nextMonth = moment.addRealMonth(moment());

// run all the functions
bulkInput(income, true, false);
// use bulk create function in order to post the inputArray
// empty array and run function again for the next user input item

// remember to add a bulk update function on the javascript for the budget table in case any of the fixed incomes/costs change
});

// description: 'Income',
// date: 10/26/2018,
// amount: 2500,
// category: "Salary",
// income: true,
// savings: false,
// rollover: false,