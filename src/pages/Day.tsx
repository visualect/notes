import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";

export default function Day() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const year = Number(params.get("y"));
  const month = Number(params.get("m"));
  const day = Number(params.get("d"));
  let currentDate;
  if (year && month && day) {
    currentDate = format(new Date(year, month, day), "d MMMM yyyy");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1>{currentDate}</h1>
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
    </motion.div>
  );
}
