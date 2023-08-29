import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const Statuses = {
  All: "all",
  Completed: "completed",
  Active: "active",
};

export const Priorities = {
  All: "all",
  Low: "low",
  High: "high",
  Critical: "critical",
};

interface filtersState {
  status: string;
  priority: string;
}

const initialState: filtersState = {
  status: Statuses.All,
  priority: Priorities.All,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    statusChanged(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    priorityChanged(state, action: PayloadAction<string>) {
      state.priority = action.payload;
    },
  },
});

export const selectPriorityFilter = (state: RootState) =>
  state.filters.priority;

export const selectStatusFilter = (state: RootState) => state.filters.status;

export const { statusChanged, priorityChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
