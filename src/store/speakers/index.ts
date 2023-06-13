import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ISpeaker } from '../../Components/Speakers/SpeakersInfo';

interface SpeakersState {
  speakers: ISpeaker[],
}

const initialState: SpeakersState = {
  speakers: [],
};

export const slice = createSlice({
  name: 'speakers',
  initialState,
  reducers: {
    setSpeakers: (state, action: PayloadAction<ISpeaker[]>) => {
      state.speakers = action.payload;
    },
  },
});

export const { reducer: speakersDataReducer, name: speakersDataNameReducer, actions } = slice;
export const { setSpeakers } = actions;
