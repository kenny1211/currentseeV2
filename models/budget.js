module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define("Example", {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INT,
    category: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    savings: DataTypes.BOOLEAN,
    rollover: DataTypes.BOOLEAN
  });
  return Budget;
};
