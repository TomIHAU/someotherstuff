const router = require("express").Router();
const { User } = require("../../models");

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (userData) {
      res.status(400).json({
        message: `Username: ${req.body.username} is already taken, please choose another one.`,
      });
      return;
    }
    console.log("in here");
    const newUser = await User.create({ ...req.body });
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      console.log(newUser);
      res.json({ user: newUser, message: "You are now logged in!" });
    });
    return newUser.id;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
