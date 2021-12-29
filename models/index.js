const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Order = require("./Order");

User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

// Cart.hasMany()

module.exports = { User, Cart, Product, Order };
