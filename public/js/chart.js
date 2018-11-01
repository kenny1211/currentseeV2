window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {            
    title:{
      text: "Expense Overview"              
    },

    data: [  //array of dataSeries     
    { //dataSeries - expenses
/*** Change type "column" to "bar", "area", "line" or "pie"***/        
     type: "column",
     name: "income",
     showInLegend: true,
     dataPoints: [
     { label: "July", y: 6 },
     { label: "August", y: 12 },
     { label: "September", y: 0 },                                    
     { label: "October", y: 2 },
     { label: "November", y: 3 },
     { label: "December", y: 5 }
     ]
   },

   { //dataSeries - income

    type: "column",
    name: "expenses", 
    showInLegend: true,               
    dataPoints: [
    { label: "November", y: 5 },
    { label: "December", y: 3 },
    { label: "January", y: 8 },
    { label: "February", y: 4 },                                    
    { label: "March", y: 7 },
    { label: "April", y: 2 }
    ]
  }
  ],
/** Set axisY properties here*/
  axisY:{
    prefix: "$"
  }    
});

chart.render();
}

let data = {
dscrpt: "",
amnt: 0,
month: 0,
day: 0,
year: 0000,
inc_exp: "income",
};

$("#submit").on("click", function () {
event.preventDefault();
var dscrpt = $("#name").val().trim();
var amnt = $("#amount").val().trim();
var day = $("#date").val().trim();
var inc_exp = $("[name=inc_exp]:checked").val();


data.dscrpt = dscrpt;
data.amnt = amnt;
data.day = day;
data.inc_exp = inc_exp

console.log(data);

//insert ajax post method to push to database
$.post("api/chart", data, function(req, res) {
console.log("posted into api/chart")
})


});