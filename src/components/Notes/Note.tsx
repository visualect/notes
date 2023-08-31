import {
  Note,
  deleteNote,
  editNote,
  toggleCompleted,
} from "@/redux/notesSlice";
import { Variants, motion } from "framer-motion";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { toast } from "sonner";
import CustomToaster from "../Toasts/CustomToaster";
import { useAppDispatch } from "@/redux/hooks";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";

interface INoteProps {
  note: Note;
}

export default function NoteItem({ note }: INoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newBody, setNewBody] = useState(note.body);
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

  const pingGlow = {
    low: "drop-shadow-glowGray",
    neutral: "drop-shadow-glowIndigo",
    high: "drop-shadow-glowAmber",
    critical: "drop-shadow-glowRose",
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const onSaveEdit = () => {
    dispatch(editNote({ id: note.id, body: newBody }));
    setIsEditing(false);
  };

  return (
    <motion.li
      className={`relative w-full flex flex-row justify-between gap-1 items-center p-4 border border-zinc-800 rounded-2xl
      ${
        note.completed ? "bg-neutral-800 text-neutral-600" : "bg-neutral-950"
      } transition duration-300 ease-out`}
      key={note.id}
      variants={item}
    >
      {isEditing ? (
        <div className="flex flex-row justify-between w-full gap-4">
          <div className="min-w-[60%] sm:min-w-[80%]">
            <Input value={newBody} placeholder="Text" onChange={setNewBody} />
          </div>
          <Button label="Save" small secondary={false} action={onSaveEdit} />
        </div>
      ) : (
        <>
          <div className="text-sm">
            {note.completed ? <s>{note.body}</s> : note.body}
          </div>
          <motion.div
            layout
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="flex flex-row gap-1"
          >
            <motion.div
              onClick={onToggleComplete}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer p-1"
            >
              <MdDone size={20} />
            </motion.div>
            {note.completed ? (
              <motion.div
                onClick={onDelete}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`cursor-pointer p-1 ${
                  note.completed && "text-white"
                }`}
              >
                <AiOutlineDelete size={20} />
              </motion.div>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-pointer p-1"
                  onClick={() => setIsEditing(true)}
                >
                  <AiOutlineEdit size={20} />
                </motion.div>
              </>
            )}
          </motion.div>
          {!note.completed && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`${
                pingStyle[note.priority]
              } absolute w-[24px] h-[24px] -top-[10px] -right-[10px] pointer-events-none`}
            >
              <div className={`relative ${pingGlow[note.priority]}`}>
                <div className="absolute">
                  <GoDotFill size={24} />
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
    </motion.li>
  );
}
