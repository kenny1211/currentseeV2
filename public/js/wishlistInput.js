$(document).ready(function() {
  const descInput = $("#descriptionW");
  const amountInput = $("#amountW");
  const dateInput = $("#dateW");
  const catInput = $("#categoryW");
  const incInput = $("#incomeW");
  const savingsInput = $("savingsW");
  
  $(document).on("submit", "#wishlist-form", handleWishlistFormSubmit);
  $(document).on("click", ".delete-wishlist", handleDeleteButtonPress);
  
  handleWishlistFormSubmit = () => {
    event.preventDefault();
  
    upsertWishlist({
      description: descInput.val().trim(),
      amount: amountInput.val().trim(),
      date: dateInput.val().trim(),
      cateogry: catInput.val().trim(),
      income: incInput.val().trim(),
      savings: savingsInput.val().trim(),
    });
  }
  });
  
  upsertWishlist = (wishlistData) => {
    $.post("/api/wishlist", wishlistData)
      .then(wishlistData) ;
  }
  
  createWishlistRow = (wishlistData) => {
    const newTr = $("<tr>");
    newTr
      .data("wishlist", wishlistData)
      .append(`<td>${wishlistData.description}</td>`)
      .append(`<td>${wishlistData.amount}</td>`)
      .append(`<td>${wishlistData.date}</td>`)
      .append(`<td>${wishlistData.cateogry}</td>`)
      .append(`<td>${wishlistData.income}</td>`)
      .append(`<td>${wishlistData.savings}</td>`);
  
      return newTr;
  }
  
  getWishlist = () => {
    $.get("/api/wishlist", (data) => {
      const rowsToAdd = [];
      for (let i = 0; i < data.length; i++) {
        rowsToAdd.push(createWishlistRow(data[i]));
      }
      renderWishlistList(rowsToAdd);
      descInput.val("");
      amountInput.val("");
      dateInput.val("");
      catInput.val("");
      incInput.val("");
      savingsInput.val("");
    });
  }
  
  renderWishlistList = (rows) => {
    if (rows.length) {
      console.log(rows);
      wishlistList.prepend(rows);
    }
  }
  
  handleDeleteButtonPress = () => {
    const listItemData = $(this).parent("td").parent("tr").data("wishlist"); //might be user
    const id = listItemData.id;
  
    $.ajax({
      method: "DELETE",
      url: "/api/wishlist/" + id
    })
    .then(getWishlist);
  }
  