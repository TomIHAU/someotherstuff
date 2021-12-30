const { Product } = require("../models");

const productData = [
  {
    name: "Runners",
    price: 50,
    desc: "great outdoor boots",
    type: "shoes",
    brand: "nike",
  },
  {
    name: "Trackies",
    price: 20,
    desc: "Jeans are great, but not as comfy as trackies",
    type: "pants",
  },
  {
    name: "Sports shirt",
    price: 15,
    type: "shirt",
    brand: "nike",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
