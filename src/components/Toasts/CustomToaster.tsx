export default function CustomToaster({ message }: { message: string }) {
  return (
    <div className="w-[300px] flex flex-row justify-center items-center text-xs font-medium text-neutral-100 p-4 bg-neutral-900 border border-zinc-800 rounded-2xl select-none">
      {message}
    </div>
  );
}
