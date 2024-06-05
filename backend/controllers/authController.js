const User = require('../models/User');

const loginUser = async (req, res) => {
  const { mobileNumber, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ mobileNumber });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    // User authenticated, proceed to dashboard
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  loginUser,
};
