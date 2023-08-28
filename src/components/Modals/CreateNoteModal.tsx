import { useAppDispatch } from "@/redux/hooks";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import { useState } from "react";
import { addNote } from "@/redux/notesSlice";

interface ICreateNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  date: number;
}

export type priorityValues = "low" | "neutral" | "high" | "critical" | null;

export default function CreateNoteModal({
  isOpen,
  onClose,
  date,
}: ICreateNoteModalProps) {
  const [bodyValue, setBodyValue] = useState("");
  const [priority, setPriority] = useState<priorityValues>(null);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    if (!bodyValue || !priority) return;
    dispatch(addNote(bodyValue, priority, date));
    onClose();
    setBodyValue("");
    setPriority(null);
  };

  const prioritiesStyle =
    "p-2 cursor-pointer font-bold font-jetbrains hover:-translate-y-1 transition duration-300 ease-out hover:text-[#0090FF]";

  const body = (
    <div className="w-full flex flex-col gap-8">
      <Input value={bodyValue} onChange={setBodyValue} placeholder="Note" />
      <ul className="flex flex-row justify-between">
        <li
          className={`${prioritiesStyle} ${
            priority === "low" && "text-[#0090FF]"
          }`}
          onClick={() => setPriority("low")}
        >
          Low
        </li>
        <li
          className={`${prioritiesStyle} ${
            priority === "neutral" && "text-[#0090FF]"
          }`}
          onClick={() => setPriority("neutral")}
        >
          Neutral
        </li>
        <li
          className={`${prioritiesStyle} ${
            priority === "high" && "text-[#0090FF]"
          }`}
          onClick={() => setPriority("high")}
        >
          High
        </li>
        <li
          className={`${prioritiesStyle} ${
            priority === "critical" && "text-[#0090FF]"
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
      title="Add note"
      body={body}
      onSubmit={onSubmit}
      secondaryActionLabel="Cancel"
      actionLabel="Create"
    />
  );
}
