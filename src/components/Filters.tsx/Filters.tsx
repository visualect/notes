import { useAppDispatch } from "@/redux/hooks";
import Button from "../Buttons/Button";
import CustomSelect from "../Select/Select";
import { clearCompleted, markAllCompleted } from "@/redux/notesSlice";

interface IFilters {
  filter: string;
  status: string;
  onChangeFilter: (value: string) => void;
  onChangeStatus: (value: string) => void;
  t: number;
}

export default function Filters({
  filter,
  onChangeFilter,
  status,
  onChangeStatus,
  t,
}: IFilters) {
  const dispatch = useAppDispatch();
  const priorityOptions = ["all", "low", "neutral", "high", "critical"];
  const statusOptions = ["all", "active", "completed"];
  return (
    <div className="flex flex-row justify-between min-h-[80px]">
      <div className="flex flex-col gap-2">
        <div className="text-xs">Filter by priority:</div>
        <CustomSelect
          options={priorityOptions}
          placeholder="all"
          value={filter}
          onChange={onChangeFilter}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xs">Filter by status:</div>
        <CustomSelect
          options={statusOptions}
          placeholder="all"
          value={status}
          onChange={onChangeStatus}
        />
      </div>
      <div className="flex flex-col gap-2 w-[200px]">
        <Button
          label="Mark all completed"
          secondary={false}
          small
          action={() => dispatch(markAllCompleted(t))}
        />
        <Button
          label="Clear completed"
          secondary={false}
          small
          action={() => dispatch(clearCompleted(t))}
        />
      </div>
    </div>
  );
}
