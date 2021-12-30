const { Cart } = require("../models");

const cartData = [
  {
    user_id: 1,
  },
];

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;
