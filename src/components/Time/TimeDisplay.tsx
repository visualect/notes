import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 1000);
  }, []);

  return <div className="text-xl">{format(currentTime, "HH:mm:ss")}</div>;
}
