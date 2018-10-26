USE currentsee_db;

INSERT INTO 
  budget (description, date, amount, category, income, savings, rollover)
VALUES 
  (Income, 10/26/2018, 2500, Salary, true, false, false),
  (Expense, 10/26/2018, 500, Expense, false, false, false),
  (Savings, 10/26/2018, 500, Savings, true, true, false);
INSERT INTO wishlist (description, date, amount, category, income, savings) 
  VALUES ('Amazon Alexa', 10/26/2018, 50, Electronics, false, false);

INSERT INTO wishlist (description, date, amount, category, income, savings) 
  VALUES ('Laptop', 10/26/2018, 500, Electronics, false, false);

