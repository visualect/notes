export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[500px] mx-auto">{children}</div>;
}
