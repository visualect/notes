interface IButtonProps {
  label: string;
  action?: () => void;
  secondary: boolean;
  small: boolean;
}

export default function Button({
  label,
  action,
  secondary,
  small,
}: IButtonProps) {
  const mainStyles = "hover:hover:bg-gradient-to-r from-sky-200 to-[#0090FF]";
  const secondaryStyles = "hover:bg-gradient-to-r from-red-300 to-red-500";

  return (
    <button
      className={`w-full px-4 py-2 font-bold rounded-[6px] bg-neutral-950 hover:text-black hover:border-neutral-800 border border-zinc-700 font-jetbrains transition duration-300 ease-out ${
        secondary ? secondaryStyles : mainStyles
      } ${small ? "text-xs" : "text-base"}`}
      onClick={action ? action : undefined}
    >
      {label}
    </button>
  );
}
