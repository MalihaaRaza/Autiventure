const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../configg');
const moment = require('moment'); 

const registerUser = async (req, res) => {
  const { username, password, date, guardianemail, gender } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!username || !password || !date || !guardianemail || !gender) {
      return res.status(400).json({ msg: 'All fields are required.' });
    }

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    
    const isValidDate = moment(date, true).isValid(); // Checks for valid format
    if (!isValidDate) {
      return res.status(400).json({ msg: 'Invalid date format. Please use YYYY-MM-DD.' });
    }


    user = new User({
      username,
      password,
      date,
      gender,
      guardianemail
    });

    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      jwtSecret = config.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      jwtSecret = config.jwtSecret,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { registerUser, loginUser };
