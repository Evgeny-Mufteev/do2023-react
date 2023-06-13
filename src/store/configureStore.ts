import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { speakersDataNameReducer, speakersDataReducer } from './speakers';

const rootReducer = combineReducers({
  [speakersDataNameReducer]: speakersDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export type TState = ReturnType<typeof store.getState>;
