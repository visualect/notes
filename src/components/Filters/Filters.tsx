import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Button from "../Buttons/Button";
import CustomSelect from "../Select/Select";
import { clearCompleted, markAllCompleted } from "@/redux/notesSlice";
import {
  priorityChanged,
  selectPriorityFilter,
  selectStatusFilter,
  statusChanged,
} from "@/redux/filtersSlice";

interface IFilters {
  t: number;
}

export default function Filters({ t }: IFilters) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectPriorityFilter);
  const status = useAppSelector(selectStatusFilter);

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
          onChange={(value) => dispatch(priorityChanged(value))}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-xs">Filter by status:</div>
        <CustomSelect
          options={statusOptions}
          placeholder="all"
          value={status}
          onChange={(value) => dispatch(statusChanged(value))}
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
