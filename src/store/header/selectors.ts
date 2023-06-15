import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getHeaderDescState = (state: TState) => state.headerDesc;

export const getHeaderDescSelector = createSelector(getHeaderDescState, ({ headerDesc }) => headerDesc.data);
export const getHeaderDescIsError = createSelector(getHeaderDescState, ({ headerDesc }) => headerDesc.isError);
export const getHeaderDescIsSuccess = createSelector(getHeaderDescState, ({ headerDesc }) => headerDesc.isSuccess);
export const getHeaderDescIsLoading = createSelector(getHeaderDescState, ({ headerDesc }) => headerDesc.isLoading);
