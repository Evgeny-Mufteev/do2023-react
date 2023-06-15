import { createSlice } from '@reduxjs/toolkit';
import { getHeaderDesc } from './effects';
import { type PageInfoItem } from '../../types';

interface IHeaderDescState {
  headerDesc: {
    data: PageInfoItem[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
  };
}

const initialState: IHeaderDescState = {
  headerDesc: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
  },
};

const slice = createSlice({
  name: 'headerDesc',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHeaderDesc.pending, (state) => {
      state.headerDesc.isLoading = true
    });
    builder.addCase(getHeaderDesc.fulfilled, (state, { payload }) => {
      state.headerDesc.isSuccess = true;
      state.headerDesc.isLoading = false;
      state.headerDesc.data = payload
    });
    builder.addCase(getHeaderDesc.rejected, (state) => {
      state.headerDesc.isError = true;
    });
  },
});

export const { reducer: headerDescDataReducer, name: headerDescDataNameReducer } = slice;
