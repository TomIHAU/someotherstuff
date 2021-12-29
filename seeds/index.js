const sequelize = require("../config/connection");
const { User } = require("../models");

const seedProducts = require("./productSeeds.js");
const seedUsers = require("./userSeeds.json");

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

  process.exit(0);
};

seedAll();
