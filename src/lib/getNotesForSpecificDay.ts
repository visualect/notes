import { Note } from "@/redux/notesSlice";

export default function getNotesForSpecificDay(notes: Note[], day: number) {
  return notes.filter((item) => {
    const dateOfDay = new Date(item.createdAt);
    const yOD = dateOfDay.getFullYear();
    const mOD = dateOfDay.getMonth();
    const dOD = dateOfDay.getDate();

    const dateWhenNoteCreated = new Date(day);
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
