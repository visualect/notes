import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import getDateOfDay from "@/actions/getDateOfDay";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import CreateNoteModal from "@/components/Modals/CreateNoteModal";
import { useAppSelector } from "@/redux/hooks";
import { getNotesByDate } from "@/redux/notesSlice";
import Note from "@/components/Notes/Note";

export default function Day() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { year, month, day } = getDateOfDay(location.search);

  const notes = useAppSelector((state) =>
    getNotesByDate(state, { year, month, day })
  );

  let currentDate;
  if (year && month && day) {
    currentDate = format(new Date(year, month - 1, day), "d MMMM yyyy");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col gap-8"
    >
      <CreateNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={{ year, month, day }}
      />
      <h1>{currentDate}</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full flex flex-row items-center justify-between">
          <div>test</div>
          <div>
            <Button
              secondary={false}
              label="Add"
              action={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <ul className="w-full flex flex-col gap-4">
          {notes.map((item) => (
            <Note key={item.id} note={item} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
