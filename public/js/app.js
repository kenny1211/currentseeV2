
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