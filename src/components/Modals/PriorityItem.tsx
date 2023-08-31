import { GoDotFill } from "react-icons/go";

type PriorityValues = "low" | "neutral" | "high" | "critical";

export default function PriorityItem({
  priority,
  onSelect,
  label,
  selected,
}: {
  priority: PriorityValues;
  onSelect: (value: PriorityValues) => void;
  label: string;
  selected: boolean;
}) {
  const pingGlow = {
    low: "drop-shadow-glowGray",
    neutral: "drop-shadow-glowIndigo",
    high: "drop-shadow-glowAmber",
    critical: "drop-shadow-glowRose",
  };

  const pingStyle = {
    low: "text-gray-500",
    neutral: "text-indigo-500",
    high: "text-amber-500",
    critical: "text-rose-500",
  };

  const labelStyle = {
    low: "hover:text-gray-500",
    neutral: "hover:text-indigo-500",
    high: "hover:text-amber-500",
    critical: "hover:text-rose-500",
  };

  return (
    <li
      onClick={() => onSelect(priority)}
      className={`hover:-translate-y-1 transition duration-300 ease-out flex flex-row items-center gap-2 cursor-pointer`}
    >
      <div className={`${pingGlow[priority]} ${pingStyle[priority]}`}>
        <GoDotFill size={10} />
      </div>
      <div
        className={`${labelStyle[priority]} ${
          selected && pingStyle[priority]
        } font-bold transition duration-150 ease-out`}
      >
        {label}
      </div>
    </li>
  );
}
