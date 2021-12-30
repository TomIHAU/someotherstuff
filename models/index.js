const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Item = require("./Item");

User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

Cart.hasMany(Item, {
  foreignKey: "cart_id",
});

Item.belongsTo(Cart, {
  foreignKey: "cart_id",
});

Item.belongsTo(Product, {
  foreignKey: "product_id",
});

Product.hasOne(Item, {
  foreignKey: "product_id",
});

module.exports = { User, Cart, Product, Item };
