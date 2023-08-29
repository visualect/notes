import { format } from "date-fns";

export default function DateDisplay() {
  const currentDate = format(new Date(), "d MMMM, yyyy");

  return <div className="text-sm">{currentDate}</div>;
}
