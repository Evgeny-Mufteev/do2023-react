import { createSlice } from '@reduxjs/toolkit';

export interface IModalState {
  modal: {
    isActive: boolean;
  }
}

const initialState: IModalState = {
  modal: {
    isActive: true,
  },
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.modal.isActive = true;
    },
  },
});

export const { reducer: modalReducer, name: modalNameReducer, actions } = slice;
