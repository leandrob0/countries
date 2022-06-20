import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {formattedAPIResponse} from '../types';

export interface countriesState {
    value: formattedAPIResponse[] | [];
  }

const initialState: countriesState = {
    value: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state: countriesState, action: PayloadAction<formattedAPIResponse[]>) => {
        state.value = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;