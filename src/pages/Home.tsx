import { useEffect } from "react";
import Calendar from "../components/Calendar/Calendar";
import DateDisplay from "../components/Time/DateDisplay";
import TimeDisplay from "../components/Time/TimeDisplay";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks";
import { deleteOld } from "@/redux/notesSlice";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(deleteOld());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col flex-1 gap-8 py-20"
    >
      <section className="flex flex-row justify-between items-center">
        <DateDisplay />
        <TimeDisplay />
      </section>
      <section>
        <Calendar />
      </section>
    </motion.div>
  );
}
