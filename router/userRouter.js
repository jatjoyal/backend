const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();
    res.send('User registered successfully');
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email, password });

    if (foundUser) {
      const temp = {
        name: foundUser.name,
        email: foundUser.email,
        _id: foundUser._id,
      };
      res.send(temp);
    } else {
      return res.status(400).json({ message: 'Login Failed' });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
