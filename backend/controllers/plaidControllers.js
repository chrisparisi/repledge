const asyncHandler = require('express-async-handler');
const util = require('util');
const {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  TransactionsGetRequest,
} = require('plaid');

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);

const createLinkToken = asyncHandler(async (req, res) => {
  const uniqueId = req.body.userId;
  const tokenResponse = await client.linkTokenCreate({
    user: {
      client_user_id: uniqueId,
    },
    client_name: 'repledge test',
    products: [process.env.PLAID_PRODUCTS],
    country_codes: [process.env.PLAID_COUNTRY_CODES],
    language: 'en',
  });

  console.log(tokenResponse.data);
  res.json(tokenResponse.data);
});

const exchangeToken = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { publicToken } = req.body;
  console.log(publicToken);
  const response = await client.itemPublicTokenExchange({
    public_token: publicToken,
  });

  const accessToken = response.data.access_token;

  const request = {
    access_token: accessToken,
    start_date: '2022-01-01',
    end_date: '2022-12-31',
  };

  const transResponse = await client.transactionsGet(request);
  const transactions = transResponse.data.transactions;

  // console.log('------------');
  // console.log('Trans Responese:');
  // console.log(util.inspect(transactions, false, null, true));

  const newTransactions = transactionFilter(transactions);

  let value = 0;
  newTransactions.forEach((transaction) => {
    value += Math.ceil(transaction.amount) - transaction.amount;
  });
  const donation = Math.round(value * 100) / 100;

  console.log(transactions);

  // const categoryResponse = await client.categoriesGet({});
  // let categories = categoryResponse.data;
  // console.log('------------');
  // console.log('Category Responese:');
  // console.log(util.inspect(categories, false, null, true));

  res.send(newTransactions);
});

const transactionFilter = (data) => {
  const filterByTransaction = (data) => {
    if (data.category.includes('Travel')) {
      return true;
    }
    return false;
  };

  const filteredData = data.filter(filterByTransaction);
  return filteredData;
};

module.exports = { createLinkToken, exchangeToken };
