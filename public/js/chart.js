window.onload = function () {
  // Load the Visualization API and the corechart package.
  google.charts.load('current', { 'packages': ['corechart'] });

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Income');
    data.addColumn('number', 'Expenses');
    data.addRows([
      ['Income', 3],
      ['Savings', 1],
      ['Utilities', 1],
      ['Groceries', 1],
      ['Housing', 2]
    ]);

    // Set chart options
    var options = {
      'title': 'Overall Budget',
      'width': 400,
      'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

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

    //insert ajax post method to get from budget database
    $.get("api/budget", data, function (req, res) {
      console.log("posted into api/chart")
      res.render(chart);
    })


  })
};