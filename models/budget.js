module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define("Budget", {
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    savings: DataTypes.BOOLEAN,
    rollover: DataTypes.BOOLEAN
  });

  Budget.associate = function(models) {
    models.Budget.belongsTo(models.User
      // foreignKey: {
      //   allowNull: false;
      // }
    );
  } 
  return Budget;
};
