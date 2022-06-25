const { MongoCursorExhaustedError } = require('mongodb');
const asyncHandler = require('express-async-handler');

const Month = require('../models/monthModel');
const Transactions = require('../models/transactionModel');

// @desc Get months
// @route GET /api/v1/months
// @access Private
const getMonths = asyncHandler(async (req, res) => {
  const months = await Month.find({ user: req.user })
    .populate('transactions')
    .exec();

  res.status(200).json(months);
});

module.exports = { getMonths };
