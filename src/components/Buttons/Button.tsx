import { motion } from "framer-motion";

interface IButtonProps {
  label: string;
  action?: () => void;
  secondary: boolean;
}

export default function Button({ label, action, secondary }: IButtonProps) {
  const mainStyles =
    "bg-transparent  hover:text-black hover:border-none hover:hover:bg-gradient-to-r from-sky-200 to-[#0090FF]";
  const secondaryStyles =
    "bg-transparent hover:text-black hover:border-none hover:bg-gradient-to-r from-red-300 to-red-500";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full px-4 py-2 font-bold rounded-[6px] border font-jetbrains transition duration-300 ease-out ${
        secondary ? secondaryStyles : mainStyles
      }`}
      onClick={action ? action : undefined}
    >
      {label}
    </motion.button>
  );
}
