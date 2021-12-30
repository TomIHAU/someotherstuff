const router = require("express").Router();
const { Item, Cart } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const product_id = req.body.product_id;

    const cartData = await Cart.findOne({
      where: {
        user_id: req.session.user_id,
      },
    });

    const cart_id = cartData.get({ plain: true }).id;

    const itemExists = await Item.findOne({
      where: { cart_id, product_id },
    });

    if (itemExists) {
      itemExists.qty++;
      await itemExists.save();
      return;
    }
    const createItem = await Item.create({
      cart_id,
      product_id,
      qty: 1,
    });
    console.log("here", createItem);
    res.status(200).json(createItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
