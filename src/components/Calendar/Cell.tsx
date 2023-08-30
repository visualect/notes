import { useAppSelector } from "@/redux/hooks";
import { selectNoteByDate } from "@/redux/notesSlice";
import { Link } from "react-router-dom";
import { Variants, motion } from "framer-motion";

interface ICellProps {
  day: number;
  year: number;
  month: number;
  blocked: boolean;
}

const item: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "backOut",
    },
  },
};

export default function Cell({ day, year, month, blocked }: ICellProps) {
  const notesQuantity = useAppSelector((state) =>
    selectNoteByDate(state, new Date(year, month - 1, day).getTime())
  );

  return (
    <Link
      to={!blocked ? `/day?y=${year}&m=${month}&d=${day}` : ""}
      className="relative"
    >
      <motion.div
        variants={item}
        className={`flex justify-center items-center p-0 text-2xl rounded-full ${
          !blocked && "hover:text-emerald-500"
        } cursor-pointer transition duration-150 font-jetbrains
      ${blocked && "text-[#a0a0a0]"}
      `}
      >
        {day}
      </motion.div>
      {notesQuantity.length > 0 && (
        <motion.div
          variants={item}
          className="absolute -top-4 -right-2 flex justify-center items-center w-5 h-5 text-neutral-800 bg-white p-1 text-xs rounded-full font-jetbrains font-bold "
        >
          {notesQuantity.length}
        </motion.div>
      )}
    </Link>
  );
}
