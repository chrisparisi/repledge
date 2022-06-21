const express = require('express');
const router = express.Router();

const {
  createLinkToken,
  exchangeToken,
} = require('../controllers/plaidControllers');

app.route('/create-link-token').get(createLinkToken);
app.route('/token-exchange').post(exchangeToken);

module.exports = router;
