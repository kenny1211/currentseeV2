$(document).ready(function() {
const income = $("#income").val().trim();
const travel = $("#travel").val().trim();
const home = $("#home").val().trim();
const utilities = $("#utilities").val().trim();
const health = $("#health-fitness").val().trim();
const date= $("#date").val().trim();
const savings = $("#savings").val().trim();
// date should be YYYY - MM - DD
$(document).on("submit", "#introquestSubmit", handleIntroSubmit);
// create array of objects for input
// objects in array should have key values similar to MySQL schema
// array create 6 inputs to post to database (bulk create - sequelize)
const inputArray = []

const bulkInput = (userData, incomeBoolean, savingsBoolean) => {
  for (let i = 0; i < 6; i++) {
    inputArray.push({
      description: userData.data-name, //output jquery id
      date: moment(date).add(i, "M"), //moment conversion with below function
      amount: userData,
      category: userData.data-name,
      income: incomeBoolean,
      savings: savingsBoolean,
      rollover: false
    })
  }
  console.log(inputArray);
  // post bulkInput to api to feed to database
  upsertBulkInput(inputArray);
  // empty array
  inputArray.empty();
}
// post function
const upsertBulkInput = (bulkInputData) => {
  $.post("/api/budget", bulkInputData)
    .then(bulkInputData);
}
const handleIntroSubmit = (event) => {
event.preventDefault();
// repeat above for all inputs
bulkInput(income, true, false);
bulkInput(savings, false, true);
bulkInput(travel, false, false);
bulkInput(utilities, false, false);
bulkInput(health, false, false);
bulkInput(home, false, false);
}


// remember to add a bulk update function on the api route for the budget table in case any of the fixed incomes/costs change
});

// description: 'Income',
// date: 10/26/2018,
// amount: 2500,
// category: "Salary",
// income: true,
// savings: false,
// rollover: false,