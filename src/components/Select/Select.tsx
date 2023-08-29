import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ICustomSelectProps {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

export default function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
}: ICustomSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[120px] bg-neutral-900 ring-0 ring-offset-0 focus:ring-offset-0 focus:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-neutral-900">
        {options.map((option) => (
          <SelectItem
            className="text-neutral-100 cursor-pointer"
            key={option}
            value={option}
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
