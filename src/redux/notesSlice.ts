import { createSlice, nanoid, createSelector } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

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
            createdAt: date,
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
    markAllCompleted(state) {
      state.notes;
    },
  },
});

export const selectNotes = (state: RootState) => state.notes.notes;

export const selectNoteByDate = createSelector(
  [selectNotes, (_, t) => t],
  (notes, t) => {
    return notes.filter((item) => {
      const dateOfDay = new Date(item.createdAt);
      const yOD = dateOfDay.getFullYear();
      const mOD = dateOfDay.getMonth();
      const dOD = dateOfDay.getDate();

      const dateWhenNoteCreated = new Date(t);
      const yWC = dateWhenNoteCreated.getFullYear();
      const mWC = dateWhenNoteCreated.getMonth();
      const dWC = dateWhenNoteCreated.getDate();

      if (yOD === yWC && mOD === mWC && dOD === dWC) {
        return true;
      } else {
        return false;
      }
    });
  }
);

export const selectFilteredNotes = createSelector(
  [
    (state, t) => selectNoteByDate(state, t),
    (state: RootState) => state.filters,
  ],
  (notes: Note[], filters) => {
    let filteredByPriority;
    if (filters.priority === "all") {
      filteredByPriority = notes;
    } else {
      filteredByPriority = notes.filter(
        (note) => note.priority === filters.priority
      );
    }

    switch (filters.status) {
      case "active":
        return filteredByPriority.filter((note) => !note.completed);
      case "completed":
        return filteredByPriority.filter((note) => note.completed);
      default:
        return filteredByPriority;
    }
  }
);

export const { addNote, deleteNote, toggleCompleted, editNote } =
  notesSlice.actions;

export default notesSlice.reducer;
