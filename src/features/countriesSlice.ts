import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { formattedAPIResponse } from "../types";

export interface countriesState {
  data: formattedAPIResponse[] | [];
  loading: boolean;
}

const initialState: countriesState = {
  data: [],
  loading: true,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (
      state: countriesState,
      action: PayloadAction<formattedAPIResponse[]>
    ) => {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
