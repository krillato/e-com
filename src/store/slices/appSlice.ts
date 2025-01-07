import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProp = {
  counter: number;
};

const initialValue: StateProp = { counter: 0 };

const appSlice = createSlice({
  name: "app",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
  },
});

export default appSlice.reducer;
export const appSelector = (state: RootState) => state.appReducer;
export const { increment, decrement } = appSlice.actions;
