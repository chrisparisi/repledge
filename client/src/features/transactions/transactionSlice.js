import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import transactionService from './transactionService';

const initialState = {
  transactions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get Transactions
export const getNewTransactions = createAsyncThunk(
  'transactions/getAll',
  async (transactions, thunkAPI) => {
    try {
      return transactions;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.transactions = action.payload.data;
      })
      .addCase(getNewTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = transactionSlice.actions;
export default transactionSlice.reducer;
