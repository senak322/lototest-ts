import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface lotoState {
  mainNumbers: number[];
  secondNumbers: number[];
  firstField: number[];
  secondField: number[];
  isTicketWon: boolean;
  result: string;
}

const initialState: lotoState = {
  mainNumbers: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ],
  secondNumbers: [1, 2],
  firstField: [],
  secondField: [],
  isTicketWon: false,
  result: "",
};

const lotoSlice = createSlice({
  name: "loto",
  initialState,
  reducers: {
    addToField: (
      state,
      action: PayloadAction<{ number: number; isFirst: boolean }>
    ) => {
      if (action.payload.isFirst) {
        state.firstField.push(action.payload.number);
      } else {
        state.secondField.push(action.payload.number);
      }
    },
    removeFromField: (
      state,
      action: PayloadAction<{ number: number; isFirst: boolean }>
    ) => {
      const { number, isFirst } = action.payload;
      if (isFirst) {
        state.firstField = state.firstField.filter((el) => el !== number);
      } else {
        state.secondField = state.secondField.filter((el) => el !== number);
      }
    },

    setIsTicketWon: (state, action: PayloadAction<boolean>) => {
      state.isTicketWon = action.payload;
    },
    setResult: (state, action: PayloadAction<string>) => {
      state.result = action.payload;
    },

    removeField: (state) => {
      state.firstField = [];
      state.secondField = [];
    },
  },
});

export const {
  addToField,
  removeFromField,
  setIsTicketWon,
  setResult,
  removeField,
} = lotoSlice.actions;
export default lotoSlice.reducer;
