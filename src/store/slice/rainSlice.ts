import { createSlice } from "@reduxjs/toolkit";

export interface IRainState {
  rainMode: string | undefined;
  rainValue: number;
}

const rainSlice = createSlice({
  name: "rain",
  initialState: {
    rainMode: "clear",
    rainValue: 0,
  } as IRainState,

  reducers: {
    setRain: (state, action) => {
      state.rainMode = action.payload.rainMode;
      state.rainValue = action.payload.rainValue;
    },
    changeRainStatus: (state, action) => {
      const { currentStatus, value } = action.payload;
      let rainStatus;
      if (currentStatus === "rain") rainStatus = "clear";
      else if (currentStatus === "clear") rainStatus = "rain";

      state.rainMode = rainStatus;
      state.rainValue = value;
    },
  },
});

export const { setRain, changeRainStatus } = rainSlice.actions;

export default rainSlice.reducer;
