const express = require('express');
const router = express.Router();
require('dotenv').config();

const {} = require();

const plaidClient = new plaid.Client({
  ClientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  env: plaid.environments.sandbox,
});

app.get('/create-link-token', async (req, res) => {
  const { link_token: linkToken } = await plaidClient.createLinkToken({
    user: {
      client_user_id: 'unique_id',
    },
    client_name: 'repledge test',
    products: ['auth', 'identity'],
    country_codes: ['US'],
    language: 'en',
  });

  res.json({ linkToken });
});

router.route();

module.exports = router;
