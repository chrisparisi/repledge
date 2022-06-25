import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
const API_URL = '/api/v1/link';

// Get transactions
const getTransactions = async () => {};

const transactionService = { getTransactions };

export default transactionService;
