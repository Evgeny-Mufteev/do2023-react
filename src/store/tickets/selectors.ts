import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getTicketsState = (state: TState) => state.tickets;

export const getTicketsSelector = createSelector(getTicketsState, ({ tickets }) => tickets.data);
export const getTicketsIsError = createSelector(getTicketsState, ({ tickets }) => tickets.isError);
export const getTicketsIsSuccess = createSelector(getTicketsState, ({ tickets }) => tickets.isSuccess);
export const getTicketsIsLoading = createSelector(getTicketsState, ({ tickets }) => tickets.isLoading);
