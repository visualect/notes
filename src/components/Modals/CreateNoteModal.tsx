import { useAppDispatch } from "@/redux/hooks";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import { useState } from "react";
import { addNote } from "@/redux/notesSlice";
// import { GoDotFill } from "react-icons/go";

interface ICreateNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: { year: number; month: number; day: number };
}

export default function CreateNoteModal({
  isOpen,
  onClose,
  date,
}: ICreateNoteModalProps) {
  const [bodyValue, setBodyValue] = useState("");
  const [priority, setPriority] = useState<
    "low" | "neutral" | "high" | "critical" | null
  >(null);

  const dispatch = useAppDispatch();

  const priorityBase = "px-4 py-2 border rounded-2xl cursor-pointer relative";

  const onSubmit = () => {
    if (!bodyValue || !priority) return;
    dispatch(addNote(bodyValue, priority, date));
    onClose();
    setBodyValue("");
    setPriority(null);
  };

  const body = (
    <div className="w-full flex flex-col gap-8">
      <Input value={bodyValue} onChange={setBodyValue} placeholder="Note" />
      <ul className="flex flex-row justify-between">
        <li
          className={`${priorityBase}  ${priority === "low" && "bg-slate-500"}`}
          onClick={() => setPriority("low")}
        >
          Low
        </li>
        <li
          className={`${priorityBase} ${
            priority === "neutral" && "bg-slate-500"
          }`}
          onClick={() => setPriority("neutral")}
        >
          Neutral
        </li>
        <li
          className={`${priorityBase}  ${
            priority === "high" && "bg-slate-500"
          }`}
          onClick={() => setPriority("high")}
        >
          High
        </li>
        <li
          className={`${priorityBase}  ${
            priority === "critical" && "bg-slate-500"
          }`}
          onClick={() => setPriority("critical")}
        >
          Critical
        </li>
      </ul>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="New note"
      body={body}
      onSubmit={onSubmit}
      secondaryActionLabel="Cancel"
      actionLabel="Create"
    />
  );
}
