import { createSlice, nanoid } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { getDate, getMonth, getYear } from "date-fns";

export interface NotesState {
  notes: Note[];
}

export interface Note {
  id: string;
  createdAt: number;
  body: string;
  completed: boolean;
  priority: "critical" | "high" | "neutral" | "low";
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action: PayloadAction<Note>) {
        state.notes.push(action.payload);
      },
      prepare(body, priority, date) {
        return {
          payload: {
            id: nanoid(),
            createdAt: new Date(date.year, date.month, date.day).getTime(),
            body,
            completed: false,
            priority,
          },
        };
      },
    },
    deleteNote(state, action: PayloadAction<string>) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    toggleCompleted(state, action: PayloadAction<string>) {
      state.notes = state.notes.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    },
    editNote(state, action: PayloadAction<Note>) {
      state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
  },
});

export const getNotesByDate = (
  state: RootState,
  {
    year: currYear,
    month: currMonth,
    day: currDay,
  }: { year: number; month: number; day: number }
) =>
  state.notes.notes.filter((item) => {
    const date = new Date(item.createdAt);
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date);
    if (year === currYear && month === currMonth && currDay === day) {
      return true;
    } else {
      return false;
    }
  });

export const { addNote, deleteNote, toggleCompleted, editNote } =
  notesSlice.actions;

export default notesSlice.reducer;
