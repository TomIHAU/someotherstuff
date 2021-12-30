const { Item } = require("../models");

const itemData = [
  {
    cart_id: 1,
    product_id: 1,
    qty: 1,
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
