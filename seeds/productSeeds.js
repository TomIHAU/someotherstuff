const { Product } = require("../models");

const productData = [
  {
    name: "Shoes",
    price: 49.99,
    description: "great outdoor boots",
  },
  {
    name: "Jeans",
    price: 19.99,
    description: "Jeans are great, but not as comfy as trackies",
  },
  {
    name: "Shirt",
    price: 29.99,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
