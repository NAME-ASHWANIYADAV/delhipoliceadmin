const express = require('express');
const { loginUser, verifyotp } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/verify-otp', verifyotp);

module.exports = router;
