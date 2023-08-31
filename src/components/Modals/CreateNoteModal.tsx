import { useAppDispatch } from "@/redux/hooks";
import Input from "../Inputs/Input";
import Modal from "./Modal";
import { useState } from "react";
import { addNote } from "@/redux/notesSlice";
import PriorityItem from "./PriorityItem";

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

  const body = (
    <div className="w-full flex flex-col gap-8">
      <Input value={bodyValue} onChange={setBodyValue} placeholder="Note" />
      <ul className="flex flex-row justify-between text-sm sm:text-base gap-2">
        <PriorityItem
          priority="low"
          label="Low"
          onSelect={setPriority}
          selected={priority === "low"}
        />
        <PriorityItem
          priority="neutral"
          label="Neutral"
          onSelect={setPriority}
          selected={priority === "neutral"}
        />
        <PriorityItem
          priority="high"
          label="High"
          onSelect={setPriority}
          selected={priority === "high"}
        />
        <PriorityItem
          priority="critical"
          label="Critical"
          onSelect={setPriority}
          selected={priority === "critical"}
        />
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
