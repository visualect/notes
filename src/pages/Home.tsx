import Calendar from "../components/Calendar/Calendar";
import DateDisplay from "../components/Time/DateDisplay";
import TimeDisplay from "../components/Time/TimeDisplay";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col gap-8 py-20"
    >
      <section className="flex flex-row justify-between items-center">
        <DateDisplay />
        <TimeDisplay />
      </section>
      <section className="h-[500px]">
        <Calendar />
      </section>
    </motion.div>
  );
}
