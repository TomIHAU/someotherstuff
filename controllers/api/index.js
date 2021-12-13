const router = require("express").Router();

const userRoutes = require("./userRoutes");

router.use("/history", historyRoutes);

module.exports = router;
