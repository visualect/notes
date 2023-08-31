import { Link, useLocation } from "react-router-dom";
import { Variants, motion } from "framer-motion";
import { format } from "date-fns";
import Button from "@/components/Buttons/Button";
import { useState, useEffect } from "react";
import CreateNoteModal from "@/components/Modals/CreateNoteModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectFilteredNotes,
  selectNoteByDate,
  selectNotes,
} from "@/redux/notesSlice";
import Note from "@/components/Notes/Note";
import Filters from "@/components/Filters/Filters";
import { priorityChanged, statusChanged } from "@/redux/filtersSlice";

export default function Day() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const timestamp = +location.pathname.slice(1);

  const notes = useAppSelector((state) =>
    selectFilteredNotes(state, timestamp)
  );
  const notesForThisDay = useAppSelector((state) =>
    selectNoteByDate(state, timestamp)
  );

  const allNotes = useAppSelector(selectNotes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);

  useEffect(() => {
    dispatch(statusChanged("all"));
    dispatch(priorityChanged("all"));
  }, [dispatch]);

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

  const message = (
    <>
      You have{" "}
      <span className="underline underline-offset-4">
        {notesForThisDay.length}
      </span>{" "}
      {notesForThisDay.length === 1 ? "note" : "notes"} for this day
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col flex-1 gap-10 py-20"
    >
      <CreateNoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        date={timestamp}
      />
      <Link to={"/"} className="text-xs underline underline-offset-4 self-end">
        Back to calendar
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm">This is {currentDate}</h1>
        <p className="text-xs">
          {!notesForThisDay.length
            ? `You don't have any notes for this day`
            : message}
        </p>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="w-full flex flex-col gap-4">
          <Filters t={timestamp} />
          <div>
            <Button
              small={false}
              secondary={false}
              label="Add"
              action={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <div>
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
