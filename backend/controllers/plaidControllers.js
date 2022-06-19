const asyncHandler = require('express-async-handler');
const util = require('util');
const plaid = require('plaid');

const plaidClient = new plaid.Client({
  ClientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  env: plaid.environments.sandbox,
});

const createLinkToken = asyncHandler(async (req, res) => {
  const { link_token: linkToken } = await plaidClient.createLinkToken({
    user: {
      client_user_id: 'unique_id',
    },
    client_name: 'repledge test',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
  });

  res.json({ linkToken });
});

const exchangeToken = asyncHandler(async (req, res) => {
  const { publicToken } = req.body;
  const { access_token: accessToken } = await plaidClient.exchangePublicToken(
    publicToken
  );

  const authRespone = plaidClient.getAuth(accessToken);
  console.log('------------');
  console.log('Auth Responese:');
  console.log(util.inspect(authRespone, false, null, true));

  const identityRespone = plaidClient.getIdentity(accessToken);
  console.log('------------');
  console.log('Identity Responese:');
  console.log(util.inspect(identityRespone, false, null, true));

  const balanceResponse = plaidClient.getBalance(accessToken);
  console.log('------------');
  console.log('Identity Responese:');
  console.log(util.inspect(balanceResponse, false, null, true));

  res.sendStatus(200);
});

module.exports = { createLinkToken };
