let amountArray = [];
let categoryArray = [];
let walmartAmount = 0;

$.get("/api/user_data").then(function(data) {
  console.log(data);
  $(".member-name").text(data.email);
});

$.ajax({
  url: "/api/budget/month",
  method: "GET"
}).then( function(data) {
  console.log(data);


  data.forEach((key) => {
    amountArray.push(key.amount);
    categoryArray.push(key.category);
  });
});

$.ajax({
  url: "/api/wishlist",
  method: "GET"
}).then( function(data){
  console.log(data);
  
  data.forEach((key) => {
    walmartAmount += parseInt(key.amount);
  });
    amountArray.push(walmartAmount);
    categoryArray.push("Walmart");
// CHART AREA =========================================================



var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title: {
    text: "Monthly Values By Category"
  },
  data: [{
    type: "pie",
    startAngle: 240,
    yValueFormatString: "\"$\"##",
    indexLabel: "{label} {y}",
    dataPoints: [
      {y: amountArray[0], label: categoryArray[0]},
      {y: amountArray[1], label: categoryArray[1]},
      {y: amountArray[2], label: categoryArray[2]},
      {y: amountArray[3], label: categoryArray[3]},
      {y: amountArray[4], label: categoryArray[4]},
      {y: amountArray[5], label: categoryArray[5]},
      {y: amountArray[6], label: categoryArray[6]}
    ]
  }]
});
chart.render();





// CHART AREA =========================================================
});
console.log(amountArray);
console.log(categoryArray);

 var APIKey = "56abaa621bb84cc1a7651b143f56c27d"
 var queryUrl = "https://newsapi.org/v2/top-headlines?sources=fortune&apiKey=" + APIKey;

$.ajax({
       url: queryUrl,
       method: "GET"
     })
   // Log the data in HTML
     .then(function(response) {

    console.log(response)
      const results = response.articles

      results.forEach((articles) => {

        console.log(articles)
        console.log(articles.description)
        console.log(articles.title)
        let articleDiv = $("<div>")
          articleDiv
            .addClass("card mb-5 ")

        let articleName = $("<div>");
          articleName
            .addClass("card-header bg-light header")
            .text(articles.title) 
            .appendTo(articleDiv);

        let articleBody = $("<div>");
          articleBody
            .addClass("card-body")
            
            .text(articles.description)
            .appendTo(articleDiv);

        $("#news").append(articleDiv);

      });
   });
 
$(".wish-button").on("click", function (event) {
  event.preventDefault()
  $('#wish-modal').modal('show');
})

$(".budget-button").on("click", function (event) {
  event.preventDefault()
  $('#budget-modal').modal('show');
  
})

$(".chart-button").on("click", function (event) {
  event.preventDefault()
  $('#chart-modal').modal('show');
})

$(".delete-budget").on("click", function(event) {
  event.preventDefault();

  const id = $(this).data("id")

  $.ajax(`/api/budget/${id}`, {
    type: "DELETE"
  }).then(function(budgetData){
    console.log(`DELETED POST WITH ${id}`);
    location.reload();
  })
});

$(".delete-wishlist").on("click", function(event) {
  event.preventDefault();

  const id = $(this).data("id")

  $.ajax(`/api/wishlist/${id}`, {
    type: "DELETE"
  }).then(function(budgetData){
    console.log(`DELETED POST WITH ${id}`);
    location.reload();
  })
});

const handleFormSubmit = (event) => {
  event.preventDefault();
  const description = $("#name").val().trim();
  const amount = $("#amount").val().trim();
  const formDate = moment().format("LL");
  const category = $("#category").val().trim();

  const data = {
    description,
    amount,
    formDate,
    category,
  }
  console.log(data);
  $.post("/api/singleupdate", data)
  .then(function(data) {
    console.log(data);
    window.location.href="/dashboard"
  }).catch(err => console.log(err));
}


$(document).on("click", "#budget-form", handleFormSubmit); 

