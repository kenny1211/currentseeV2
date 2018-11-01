$(document).ready(function() {

// date should be YYYY - MM - DD

// create array of objects for input
// objects in array should have key values similar to MySQL schema
// array create 6 inputs to post to database (bulk create - sequelize)
// let inputArray = []

// const upsertBulkInput = (bulkInputData) => {
//   console.log(bulkInputData);
//   const data = {data: bulkInputData}
//   $.post("/api/budget", data)
//     .then(function(data) {
//       console.log(data);
//     }).catch(err => console.log(err));
// }

// const bulkInput = (income, travel, home, utilities, health, date, savings) => {
//   console.log(userData)
//   for (let i = 0; i < 6; i++) {
//     inputArray.push({
//       income,
//       travel,
//       home,
//       utilities,
//       health,
//       date,
//       savings
//     })
//   }
//   console.log(inputArray);
//   // post bulkInput to api to feed to database
//   upsertBulkInput(inputArray);
//   // empty array
//   inputArray = [];
// }
// // post function

const handleIntroSubmit = (event) => {
  event.preventDefault();
  const income = $("#income").val().trim();
  const travel = $("#travel").val().trim();
  const home = $("#home").val().trim();
  const utilities = $("#utilities").val().trim();
  const health = $("#health-fitness").val().trim();
  const date= $("#date").val().trim();
  const savings = $("#savings").val().trim();

  // repeat above for all inputs
  // bulkInput(income, travel, home, utilities, health, date, savings)

  const data = {
    income,
    travel,
    home,
    utilities,
    health,
    date,
    savings
  }
  console.log(data);
  $.post("/api/budget", data)
  .then(function(data) {
    console.log(data);
    window.location.href="/dashboard"
  }).catch(err => console.log(err));
}

$(document).on("click", "#introquestSubmit", handleIntroSubmit);
// remember to add a bulk update function on the api route for the budget table in case any of the fixed incomes/costs change
});

// description: 'Income',
// date: 10/26/2018,
// amount: 2500,
// category: "Salary",
// income: true,
// savings: false,
// rollover: false,