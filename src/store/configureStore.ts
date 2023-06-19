import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { speakersDataNameReducer, speakersDataReducer } from './speakers';
import { ticketsDataNameReducer, ticketsDataReducer } from './tickets';
import { headerDescDataNameReducer, headerDescDataReducer } from './header';
import { modalReducer, modalNameReducer } from './modal';

const rootReducer = combineReducers({
  [speakersDataNameReducer]: speakersDataReducer,
  [ticketsDataNameReducer]: ticketsDataReducer,
  [headerDescDataNameReducer]: headerDescDataReducer,
  [modalNameReducer]: modalReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export type TState = ReturnType<typeof store.getState>;
