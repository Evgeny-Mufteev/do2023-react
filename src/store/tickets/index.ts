import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getTickets } from './effects';
import { type ITickets } from '../../types';

export interface ITicketsState {
  tickets: {
    data: ITickets[];
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
    selectedTicketId: number | null
  };
}

const initialState: ITicketsState = {
  tickets: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    selectedTicketId: null
  },
};

const slice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setSelectedTicketId: (state, action: PayloadAction<number>) => {
      state.tickets.selectedTicketId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.pending, (state) => {
      state.tickets.isLoading = true
    });
    builder.addCase(getTickets.fulfilled, (state, { payload }) => {
      state.tickets.isSuccess = true;
      state.tickets.isLoading = false;
      state.tickets.data = payload
    });
    builder.addCase(getTickets.rejected, (state) => {
      state.tickets.isError = true;
    });
  },
});

export const { reducer: ticketsDataReducer, name: ticketsDataNameReducer } = slice;
export const { setSelectedTicketId } = slice.actions;
