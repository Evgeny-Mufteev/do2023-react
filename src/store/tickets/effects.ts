import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../utils/network/apiClient';

export const getTickets = createAsyncThunk('tickets/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await apiClient.get('/tickets');
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
