const express = require('express');
const router = express.Router();

const {
  createLinkToken,
  exchangeToken,
} = require('../controllers/plaidController');

router.route('/create-link-token').post(createLinkToken);
router.route('/token-exchange').post(exchangeToken);

module.exports = router;
