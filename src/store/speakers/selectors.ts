import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getPostsState = (state: TState) => state.speakers;

export const getSpeakersSelector = createSelector(getPostsState, ({ speakers }) => speakers.data);
export const getSpeakersIsError = createSelector(getPostsState, ({ speakers }) => speakers.isError);
export const getSpeakersIsSuccess = createSelector(getPostsState, ({ speakers }) => speakers.isSuccess);
export const getSpeakersIsLoading = createSelector(getPostsState, ({ speakers }) => speakers.isLoading);
