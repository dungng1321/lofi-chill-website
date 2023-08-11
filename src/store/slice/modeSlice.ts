import { createSlice } from '@reduxjs/toolkit';

export interface IModeState {
  mode: string;
}
const initialState: IModeState = {
  mode: 'day',
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload 
    },
    changeDayNight: (state) => {
      state.mode = state.mode === 'day' ? 'night' : 'day';
    },
  },
});

export const { setMode, changeDayNight } = modeSlice.actions;

export default modeSlice.reducer;
