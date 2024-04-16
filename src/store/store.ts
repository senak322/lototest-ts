import { configureStore } from "@reduxjs/toolkit";
import lotoReducer from "./slices/lotoSlice";

export const store = configureStore({
  reducer: {
    loto: lotoReducer,
  },
});

// Определение типа AppDispatch
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;