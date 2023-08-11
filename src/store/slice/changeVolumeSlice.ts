import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    volumeValue: 50,
};

const changeVolumeSlice = createSlice({
    name: 'changeVolume',
    initialState,
    reducers: {
        changeVolume: (state, action) => {
            state.volumeValue = action.payload;
        }
    }
});

export const {actions, reducer} = changeVolumeSlice;
export const {changeVolume} = actions;
export default reducer;