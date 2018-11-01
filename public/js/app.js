	//news api functionality
  var APIKey = "56abaa621bb84cc1a7651b143f56c27d"
  var queryUrl = "https://newsapi.org/v2/top-headlines?sources=fortune&apiKey=" + APIKey;
  
  $.ajax({
        url: queryUrl,
        method: "GET"
      })
      .then(function(response) {
  
    // console.log(response)
       const results = response.articles
  
       results.forEach((articles) => {
  
        //  console.log(articles)
        //  console.log(articles.description)
        //  console.log(articles.title)
         var title = $("<p>");
      title.text(articles.title);
      title.css("text-align", "justify");
      var l = $("<a>");
      l.attr("href", articles.url);
      l.text("Read More");
      l.attr("target", "_blank");
      $("#news").append(title);
      $("#news").append(l);
      $("#news").append($("<hr>"));
        //  let articleDiv = $("<li>")
        //    articleDiv
        //      .addClass("card mb-5")
  
        //  let articleName = $("<div>");
        //    articleName
        //      .addClass("card-header bg-dark text-light")
        //      .text(articles.title) 
        //      .appendTo(articleDiv);
  
        //  let articleBody = $("<div>");
        //    articleBody
        //      .addClass("card-body")
             
        //      .text(articles.description)
        //      .appendTo(articleDiv);
  
        //  articleDiv.appendTo("#vertical-ticker");
       });
  
  
    });

  
    // $(function(){
    //     $('#vertical-ticker').totemticker({
    //       row_height	:	'100px',
    //       next		:	'#ticker-next',
    //       previous	:	'#ticker-previous',
    //       stop		:	'#stop',
    //       start		:	'#start',
    //       mousestop	:	true
    //     });
       
    //   });
      
    // (function() {
    //   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    //   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    //   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    // })();
  
 
 
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