const express = require('express');
const router = express.Router();

const { createLinkToken } = require('../controllers/plaidControllers');

app.route('/create-link-token').get(createLinkToken);

module.exports = router;
