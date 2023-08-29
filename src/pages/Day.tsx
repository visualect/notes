import { useLocation } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { format } from "date-fns";
import getDateOfDay from "@/actions/getDateOfDay";
import Button from "@/components/Buttons/Button";
import { useState } from "react";
import CreateNoteModal from "@/components/Modals/CreateNoteModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectFilteredNotes } from "@/redux/notesSlice";
import Note from "@/components/Notes/Note";
import Filters from "@/components/Filters.tsx/Filters";
import {
  priorityChanged,
  selectPriorityFilter,
  selectStatusFilter,
  statusChanged,
} from "@/redux/filtersSlice";

export default function Day() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectPriorityFilter);
  const status = useAppSelector(selectStatusFilter);
  const timestamp = getDateOfDay(location.search);

  const notes = useAppSelector((state) =>
    selectFilteredNotes(state, timestamp)
  );

  let currentDate;
  if (timestamp) {
    currentDate = format(timestamp, "d MMMM,  yyyy");
  }

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col gap-8 py-20"
    >
      <CreateNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={timestamp}
      />
      <h1 className="text-sm">This is {currentDate}</h1>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-8">
          <Filters
            filter={filter}
            status={status}
            onChangeFilter={(value) => dispatch(priorityChanged(value))}
            onChangeStatus={(value) => dispatch(statusChanged(value))}
          />
          <div>
            <Button
              small={false}
              secondary={false}
              label="Add"
              action={() => setIsModalOpen(true)}
            />
          </div>
        </div>
        <motion.ul
          className="w-full flex flex-col gap-4"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {notes.map((item) => (
            <Note key={item.id} note={item} />
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}
