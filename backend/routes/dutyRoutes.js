const express = require('express');
const { dutyAssign } = require('../controllers/dutyController'); // Adjust the path as necessary

const router = express.Router();

router.post('/duty', dutyAssign);

module.exports = router;