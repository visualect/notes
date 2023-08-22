import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface NotesState {
  notes: Note[];
}

export interface Note {
  createdAt: number;
  body: string;
  done: boolean;
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {},
});

export default notesSlice.reducer;
