const router = require("express").Router();

const cartRoutes = require("./cartRoutes");
const itemRoutes = require("./itemRoutes");
const userRoutes = require("./userRoutes");

router.use("/cart", cartRoutes);
router.use("/item", itemRoutes);
router.use("/users", userRoutes);

module.exports = router;
