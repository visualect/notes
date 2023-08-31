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

export default function Cell({ day, year, month }: ICellProps) {
  const currentDate = new Date();
  const isToday =
    currentDate.getDate() === day &&
    currentDate.getMonth() + 1 === month &&
    currentDate.getFullYear() === year;

  const notesQuantity = useAppSelector((state) =>
    selectNoteByDate(state, new Date(year, month - 1, day).getTime())
  );

  return (
    <Link
      to={`/day/${new Date(year, month - 1, day).getTime()}`}
      className="relative max-w-[50px]"
    >
      <motion.div
        variants={item}
        className={`flex justify-center items-center p-1 text-base sm:text-2xl rounded-md cursor-pointer transition duration-150 font-jetbrains hover:text-blue-500
        ${isToday && "underline underline-offset-8"}
      `}
      >
        {day}
      </motion.div>
      {notesQuantity.length > 0 && (
        <motion.div
          variants={item}
          className="absolute -top-3 -right-2 flex justify-center items-center w-4 h-4 sm:w-5 sm:h-5 text-neutral-100 drop-shadow-glow p-1 text-[10px] sm:text-xs rounded-full font-jetbrains font-black shadow-md"
        >
          {notesQuantity.length}
        </motion.div>
      )}
    </Link>
  );
}
