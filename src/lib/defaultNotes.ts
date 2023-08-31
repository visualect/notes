import { nanoid } from "@reduxjs/toolkit";

export const defaultNotes = [
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Create new note for this day",
    completed: false,
    priority: "neutral",
  },
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Delete this note",
    completed: true,
    priority: "high",
  },
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Filter notes by priority",
    completed: false,
    priority: "neutral",
  },
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Edit this note",
    completed: false,
    priority: "critical",
  },
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Mark all notes as completed",
    completed: false,
    priority: "high",
  },
  {
    id: nanoid(),
    createdAt: new Date().getTime(),
    body: "Tutorial: Delete completed notes",
    completed: false,
    priority: "low",
  },
];
