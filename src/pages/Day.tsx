import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import getDateOfDay from "@/actions/getDateOfDay";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import CreateNoteModal from "@/components/Modals/CreateNoteModal";
import { useAppSelector } from "@/redux/hooks";
import { getNotesByDate } from "@/redux/notesSlice";

export default function Day() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const { year, month, day } = getDateOfDay(location.search);

  const notes = useAppSelector((state) =>
    getNotesByDate(state, { year, month, day })
  );
  console.log(notes);

  let currentDate;
  if (year && month && day) {
    currentDate = format(new Date(year, month, day), "d MMMM yyyy");
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
      />
      <h1>{currentDate}</h1>
      <div className="flex flex-col items-center">
        <div>
          <Button label="Create note" action={() => setIsModalOpen(true)} />
        </div>
        <ul>
          {notes.map((item) => (
            <li key={item.id}>{item.body}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
