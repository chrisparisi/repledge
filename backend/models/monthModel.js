const mongoose = require('mongoose');

const monthSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  month: { type: String, required: true },
  year: { type: String, required: true },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transactions',
      required: true,
    },
  ],
});

module.exports = mongoose.model('Month', monthSchema);
