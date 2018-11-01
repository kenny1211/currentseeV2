module.exports = function(sequelize, DataTypes) {
  var Wishlist = sequelize.define("Wishlist", {
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    income: DataTypes.BOOLEAN,
    savings: DataTypes.BOOLEAN
  });

  Wishlist.associate = function(models) {
  models.Wishlist.belongsTo(models.User)
}
return Wishlist;
};