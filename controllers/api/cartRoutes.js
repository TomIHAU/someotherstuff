const router = require("express").Router();
const { Cart } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const createCart = await Cart.create({
      user_id: req.session.user_id,
    });
    res.status(200).json(createCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
