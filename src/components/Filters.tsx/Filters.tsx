import Button from "../Buttons/Button";
import CustomSelect from "../Select/Select";

interface IFilters {
  filter: string;
  status: string;
  onChangeFilter: (value: string) => void;
  onChangeStatus: (value: string) => void;
}

export default function Filters({
  filter,
  onChangeFilter,
  status,
  onChangeStatus,
}: IFilters) {
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
        <Button label="Mark all completed" secondary={false} small />
        <Button label="Clear completed" secondary={false} small />
      </div>
    </div>
  );
}
