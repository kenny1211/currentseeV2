$(document).ready(function() {

<<<<<<< HEAD
  // date should be YYYY - MM - DD
  
  // create array of objects for input
  // objects in array should have key values similar to MySQL schema
  // array create 6 inputs to post to database (bulk create - sequelize)
  let inputArray = []
  
  const upsertBulkInput = (bulkInputData) => {
    console.log(bulkInputData);
    const data = {data: bulkInputData}
    $.post("/api/budget", data)
      .then(function(data) {
        console.log(data);
      }).catch(err => console.log(err));
  }
  
  const bulkInput = (userData, incomeBoolean, savingsBoolean, name, date) => {
    console.log(userData)
    for (let i = 0; i < 7; i++) {
      inputArray.push({
        description: name, //output jquery id
        date: moment(date).add(i, "months").format("LL"), //moment conversion with below function
        amount: userData,
        category: name,
        income: incomeBoolean,
        savings: savingsBoolean,
        rollover: false
      })
    }
    console.log(inputArray);
    // post bulkInput to api to feed to database
    upsertBulkInput(inputArray);
    // empty array
    inputArray = [];
  }
  // post function
  
  const handleIntroSubmit = (event) => {
=======
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
>>>>>>> kenny
  event.preventDefault();
  const income = $("#income").val().trim();
  const travel = $("#travel").val().trim();
  const home = $("#home").val().trim();
  const utilities = $("#utilities").val().trim();
  const health = $("#health-fitness").val().trim();
  const date= $("#date").val().trim();
  const savings = $("#savings").val().trim();
<<<<<<< HEAD
  
  // repeat above for all inputs
  bulkInput(income, true, false, "Income", date);
  bulkInput(savings, false, true, "Savings", date);
  bulkInput(travel, false, false, "Travel", date);
  bulkInput(utilities, false, false, "Utilities", date);
  bulkInput(health, false, false, "Health", date);
  bulkInput(home, false, false, "Home", date);
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
=======

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
>>>>>>> kenny
