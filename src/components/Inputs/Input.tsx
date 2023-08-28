interface IInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function Input({ value, onChange, placeholder }: IInputProps) {
  return (
    <input
      className="w-full px-4 py-2 bg-zinc-800 rounded-2xl border border-zinc-700 focus:outline-none font-jetbrains"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
