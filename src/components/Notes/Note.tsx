import { Note, deleteNote, toggleCompleted } from "@/redux/notesSlice";
import { motion } from "framer-motion";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import CustomToaster from "../Toasts/CustomToaster";
import { useAppDispatch } from "@/redux/hooks";
import { GoDotFill } from "react-icons/go";

interface INoteProps {
  note: Note;
}

export default function NoteItem({ note }: INoteProps) {
  const dispatch = useAppDispatch();

  const onDelete = () => {
    dispatch(deleteNote(note.id));
    toast.custom(() => (
      <CustomToaster message="Note was successfully deleted" />
    ));
  };

  const onToggleComplete = () => {
    dispatch(toggleCompleted(note.id));
  };

  const pingStyle = {
    low: "text-gray-500",
    neutral: "text-indigo-500",
    high: "text-amber-500",
    critical: "text-rose-500",
  };

  return (
    <motion.li
      className="relative w-full flex flex-row justify-between gap-1 items-center p-4 bg-neutral-900 border border-zinc-800 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="text-sm">
        {note.completed ? <s>{note.body}</s> : note.body}
      </div>
      <div className="flex flex-row gap-1">
        <motion.div
          onClick={onToggleComplete}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-1"
        >
          <MdDone size={20} />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-1"
        >
          <AiOutlineEdit size={20} />
        </motion.div>
        <motion.div
          onClick={onDelete}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer p-1"
        >
          <AiOutlineDelete size={20} />
        </motion.div>
      </div>
      <div
        className={`${
          pingStyle[note.priority]
        } absolute w-[24px] h-[24px] -top-[10px] -right-[10px] pointer-events-none`}
      >
        <div className="relative">
          <div className="absolute drop-shadow-glow">
            <GoDotFill size={24} />
          </div>
          <div className="absolute animate-ping">
            <GoDotFill size={24} />
          </div>
        </div>
      </div>
    </motion.li>
  );
}
