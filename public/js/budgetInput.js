$(document).ready(function() {
const descInput = $("#description");
const amountInput = $("#amount");
const dateInput = $("#date");
const catInput = $("#category");
const incInput = $("#income");
const savingsInput = $("savings");
const rolloverInput = $("rollover");

$(document).on("submit", "#budget-form", handleBudgetFormSubmit);
$(document).on("click", ".delete-budget", handleDeleteButtonPress);

handleBudgetFormSubmit = () => {
  event.preventDefault();

  upsertBudget({
    description: descInput.val().trim(),
    amount: amountInput.val().trim(),
    date: dateInput.val().trim(),
    cateogry: catInput.val().trim(),
    income: incInput.val().trim(),
    savings: savingsInput.val().trim(),
    rolloverInput: rolloverInput.val().trim()
  });
}
});

upsertBudget = (budgetData) => {
  $.post("/api/budget", budgetData)
    .then(budgetData);
}

createBudgetRow = (budgetData) => {
  const newTr = $("<tr>");
  newTr
    .data("budget", budgetData)
    .append(`<td>${budgetData.description}</td>`)
    .append(`<td>${budgetData.amount}</td>`)
    .append(`<td>${budgetData.date}</td>`)
    .append(`<td>${budgetData.cateogry}</td>`)
    .append(`<td>${budgetData.income}</td>`)
    .append(`<td>${budgetData.savings}</td>`)
    .append(`<td>${budgetData.rollover}</td>`);

    return newTr;
}

getBudget = () => {
  $.get("/api/budget", (data) => {
    const rowsToAdd = [];
    for (let i = 0; i < data.length; i++) {
      rowsToAdd.push(createBudgetRow(data[i]));
    }
    renderBudgetList(rowsToAdd);
    descInput.val("");
    amountInput.val("");
    dateInput.val("");
    catInput.val("");
    incInput.val("");
    savingsInput.val("");
    rolloverInput.val("");
  });
}

renderBudgetList = (rows) => {
  if (rows.length) {
    console.log(rows);
    budgetList.prepend(rows);
  }
}

handleDeleteButtonPress = () => {
  const listItemData = $(this).parent("td").parent("tr").data("budget"); //might be user
  const id = listItemData.id;

  $.ajax({
    method: "DELETE",
    url: "/api/budget/" + id
  })
  .then(getBudget);
}
