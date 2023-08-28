import Button from "../Buttons/Button";
import { motion } from "framer-motion";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  body: React.ReactNode;
  actionLabel: string;
  secondaryActionLabel: string;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  secondaryActionLabel,
}: IModalProps) {
  if (!isOpen) return null;

  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black/75 backdrop-blur-sm z-10">
      <motion.div
        className="w-full md:w-[500px] max-w-[500px] flex flex-col justify-center items-center gap-14 px-4 py-14 sm:p-14 bg-neutral-900 rounded-2xl border border-neutral-800
      "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h2 className="text-2xl font-medium">{title}</h2>
        <div className="w-full">{body}</div>
        <div className="flex flex-row gap-4 w-full">
          <Button secondary label={secondaryActionLabel} action={onClose} />
          <Button secondary={false} label={actionLabel} action={onSubmit} />
        </div>
      </motion.div>
    </div>
  );
}
