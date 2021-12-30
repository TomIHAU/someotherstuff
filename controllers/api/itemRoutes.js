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

router.delete("/", async (req, res) => {
  try {
    const item_id = await Item.findByPk(req.body.id);
    if (!item_id) {
      res.status(400).json({ message: "cant find the id of this product" });
      return;
    }
    await item_id.destroy();
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/", async (req, res) => {
  try {
    const item = await Item.findOne({ where: { id: req.body.id } });
    item.qty = item.qty + req.body.change;
    await item.save();
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
