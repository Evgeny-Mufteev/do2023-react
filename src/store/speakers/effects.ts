import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../utils/network/apiClient';

export const getSpeakers = createAsyncThunk('speakers/fetch', async (_, { rejectWithValue }) => {
  try {
    const response = await apiClient.get('/speakers');
    console.log(response);
    return response.data;
  } catch (e) {
    return rejectWithValue(e);
  }
});
