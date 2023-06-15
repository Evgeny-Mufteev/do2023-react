import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getSpeakersState = (state: TState) => state.speakers;

export const getSpeakersSelector = createSelector(getSpeakersState, ({ speakers }) => speakers.data);
export const getSpeakersIsError = createSelector(getSpeakersState, ({ speakers }) => speakers.isError);
export const getSpeakersIsSuccess = createSelector(getSpeakersState, ({ speakers }) => speakers.isSuccess);
export const getSpeakersIsLoading = createSelector(getSpeakersState, ({ speakers }) => speakers.isLoading);
