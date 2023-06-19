import { createSelector } from '@reduxjs/toolkit';
import { type TState } from '../configureStore';

const getModalState = (state: TState) => state.modal;

export const isModalActiveSelector = createSelector(getModalState, ({ modal }) => modal.isActive);
