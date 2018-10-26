USE currentsee_db;

INSERT INTO 
  budget (description, date, amount, category, income, savings, rollover)
VALUES 
  (Income, 10/26/2018, 2500, Salary, true, false, false),
  (Expense, 10/26/2018, 500, Expense, false, false, false),
  (Savings, 10/26/2018, 500, Savings, true, true, false);
