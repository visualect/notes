import { Link } from "react-router-dom";

interface ICellProps {
  day: number;
  year: number;
  month: number;
  blocked: boolean;
}

export default function Cell({ day, year, month, blocked }: ICellProps) {
  return (
    <Link to={!blocked ? `/day?y=${year}&m=${month}&d=${day}` : ""}>
      <div
        className={`flex justify-center items-center p-0 text-2xl rounded-full hover:drop-shadow-glow cursor-pointer transition duration-150
      ${blocked && "text-gray-500"}
      `}
        onClick={() => console.log(day)}
      >
        {day}
      </div>
    </Link>
  );
}
