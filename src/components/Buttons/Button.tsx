import { motion } from "framer-motion";

interface IButtonProps {
  label: string;
  action?: () => void;
}

export default function Button({ label, action }: IButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-full px-4 py-2 bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-800"
      onClick={action ? action : undefined}
    >
      {label}
    </motion.button>
  );
}
