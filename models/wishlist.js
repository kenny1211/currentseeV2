module.exports = function(sequelize, DataTypes) {
  var Wishlist = sequelize.define("Wishlist", {
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    savings: DataTypes.BOOLEAN
  });
  return Wishlist;
};
