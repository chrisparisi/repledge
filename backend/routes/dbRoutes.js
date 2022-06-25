const express = require('express');
const router = express.Router();

const { getMonths } = require('../controllers/transactionController');

router.route('/months').get(getMonths);

module.exports = router;
