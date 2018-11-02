const printProducts = (productsArray) => {
  // emptys out div
  $("#product-results").empty();
  // if nothing comes up in search
  if (productsArray.length === 0) {
    return false;
  }
  // iterates through array
  for (var i = 0; i < productsArray.items.length; i++) {
    // everything we print will fit in here
    var productDiv = $("<div>").addClass("card mb-5")
    productDiv
      .addClass("product")
    // print product name
    var productName = $("<div>");
    productName
      .addClass("card-header bg-dark text-light")
      .text(productsArray.items[i].name) //product name 
      .appendTo(productDiv);
    // product info will have it's on div below name
    var productBody = $("<div>")
      .addClass("card-body")
      .appendTo(productDiv);
    // print product price
    var productPrice = $("<p>");
    productPrice
      .addClass("card-text")
      .html("$" + productsArray.items[i].salePrice) //product price
      .appendTo(productBody)
    // print product image
   var image = $("<img>")
      .addClass("preview-image")
    var imageSource = productsArray.items[i].mediumImage
    image.attr({
        src: imageSource
      })
      .html(image)
      .appendTo(productBody)
    //print product link 
    var productLink = $("<a>");
    productLink
      .addClass("btn btn-block btn-outline-dark")
      .text("View on Walmart.com")
      .attr({
        href: productsArray.items[i].productUrl,
        target: "_blank"
      })
      .appendTo(productBody);
    //print preview

    //button to add to table
    var addButton = $("<button>");
    addButton
      .addClass("btn btn-block btn-outline-dark")
      .addClass("table-button")
      .text("Add to Wishlist")
      .appendTo(productBody)
      .attr("data-name", productsArray.items[i].name)
      .attr("data-price", productsArray.items[i].salePrice)

    // puts everything in product div
    $("#product-results").append(productDiv);

  };
};



// ajax jquery pull
$("#search-form").on("submit", function (event) {
  event.preventDefault();
  $('#walmart-modal').modal('show')


  var searchTerm = $("#search-term").val();

  if (!searchTerm) {
    return false;
  }

  $("#search-term").val("");

  var queryURL = "https://api.walmartlabs.com/v1/search?apiKey=4vqcppc7kjbk8zsktvkry97c&query=" + searchTerm;
  $.ajax({
    url: queryURL,
    method: "GET",
    data: {
      format: "json"
    },
    dataType: 'jsonp',
    error: function (error) {
      //console.log(error);
    }
  }).then(function (productData) {
    console.log(productData);

    printProducts(productData);
  }).catch(function (err) {
    //console.log(err);
  })

});

  $(document).on("click", ".table-button", function(event){ 
    console.log("in button")
    event.preventDefault();
    console.log(event);
    const product = $(this).attr("data-name");
    const price = $(this).attr("data-price");
    const date = moment().format("MM/DD/YYYY");

    const data = {
      product,
      price,
      date
    }

    console.log(data);

    $.ajax("/api/wishlist", {
      type: "POST",
      data: data
    }).then(function(){
      window.location.href="/dashboard"
    });
  });