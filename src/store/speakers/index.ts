import { createSlice } from '@reduxjs/toolkit';
import { getSpeakers } from './effects';
import { type ISpeaker } from '../../types';

interface ISpeakersState {
  speakers: {
    data: ISpeaker[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: ISpeakersState = {
  speakers: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'speakers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSpeakers.pending, (state) => {
      state.speakers.isLoading = true
    });
    builder.addCase(getSpeakers.fulfilled, (state, { payload }) => {
      state.speakers.isSuccess = true;
      state.speakers.isLoading = false;
      state.speakers.data = payload
    });
    builder.addCase(getSpeakers.rejected, (state) => {
      state.speakers.isError = true;
    });
  },
});

export const { reducer: speakersDataReducer, name: speakersDataNameReducer } = slice;
