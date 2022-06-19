import { createSlice } from "@reduxjs/toolkit";

export interface modeState {
  value: string;
}

const initialState: modeState = {
  value: "dark",
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggle: (state: modeState) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { toggle } = modeSlice.actions;

export default modeSlice.reducer;
