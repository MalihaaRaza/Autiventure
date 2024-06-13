const express = require('express');
const router = express.Router();
const User = require('../models/User');

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      password
    });

    await user.save();

    res.send('User registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
