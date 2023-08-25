import { motion } from "framer-motion";

interface IButtonProps {
  label: string;
  action?: () => void;
  secondary: boolean;
}

export default function Button({ label, action, secondary }: IButtonProps) {
  const mainStyles =
    "bg-gradient-to-t from-zinc-900 to-zinc-800 border-zinc-700";
  const secondaryStyles =
    "bg-gradient-to-t from-zinc-400 to-zinc-200 border-zinc-400 text-neutral-900";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full px-4 py-2 font-medium rounded-2xl border ${
        secondary ? secondaryStyles : mainStyles
      }`}
      onClick={action ? action : undefined}
    >
      {label}
    </motion.button>
  );
}
