import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moodMode: 'chill',
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    changeMoodStatus: (state, action) => {
      state.moodMode = action.payload;
    },
  },
});

export const { changeMoodStatus } = moodSlice.actions;
export default moodSlice.reducer;
