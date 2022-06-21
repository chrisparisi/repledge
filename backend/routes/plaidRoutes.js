const express = require('express');
const router = express.Router();

const {
  createLinkToken,
  exchangeToken,
} = require('../controllers/plaidControllers');

router.route('/create-link-token').get(createLinkToken);
router.route('/token-exchange').post(exchangeToken);

module.exports = router;
