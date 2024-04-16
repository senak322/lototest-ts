import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface lotoState {
  mainNumbers: number[];
  secondNumbers: number[];
}

const initialState: lotoState = {
  mainNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  secondNumbers: [1, 2]
};

const lotoSlice = createSlice({
  name: "loto",
  initialState,
  reducers: {
    setMainNumbers: (state, action: PayloadAction<number[]>) => {
      state.mainNumbers = action.payload;
    },
  },
});

export const { setMainNumbers } = lotoSlice.actions;
export default lotoSlice.reducer;
