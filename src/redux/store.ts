import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
