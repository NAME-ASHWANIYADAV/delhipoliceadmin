const User = require('../models/User');
const Otp = require('../models/Otp');
const twilio = require('twilio');

console.log('TWILIO_ACCOUNT_SID:', process.env.TWILIO_ACCOUNT_SID); // Should log your Twilio SID
console.log('TWILIO_AUTH_TOKEN:', process.env.TWILIO_AUTH_TOKEN); // Should log your Twilio Auth Token
console.log('TWILIO_PHONE_NUMBER:', process.env.TWILIO_PHONE_NUMBER); // Should log your Twilio Phone Number

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

// Generate and send OTP
const sendOtp = async (mobileNumber) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.create({ mobileNumber, otp });

  await client.messages.create({
    body: `Your OTP for Delhi Police website login is ${otp}. Do not share it`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: mobileNumber,
  });
};

// Login user
const loginUser = async (req, res) => {
  const { mobileNumber } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ mobileNumber });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // Send OTP
    await sendOtp(mobileNumber);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Verify OTP
const verifyotp = async (req, res) => {
  const { mobileNumber, otp } = req.body;

  try {
    const otpRecord = await Otp.findOne({ mobileNumber, otp });
    if (!otpRecord) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    // OTP verified, proceed to dashboard
    res.status(200).json({ message: 'OTP verified, login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  loginUser,
  verifyotp,
};
