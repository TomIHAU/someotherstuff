const sequelize = require("../config/connection");
const { User } = require("../models");

const seedProducts = require("./productSeeds.js");
const seedUsers = require("./userSeeds.json");
const seedCarts = require("./cartSeeds.js");
const seedItems = require("./itemSeeds.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true,
  });

  console.log("\n----- USERS SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");
  await seedCarts();
  console.log("\n----- Carts SEEDED -----\n");

  await seedItems();
  console.log("\n----- Items SEEDED -----\n");

  process.exit(0);
};

seedAll();
