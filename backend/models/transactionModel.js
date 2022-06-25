const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  month: { type: mongoose.Schema.Types.ObjectId, ref: 'Month', required: true },
  merchant: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Transactions', transactionSchema);
