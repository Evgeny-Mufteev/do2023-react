import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../utils/network/apiClient';

export const getHeaderDesc = createAsyncThunk('header-desc/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await apiClient.get('/header-desc');
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
